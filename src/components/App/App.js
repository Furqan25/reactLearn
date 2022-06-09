import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import {useState} from 'react';

export default function App() {
    const name = 'Company Name';
    const [terms, setTerms] = useState(['new hpoe', 'empire']);
   
    function addTerm (term){
        setTerms([term, ...terms])
    }

    return (
        <div className='App'>
            <Header company={name} />
            <SearchBar term={terms[0]} addTerm={addTerm} />
            <SearchHistory terms={terms}/>
        </div>
    );
}

