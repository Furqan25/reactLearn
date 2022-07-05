import {Routes, Route, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Film from "../Film/Film";
import "./films.css";

export default function Films (props){
    const [list,setList] = useState([]);
    let {keyword} = props;
    useEffect(()=>{
        try{
            (async function () {
                let resp = await fetch(`https://swapi.dev/api/films?search=${keyword}`);
                let data = await resp.json();
                setList(data.results);
            })();
        }
        catch(err){
            console.log(err);
        }
    },[keyword]);

    function findFilm(id) {
        return list.find((item, index) => parseInt(id) === index + 1);
      }

    return (
        <>
            <div className="results">
                <h2>Film List</h2>
                {list.length === 0 && <p>No films...</p>}
                
                {list.map((film, index) => (
                    <p key={film.title}>
                        <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to={`/films/${index + 1}`}>
                            {film.title}
                        </NavLink>
                    </p>
                ))}
            </div>

            <div className="details">
                <Routes>
                    <Route path=":id" element={<Film findFilm={findFilm}/>}/>
                </Routes>
            </div>
        </>
    )
}