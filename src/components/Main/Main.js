import './main.css';
import {Navigate , Routes, Route, useLocation} from 'react-router-dom';
import People from "../People/People";
import Person from "../Person/Person";
import Planets from "../Planets/Planets";
import Films from "../Films/Films";
import Home from "../Home/Home";
import Sub from '../Sub/Sub';
import { useState, useEffect } from 'react';

export default function Main (props){
    let {keyword} = props;
    let name = ["Kylo","Rey"];
    let nms = Array.isArray(name) ? name.join(" and ") : name;
    const {pathname} = useLocation();
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        try{
            (async function () {
                if(pathname.indexOf('/people') > -1){ //never gets unmounted so must check if current path is /people
                    let resp = await fetch(`https://swapi.dev/api/people?search=${keyword}`);
                    let data = await resp.json();
                    console.log("Fetched the people. Updating the state");
                    setPeople(data.results);
                }
            })();
        }
        catch (err){
            console.log(err);
        }
    },[pathname, keyword]);
    
    return (
        <div className='mainContent'>
            <Routes>
                <Route path="/films/*" element={<Films keyword={keyword}/>}/>

                <Route path="/people/*" element={<People list={people}/>}>
                    <Route path=":id" element={<Person list={people}/>}/>
                </Route>
                    
                <Route path="/planets/*" element={<Planets keyword={keyword}/>}/>                

                <Route path='/' exact 
                element={
                    <Home name={nms} active={false}>
                        <Sub/>
                        <Sub/>
                    </Home>
                }/>

                <Route path="*" element={<Navigate to="/" replace={true} />}/>
            </Routes>
        </div>
    );
}