import "./listitem.css";

export default function ListItem (props){
    const {data} = {...props};

    return(
        <li className="listitem" data-ref={data.ref}>
            <h2 className="title">{data.title}</h2>
            {data.text && <p> {data.text} </p>}
        </li>
    )
}