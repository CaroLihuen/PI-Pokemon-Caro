import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Card from './Card';
import { allPokemon, allTypes, filterAsc, filterAttack, filterTypes, filterPoke } from "../Actions";
import '../Styles/Home.css';
//Listo!!
export default function Home() {
    const dispatch = useDispatch();
    const allpoke = useSelector((state) => state.pokemon)
    const alltypes = useSelector((state) => state.types)
    
    const [order, setOrder] = useState('')
    const [currentPage, setPage] = useState(1);
    const [pokeforPage, setpokeforPage] = useState(12);
    const indexOfLastPoke = currentPage * pokeforPage;
    const indexOfFirtsPoke = indexOfLastPoke - pokeforPage;
    const currentP = allpoke.slice(indexOfFirtsPoke, indexOfLastPoke)

    const page = (numberPage) => {
        setPage(numberPage)
    }

    useEffect(() => {
        dispatch(allPokemon())
    }, [dispatch])

    useEffect(() => {
        dispatch(allTypes())
    }, [dispatch])

    function handleAsc(e){//busqueda az/za
        e.preventDefault();
        dispatch(filterAsc(e.target.value))
        setPage(1)
        setOrder(`Ordered ${e.target.value}`)
    }

    function handleAttack(e){//busqueda por atauqe
        e.preventDefault();
        dispatch(filterAttack(e.target.value))
        setPage(1)
        setOrder(`Ordered ${e.target.value}`)
    }

    function handleCreate(e){//creado o api o all
        e.preventDefault();
        dispatch(filterPoke(e.target.value))
        setPage(1)
    }
    
    function handleTypes(e){//por types:
        e.preventDefault();
        dispatch(filterTypes(e.target.value))
        setPage(1)
    }

    function handleClick(e){
        e.preventDefault();
        dispatch()
        setPage(1)
    }

    return (
        <div className="Fondo">
         <div className="Barra">
            <div>{<Navbar/>}</div>
            <div className="filtros" > 
            <div className="CadaUno">
            <div>
             <h4 className="Subtitulo">Filter by Existing or Created</h4>
             <div>
              <select onChange={(e)=> handleCreate(e) }>
               <option value="" >All Pokemons</option>
               <option value="All" >Api</option>
               <option value="Created" >Created</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4 className="Subtitulo">Filter by alphabet</h4>
             <div>
              <select onChange={(e)=> handleAsc(e) } >
               <option value="" >All</option>   
               <option value="A-Z" >A-Z</option>
               <option value="Z-A" >Z-A</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4 className="Subtitulo">Filter by attack</h4>
             <div>
              <select onChange={(e)=> handleAttack(e) }>
               <option value="" >All</option>      
               <option value="Most" > Most</option>
               <option value="Least">Least</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4 className="Subtitulo">Filter by Type</h4>
             <div>
              <select onChange={(e)=>handleTypes(e) }>
                 Types:
                 <option key="All" value="All">All</option>
                { alltypes?.map((t)=>{
                 return  <option key={t.id} value={t.name}> {t.name}</option>  
                })} 
              </select>   
             </div>
            </div>
            </div>
            <div className="addVg"> 
            <Link to='/pokemon'> 
             <button className="button">Add Pokemon</button>
            </Link>
            </div>
            <div className="search">{<SearchBar />}</div>
             
            </div>
           </div>
            <div className="paginado">
             <Pagination
              pokeforPage={pokeforPage}
              allpoke={allpoke.length}
              page={page}
             />
            </div>
            <div className="container">
            {currentP.map((p)=>{
             return(
              <div key={p.id }>
                <Link  className="card" to={'/home/'+ p.id } >
                 <Card className="card" card={currentP} name={p.name} sprite={p.sprite} 
                 attack={p.attack}  types={p.types} />
                </Link>
              </div>    
              )
             })
            }
            </div>
        </div>
    )
}