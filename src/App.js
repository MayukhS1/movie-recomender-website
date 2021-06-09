// import './App.css';
import React from 'react';
import MovieCards from './Components/MovieCard';
import SearchBar from './Components/SearchBar';

function App() {

  const movies = ["Agent Of Everywhere", " Guardians And Men", "Veterans Of The Fallen",  "Defeat Of The Aliens"];
 
  const showResult = (movieName, numOfSuggestion) => {
    console.log(movieName);
    console.log(numOfSuggestion);
  }
  
  

  return (
    <div className="App">
      <SearchBar movies={movies} showResult={showResult}/>
      <MovieCards/>
      <MovieCards/>
      <MovieCards/>
    </div>
  );
}

export default App;
