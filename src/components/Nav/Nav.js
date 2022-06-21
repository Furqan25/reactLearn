import './nav.css';
import {Link} from 'react-router-dom';

export default function Nav(props){

    return (
        <nav className='mainNav'> 
            <Link to={"/films"}>Films</Link>
            <Link to={"/people"}>People</Link>
            <Link to={"/planets"}>Planets</Link>
        </nav>
    );
}