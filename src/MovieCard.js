import Rate from  "./Rating";
import React from 'react';
import { Link } from "react-router-dom";



const MovieCard = ({
 movie: {id,title, year, rating, posterURL, type, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
      <Link to={`/description/${id}`}>  
        <img src={posterURL} alt="poster" />
        </Link>
      </div>
      <div className="card_right">
        <h1>{title}</h1>
        <div className="card_right__details">
          <ul>
            <li>{year}</li>
            
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
 
 