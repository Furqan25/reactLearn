import './searchhistory.css';
import List from '../List/List'

export default function SearchHistory(props) {
    const {terms} = {...props};

    let formattedData = terms.map((item,index)=>{
        return{
            ref: index,
            title: item,
            text: null
        };
    });

    return(
        <div className='history'>
            <List data={formattedData} />
        </div>

    )
}

/**
 
    <ul>
        {props.terms.map(term => {
            return <li key={term}>{term}</li>
        })}
    </ul>
 */