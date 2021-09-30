import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//peticiones : https://gateway.marvel.com:443/v1/public/characters?apikey=653abf6748c3bb17cbffa7f7d4336367

//public key: 653abf6748c3bb17cbffa7f7d4336367

//private key: e988953c743a7686fe7447a181a2295c529f2ab9

//ts: 1

//hash: 86548f0fbf01bf063246e4b956858476


const App = () => {

    const [heros, setHeros] = useState([]);

    const link = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=653abf6748c3bb17cbffa7f7d4336367&hash=86548f0fbf01bf063246e4b956858476';

    useEffect(() => {
        getHeros();
    }, [])

    const getHeros = async () => {
        const response = await axios.get(link);
        const herosResponse = response.data.data.results;
        setHeros(herosResponse);
    }


    return (
        <div className="row row-cols-1 row-cols-md-3 g4">
            {heros.map((hero) => (
                <div className="col">
                    <div className="card" style={{width:"17rem",height:"17rem"}}>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" style={{width:"100%",height:"100%"
                        }} className="card-img-top"/>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{hero.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App;