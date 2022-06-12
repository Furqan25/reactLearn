import './searchbar.css';
//import {useState} from 'react';

export default function SearchBar (props) {

    function submitted(ev){
        ev.preventDefault();
        props.addTerm(ev.target['keyword'].value);
    }


    return (
        <section className='searchBar'>
            <form onSubmit={submitted}>
                <input type="text" name="keyword" className='searchText' placeholder='keyword'/>
                <button type='submit' name='searchBtn' className='searchBtn'> Search</button>
            </form>
            { props.term && <p>You Searched for {props.term}</p> }
        </section>
    )
}
//{props.term ? <p>You Searched for {props.term}</p> : ''}
