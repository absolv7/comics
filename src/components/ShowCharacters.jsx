import React from 'react'

const ShowCharacters = ({heros}) => {
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

export default ShowCharacters;
