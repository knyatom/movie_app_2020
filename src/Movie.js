import React from 'react'
import  Prototypes  from 'prop-types'

function Movie({id,title,year,sumary,poster}) {
    return (
        <h4>{title}</h4>
    )
}
Movie.prototypes = { 
    id: Prototypes.number.isRequired,
    year:Prototypes.number.isRequired,
    title:Prototypes.string.isRequired,
    summary:Prototypes.string.isRequired,
    poster:Prototypes.string.isRequired
};


export default Movie
