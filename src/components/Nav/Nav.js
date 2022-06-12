import './nav.css';
import Link from '../Link/Link';

export default function Nav(props){
    const links = [
        {title:"Films", url:"Google.com"},
        {title:"People",url:"Github.com"},
        {title:"Planets",url:"Linkedin.com"}
    ];

    return (
        <nav>
            {links.map(lnk=>{
                return <Link link={lnk} key={lnk.title}/>
            })}  
        </nav>
    )
}