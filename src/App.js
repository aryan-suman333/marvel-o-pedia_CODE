import './App.css';
import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import MovieItem from './components/MovieItem';
import LoadingBar from 'react-top-loading-bar';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);

  const filterItems = (text) => {
    let lowertext = text.target.value.toLowerCase();
    setQuery(lowertext);
  }

  const emptyQuery = () => {
    setQuery("");
  }

  const [moviesData, setMoviesData] = useState([]);
  const [TvshowsData, setTvshowsData] = useState([]);

  useEffect(() => {
    let moviesUrl = `https://mcuapi.herokuapp.com/api/v1/movies`;
    let tvshowsUrl = `https://mcuapi.herokuapp.com/api/v1/tvshows`;

    const fetchData = async () => {
      const moviesResponse = await fetch(moviesUrl);
      const tvshowsResponse = await fetch(tvshowsUrl);
      setProgress(50);

      const moviesData = await moviesResponse.json();
      const TvshowsData = await tvshowsResponse.json();
      setProgress(100);

      setMoviesData(moviesData.data);
      setTvshowsData(TvshowsData.data);
    };
    setProgress(30);
    fetchData();
  }, [setProgress]);

  return (
    <>
      <Router>
        <div className="bg-black">
        <LoadingBar color='#f11946' height={3} progress={progress} onLoaderFinished={() => setProgress(0)}/>

          <Navbar filterItems={filterItems} query={query} emptyQuery={emptyQuery}/>

          <Routes>
            <Route exact path="/" element={<Movies key="movies" setProgress={setProgress} query={query} keyword="movies" data={moviesData} />} />

            <Route exact path="/tvshows" element={<Movies key="tvshows" setProgress={setProgress} query={query} keyword="tvshows" data={TvshowsData} />} />

            {moviesData.map((element) => {
              return <Route exact path={`/m/${element.id+element.imdb_id}`} element={<MovieItem key={element.id+element.imdb_id} element={element} keyword="movies" />} />
            })}

            {TvshowsData.map((element) => {
              return <Route exact path={`/m/${element.id+element.imdb_id}`} element={<MovieItem key={element.id+element.imdb_id} element={element} keyword="tvshows" />} />
            })}
            
          </Routes>
        </div>
      </Router>
    </>
  )
}