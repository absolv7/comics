import React from 'react'
import marvel from '../images/marvel.svg';

const Navigation = ({search}) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <img src={marvel} alt="" />
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={search} />
            </form>
        </nav>

    )
}

export  default Navigation;
