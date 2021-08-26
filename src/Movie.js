import React from 'react'
import  Prototypes  from 'prop-types'
import './Movie.css';

function Movie({title,year,sumary,poster}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title" >{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie_summary">{sumary}</p>
            </div>
        </div>
    )
}
Movie.prototypes = { 
    // id: Prototypes.number.isRequired,
    year:Prototypes.number.isRequired,
    title:Prototypes.string.isRequired,
    summary:Prototypes.string.isRequired,
    poster:Prototypes.string.isRequired
};


export default Movie
