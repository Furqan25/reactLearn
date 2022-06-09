import './link.css';

export default function Link (props){
    
    return (
        <a className='navLink' href={props.link.url} > {props.link.title} </a>
    )
}