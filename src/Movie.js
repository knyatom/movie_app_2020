import React from 'react'
import  PropTypes  from 'prop-types'
import './Movie.css';

function Movie({title,year,sumary,poster,genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title" >{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index)=>{
                        return <li key={index} className="movei__genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie_summary">{sumary.slice(0,180)}...</p>
            </div>
        </div>
    )
}
Movie.prototypes = { 
    // id: Prototypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie
