import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Main from '../Main/Main';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function App() {
    const name = 'Company Name';
    const {pathname} = useLocation();
    const [page, setPage] = useState(pathname);
    const [keyword, setKeyword] = useState("");

    function saveSearch (term) {
        setKeyword(term);
    }

    useEffect(()=>{
        //see if /planets => /films change keyword
        //if /planets => /planets/5 DO NOT change
        let newPath = pathname.split("/")[1]; //[0] would be empty
        let oldPath = page.split("/")[1];
        if(newPath !== oldPath){
            setPage(pathname);
            setKeyword("");
        }
    },[pathname]);

    return (
        <div className='App'>
            <Header company={name} />
            <SearchBar keyword={keyword} saveSearch={saveSearch} />
            <main className='content'>
                <Main keyword={keyword}/>
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