import './App.css';
import Header from '../Header/Header';

export default function App() {
    const name = 'Company Name';
    return (
        <div className='App'>
            <Header company={name} title="some stuff"/>
        </div>
    );
}


