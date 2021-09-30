import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCharacters from './ShowCharacters';
import Navigation from './Navigation';

//peticiones : https://gateway.marvel.com:443/v1/public/characters?apikey=653abf6748c3bb17cbffa7f7d4336367

//public key: 653abf6748c3bb17cbffa7f7d4336367

//private key: e988953c743a7686fe7447a181a2295c529f2ab9

//ts: 1

//hash: 86548f0fbf01bf063246e4b956858476

const Characters = () => {

    const [heros, setHeros] = useState([]);

    const [busqueda, setBusqueda] = useState('spider');

    const [link, setLink] = useState(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&ts=1&apikey=653abf6748c3bb17cbffa7f7d4336367&hash=86548f0fbf01bf063246e4b956858476`);

    useEffect(() => {
        getHeros();
    }, [])

    const search = (event) => {
        setBusqueda(event.target.value);
        setLink(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&ts=1&apikey=653abf6748c3bb17cbffa7f7d4336367&hash=86548f0fbf01bf063246e4b956858476`)
        getHeros();
        console.log('busqueda: ',busqueda);
        console.log('event: ', event.target.value);
        console.log('link: ',link);
    }

    const getHeros = async () => {
        const response = await axios.get(link);
        const herosResponse = response.data.data.results;
        setHeros(herosResponse);
        console.log(heros);
    }

    return (
        <div className="container">

            
            <Navigation search={search} />
            <ShowCharacters heros={heros}/>
        </div>
        
    )
}

export default Characters;
