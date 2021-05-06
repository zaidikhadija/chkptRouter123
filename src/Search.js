
import React from 'react';
import Rate from "./Rating";

const Search= ({searchTitle,setSearchTitle,setRateSearch,rateSearch }) => {
    
    return (

        <div>

<input  Type="text" placeholder="Searching" onChange={(e) => setSearchTitle(e.target.value)}/>

<button className= "search-Button" onClick={()=>  (searchTitle)}>Search</button>


<Rate setRateSearch={setRateSearch} rateSearch={rateSearch} />
</div>
    );
}
  

export default Search ;