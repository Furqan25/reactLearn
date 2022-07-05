import { useState, useEffect } from 'react';
import {Routes , Route, NavLink } from 'react-router-dom';
import Planet from '../Planet/Planet';
import './planets.css';

export default function Planets(props) {
  // state inside Planets, shared to Planet via props
  // second approach
    const [list, setList] = useState([]);
    let {keyword} = props;

    useEffect(()=>{
        try{
            (async function () {
                let resp = await fetch(`https://swapi.dev/api/planets?search=${keyword}`);
                let data = await resp.json();
                setList(data.results);
                console.log("planet sfetch", keyword)
            })();
        }
        catch(err){
            console.log(err);
        }
    },[keyword]);

    function findPlanet(id) {
        return list.find((item, index) => parseInt(id) === index + 1);
    }

  return (
    <>
        <div className="results">
            <h2>Planet List</h2>
            {list.length === 0 && <p>No planets...</p>}

            {list.map((planet, index) => (
                <p key={planet.name}>
                    <NavLink className={({isActive})=>(isActive ? "activeLink" : "")} to={`/planets/${index + 1}`}>
                        {planet.name}
                    </NavLink>
                </p>
            ))}
        </div>

        <div className="details">
            <Routes>
                <Route path=":id" element={<Planet findPlanet={findPlanet}/>}/>
            </Routes>
        </div>
    </>
  );

}