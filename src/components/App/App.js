import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Main from '../Main/Main';
import {useState} from 'react';

export default function App() {
    const name = 'Company Name';
    const [terms, setTerms] = useState([]);

    function addTerm (term){
        let newTerms = new Set ([term, ...terms]);
        setTerms(Array.from(newTerms));
    }

    return (

        <div className='App'>
            <Header company={name} />
            <SearchBar term={terms[0]} addTerm={addTerm} />
            <main className='content'>
                <Main/>
            </main>
        </div>
    );
}


/**
     function addTerm (term){
        let newTerms = new Set ([term, ...terms]);
        setTerms(Array.from(newTerms));
        //fetchData(term);
    }

    OR

    useEffect(()=>{
        fetchData(terms[0]);
        return ()=>{
            //clean up function
        }
    },[terms]);
 */