import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from './Filter';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Card from './Card';
import { allPokemon, allTypes } from "../Actions";
//faltan varias cosas!!
export default function Home() {
    const dispatch = useDispatch();
    const allpoke = useSelector((state) => state.pokemon)
    const alltypes = useSelector((state) => state.types)
    
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

    return (
        <div>
            <div>{<Navbar />}</div>
            <div>{<Filter />}</div>
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