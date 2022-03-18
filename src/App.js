import { useEffect, useState } from "react";
import './App.css';
import moviedata from "../src/Components/data/data";
import Filtring from "./Components/Filtring/Filtring.js";
import MovieList from "./Components/MovieList/MovieList.js";
import AddMovie from "./Components/AddMovie/AddMovie.js";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [filtredMovies, setFiltredMovies] = useState(movies);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if(movie.title && movie.posterUrl && movie.description )
  { setMovies([...movies, movie]);
  }}

 function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredMovies(movies.filter( (el)=>{ return ( (el.title.toLowerCase().includes(key.toLowerCase())) && (el.rate >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[movies]);


  return (
    <div className="App">
      <Filtring filter={filter}/>
      <MovieList movies={filtredMovies} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
