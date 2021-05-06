
import React from 'react';
import { Link } from "react-router-dom";
const Description = (props) =>{
    const movieFound = props.MoviesList.find((MoviesList) => MoviesList.id==props.match.params.MovieCardId
);

  return (
   <div>
     {
       console.log(movieFound)
     }
        <img src={movieFound.posterURL} alt="poster" height= "300px" width= '300px' />
 
 
 <p>{movieFound.description}</p>
 <Link to={"/"}>  
 <button className="home-Butn"> Return to home page</button>
 </Link>
 </div>

  )
  };


export default Description;