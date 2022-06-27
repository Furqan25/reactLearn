import './nav.css';
import {NavLink} from 'react-router-dom';

export default function Nav(props){

    return (
        <nav className='mainNav'> 
            <NavLink className={({isActive}) => (isActive ? "activeLink" : "")} to={"/films"}>Films</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink" : "")} to={"/people"}>People</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink" : "")} to={"/planets"}>Planets</NavLink>
        </nav>
    );
}