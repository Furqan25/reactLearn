import './searchhistory.css';

export default function SearchHistory(props) {
    return(
        <ul>
            {props.terms.map(term => {
                return <li key={term}>{term}</li>
            })}
        </ul>

    )
}