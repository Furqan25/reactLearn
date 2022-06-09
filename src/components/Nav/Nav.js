import './nav.css';
import Link from '../Link/Link';

export default function Nav(props){
    const links = [
        {title:"Google", url:"Google.com"},
        {title:"Github",url:"Github.com"},
        {title:"Linkedin",url:"Linkedin.com"}
    ];

    return (
        <nav>
            {links.map(lnk=>{
                return <Link link={lnk} key={lnk.title}/>
            })}  
        </nav>
    )
}