import React,{useState} from 'react';
import App from './App';
import { Movies } from "./movies.js"
import Description from './Descrption';
import {Route} from "react-router-dom"




const Home =() =>{

    const [MoviesList , setMoviesList] = useState(Movies);
    const[searchTitle ,setSearchTitle]= useState("");
    const [rateSearch, setRateSearch]=useState(1);
  
  
    const addNewMovie = (e,newMovie) => {
      e.preventDefault();
      if (
        newMovie.posterURL &&
        newMovie.title &&
        newMovie.year &&
        newMovie.rating &&
        newMovie.description

      ) 
{
      setMoviesList([...MoviesList, newMovie]);
    }
    else alert("please insert required informations")
  };

    
return (
    <div>
    <Route exact path="/" render={()=><App MoviesList={MoviesList} addNewMovie={addNewMovie} searchTitle={searchTitle} setSearchTitle={setSearchTitle} setRateSearch={setRateSearch} rateSearch={rateSearch}/>} />
    <Route  path="/Description/:MovieCardId"  render={(props) => <Description {...props} MoviesList={MoviesList} />} />
    </div>)
    };
    export default Home;
