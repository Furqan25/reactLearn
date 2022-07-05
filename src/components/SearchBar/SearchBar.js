import './searchbar.css';
import {createRef, useEffect} from 'react';

export default function SearchBar (props) {
    const {keyword, saveSearch} = props;
    let inputRef = createRef(); // container for a DOM element

    useEffect(()=>{
        //We do this because want inputRef on initial laod and if keyword in App changes
        inputRef.current.value = keyword;
    },[keyword, inputRef]);
    
    function submitted(ev){
        ev.preventDefault();
        saveSearch(inputRef.current.value);
    }
 
    return (
        <section className='searchBar'>
            <form onSubmit={submitted}>
                <input type="text" name="keyword" className='searchText' placeholder='keyword' ref={inputRef}/>
                <button type='submit' name='searchBtn' className='searchBtn'> Search</button>
            </form>
            { props.term && <p>You Searched for {props.term}</p> }
        </section>
    );
}
//{props.term ? <p>You Searched for {props.term}</p> : ''}
//forward ref hook
