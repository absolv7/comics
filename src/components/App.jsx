import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCharacters from './ShowCharacters';
import axios from 'axios';
import { useEffect, useState } from 'react';

//peticiones : https://gateway.marvel.com:443/v1/public/characters?apikey=653abf6748c3bb17cbffa7f7d4336367

//public key: 653abf6748c3bb17cbffa7f7d4336367

//private key: e988953c743a7686fe7447a181a2295c529f2ab9

//ts: 1

//hash: 86548f0fbf01bf063246e4b956858476


const App = () => {

    const [heros, setHeros] = useState([]);

    const [busqueda, setBusqueda] = useState('captain');

    const [link, setLink] = useState(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&ts=1&apikey=653abf6748c3bb17cbffa7f7d4336367&hash=86548f0fbf01bf063246e4b956858476`);

    useEffect(() => {
        getHeros();
    }, [])

    const busq = (event) => {
        console.log('event: ',event.target.value);
        setBusqueda(event.target.value);
        console.log('busqueda: ',busqueda);
        console.log('link: ', link);
        setLink(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&ts=1&apikey=653abf6748c3bb17cbffa7f7d4336367&hash=86548f0fbf01bf063246e4b956858476`)
        getHeros();
    }

    const submitEvent = (event) => {
        event.preventDefault();
        setBusqueda(event.target.value);

    }

    const getHeros = async () => {
        const response = await axios.get(link);
        const herosResponse = response.data.data.results;
        setHeros(herosResponse);
    }

    return (
        <div className="container">

            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand" href="/">Navbar</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={busq}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={submitEvent}>Search</button>
                </form>
            </nav>

            <ShowCharacters heros={heros}/>
        </div>
        
    )
}

export default App;