
import './App.css';
import React from 'react';
import MoviesListss from './MoviesList';
import AddModal from  './AddModal';

import Search from "./Search";



function App (props){
    return (
    

      <div className= 'App'>
      <h1> Movie App </h1>
      <Search searchTitle={props.searchTitle} setSearchTitle={props.setSearchTitle} setRateSearch={props.setRateSearch} rateSearch={props.rateSearch}/>
      
      <MoviesListss MoviesList={props.MoviesList} searchTitle={props.searchTitle} rateSearch={props.rateSearch}  />
    
     <AddModal addNewMovie={props.addNewMovie} MoviesList ={props.MoviesList}/>
    

  </div>
  
    );
    }
   

export default App;
