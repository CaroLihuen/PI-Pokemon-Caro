import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from './Filter';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Card from './Card';
import { allPokemon, allTypes, filterAsc, filterAttack, filterTypes, filterPoke } from "../Actions";
//faltan varias cosas!!
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
        dispatch()
        setPage(1)
    }
    
    function handleTypes(e){//por types
        e.preventDefault();
        dispatch(filterTypes(e.target.value))
        //setPage(1)
    }

    function handleClick(e){
        e.preventDefault();
        dispatch()
        setPage(1)
    }

    return (
        <div>
            <div>{<Navbar/>}</div>
            <div>
             <h4>Filter by Existing or Created</h4>
             <div>
              <select>
               <option>All Pokemons</option>
               <option>Created</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by alphabet</h4>
             <div>
              <select onChange={(e)=> handleAsc(e) } >
               <option value="A-Z" >A-Z</option>
               <option value="Z-A" >Z-A</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by attack</h4>
             <div>
              <select onChange={(e)=> handleAttack(e) }>
               <option value="Most" > Most</option>
               <option value="Least">Least</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by Type</h4>
             <div>
              <select onChange={(e)=>handleTypes(e) } >
                 {/* <option>All</option>*/}
                 Types:
                 <option key="All" value="All">All</option>
                { alltypes.map((t)=>{
                 return  <option key={t.id} value={t.name}> {t.name}</option>  
                })} 
              </select>   
             </div>
            </div>
            <Link to='/pokemon'> 
             <button>Add Pokemon</button>
            </Link>
            <div>{<SearchBar />}</div>
            <div>
             <Pagination
              pokeforPage={pokeforPage}
              allpoke={allpoke.length}
              page={page}
             />
            </div>
            <div>
            {currentP.map((p)=>{
             return(
              <div key={p.id }>
                <Link to={'/home/'+ p.id } >
                 <Card card={currentP} name={p.name} sprite={p.sprite} types={p.types} />
                </Link>
              </div>    
              )
             })
            }
            </div>
        </div>
    )
}