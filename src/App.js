import './App.css';
import React, { useState } from 'react';
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

  return (
    <>
      <Router>
        <div className="bg-black">
        <LoadingBar color='#f11946' height={3} progress={progress} onLoaderFinished={() => setProgress(0)}/>
          <Navbar filterItems={filterItems} query={query} emptyQuery={emptyQuery}/>
          <Routes>
            <Route exact path="/" element={<Movies key="movies" setProgress={setProgress} query={query} keyword="movies" />} />
            <Route exact path="/tvshows" element={<Movies key="tvshows" setProgress={setProgress} query={query} keyword="tvshows" />} />
            <Route exact path="/m/Iron%20Man" element={<MovieItem key="Iron Man" title="Iron Man" keyword="movies" />} />
            <Route exact path="/m/The%20Incredible%20Hulk" element={<MovieItem key="The Incredible Hulk" title="The Incredible Hulk" keyword="movies" />} />
            <Route exact path="/m/Iron%20Man%202" element={<MovieItem key="Iron Man 2" title="Iron Man 2" keyword="movies" />} />
            <Route exact path="/m/Thor" element={<MovieItem key="Thor" title="Thor" keyword="movies" />} />
            <Route exact path="/m/Captain%20America:%20The%20First%20Avenger" element={<MovieItem key="Captain America: The First Avenger" title="Captain America: The First Avenger" keyword="movies" />} />
            <Route exact path="/m/The%20Avengers" element={<MovieItem key="The Avengers" title="The Avengers" keyword="movies" />} />
            <Route exact path="/m/Iron%20Man%203" element={<MovieItem key="Iron Man 3" title="Iron Man 3" keyword="movies" />} />
            <Route exact path="/m/Thor:%20The%20Dark%20World" element={<MovieItem key="Thor: The Dark World" title="Thor: The Dark World" keyword="movies" />} />
            <Route exact path="/m/Captain%20America:%20The%20Winter%20Soldier" element={<MovieItem key="Captain America: The Winter Soldier" title="Captain America: The Winter Soldier" keyword="movies" />} />
            <Route exact path="/m/Guardians%20of%20the%20Galaxy" element={<MovieItem key="Guardians of the Galaxy" title="Guardians of the Galaxy" keyword="movies" />} />
            <Route exact path="/m/Avengers:%20Age%20of%20Ultron" element={<MovieItem key="Avengers: Age of Ultron" title="Avengers: Age of Ultron" keyword="movies" />} />
            <Route exact path="/m/Ant-Man" element={<MovieItem key="Ant-Man" title="Ant-Man" keyword="movies" />} />
            <Route exact path="/m/Captain%20America:%20Civil%20War" element={<MovieItem key="Captain America: Civil War" title="Captain America: Civil War" keyword="movies" />} />
            <Route exact path="/m/Doctor%20Strange" element={<MovieItem key="Doctor Strange" title="Doctor Strange" keyword="movies" />} />
            <Route exact path="/m/Guardians%20of%20the%20Galaxy%20Vol.%202" element={<MovieItem key="Guardians of the Galaxy Vol. 2" title="Guardians of the Galaxy Vol. 2" keyword="movies" />} />
            <Route exact path="/m/Spider-Man:%20Homecoming" element={<MovieItem key="Spider-Man: Homecoming" title="Spider-Man: Homecoming" keyword="movies" />} />
            <Route exact path="/m/Thor:%20Ragnarok" element={<MovieItem key="Thor: Ragnarok" title="Thor: Ragnarok" keyword="movies" />} />
            <Route exact path="/m/Black%20Panther" element={<MovieItem key="Black Panther" title="Black Panther" keyword="movies" />} />
            <Route exact path="/m/Avengers:%20Infinity%20War" element={<MovieItem key="Avengers: Infinity War" title="Avengers: Infinity War" keyword="movies" />} />
            <Route exact path="/m/Ant-Man%20and%20The%20Wasp" element={<MovieItem key="Ant-Man and The Wasp" title="Ant-Man and The Wasp" keyword="movies" />} />
            <Route exact path="/m/Captain%20Marvel" element={<MovieItem key="Captain Marvel" title="Captain Marvel" keyword="movies" />} />
            <Route exact path="/m/Avengers:%20Endgame" element={<MovieItem key="Avengers: Endgame" title="Avengers: Endgame" keyword="movies" />} />
            <Route exact path="/m/Spider-Man:%20Far%20From%20Home" element={<MovieItem key="Spider-Man: Far From Home" title="Spider-Man: Far From Home" keyword="movies" />} />
            <Route exact path="/m/Black%20Widow" element={<MovieItem key="Black Widow" title="Black Widow" keyword="movies" />} />
            <Route exact path="/m/Shang-Chi%20and%20The%20Legend%20of%20The%20Ten%20Rings" element={<MovieItem key="Shang-Chi and The Legend of The Ten Rings" title="Shang-Chi and The Legend of The Ten Rings" keyword="movies" />} />
            <Route exact path="/m/Eternals" element={<MovieItem key="Eternals" title="Eternals" keyword="movies" />} />
            <Route exact path="/m/Spider-Man:%20No%20Way%20Home" element={<MovieItem key="Spider-Man: No Way Home" title="Spider-Man: No Way Home" keyword="movies" />} />
            <Route exact path="/m/Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness" element={<MovieItem key="Doctor Strange in the Multiverse of Madness" title="Doctor Strange in the Multiverse of Madness" keyword="movies" />} />
            <Route exact path="/m/Thor:%20Love%20and%20Thunder" element={<MovieItem key="Thor: Love and Thunder" title="Thor: Love and Thunder" keyword="movies" />} />
            <Route exact path="/m/Black%20Panther:%20Wakanda%20Forever" element={<MovieItem key="Black Panther: Wakanda Forever" title="Black Panther: Wakanda Forever" keyword="movies" />} />
            <Route exact path="/m/Ant-Man%20and%20The%20Wasp:%20Quantumania" element={<MovieItem key="Ant-Man and The Wasp: Quantumania" title="Ant-Man and The Wasp: Quantumania" keyword="movies" />} />
            <Route exact path="/m/Guardians%20of%20the%20Galaxy%20Vol.%203" element={<MovieItem key="Guardians of the Galaxy Vol. 3" title="Guardians of the Galaxy Vol. 3" keyword="movies" />} />
            <Route exact path="/m/The%20Marvels" element={<MovieItem key="The Marvels" title="The Marvels" keyword="movies" />} />
            <Route exact path="/m/Blade" element={<MovieItem key="Blade" title="Blade" keyword="movies" />} />
            <Route exact path="/m/Captain%20America:%20New%20World%20Order" element={<MovieItem key="Captain America: New World Order" title="Captain America: New World Order" keyword="movies" />} />
            <Route exact path="/m/Thunderbolts" element={<MovieItem key="Thunderbolts" title="Thunderbolts" keyword="movies" />} />
            <Route exact path="/m/Fantastic%20Four" element={<MovieItem key="Fantastic Four" title="Fantastic Four" keyword="movies" />} />
            <Route exact path="/m/Untitled%20Deadpool%20Movie" element={<MovieItem key="Untitled Deadpool Movie" title="Untitled Deadpool Movie" keyword="movies" />} />
            <Route exact path="/m/Avengers:%20The%20Kang%20Dynasty" element={<MovieItem key="Avengers: The Kang Dynasty" title="Avengers: The Kang Dynasty" keyword="movies" />} />
            <Route exact path="/m/Avengers:%20Secret%20Wars" element={<MovieItem key="Avengers: Secret Wars" title="Avengers: Secret Wars" keyword="movies" />} />
            <Route exact path="/m/WandaVision" element={<MovieItem key="WandaVision" title="WandaVision" keyword="tvshows" />} />
            <Route exact path="/m/The%20Falcon%20and%20The%20Winter%20Soldier" element={<MovieItem key="The Falcon and The Winter Soldier" title="The Falcon and The Winter Soldier" keyword="tvshows" />} />
            <Route exact path="/m/Loki" element={<MovieItem key="Loki" title="Loki" keyword="tvshows" />} />
            <Route exact path="/m/What%20If..." element={<MovieItem key="What If...?" title="What If...?" keyword="tvshows" />} />
            <Route exact path="/m/Hawkeye" element={<MovieItem key="Hawkeye" title="Hawkeye" keyword="tvshows" />} />
            <Route exact path="/m/Moon%20Knight" element={<MovieItem key="Moon Knight" title="Moon Knight" keyword="tvshows" />} />
            <Route exact path="/m/Ms.%20Marvel" element={<MovieItem key="Ms. Marvel" title="Ms. Marvel" keyword="tvshows" />} />
            <Route exact path="/m/I%20Am%20Groot" element={<MovieItem key="I Am Groot" title="I Am Groot" keyword="tvshows" />} />
            <Route exact path="/m/She%20Hulk:%20Attorney%20at%20Law" element={<MovieItem key="She Hulk: Attorney at Law" title="She Hulk: Attorney at Law" keyword="tvshows" />} />
            <Route exact path="/m/Werewolf%20By%20Night" element={<MovieItem key="Werewolf By Night" title="Werewolf By Night" keyword="tvshows" />} />
            <Route exact path="/m/The%20Guardians%20of%20the%20Galaxy%20Holiday%20Special" element={<MovieItem key="The Guardians of the Galaxy Holiday Special" title="The Guardians of the Galaxy Holiday Special" keyword="tvshows" />} />
            <Route exact path="/m/Secret%20Invasion" element={<MovieItem key="Secret Invasion" title="Secret Invasion" keyword="tvshows" />} />
            <Route exact path="/m/Echo" element={<MovieItem key="Echo" title="Echo" keyword="tvshows" />} />
            <Route exact path="/m/Ironheart" element={<MovieItem key="Ironheart" title="Ironheart" keyword="tvshows" />} />
            <Route exact path="/m/Daredevil:%20Born%20Again" element={<MovieItem key="Daredevil: Born Again" title="Daredevil: Born Again" keyword="tvshows" />} />
            <Route exact path="/m/Agatha:%20Coven%20of%20Chaos" element={<MovieItem key="Agatha: Coven of Chaos" title="Agatha: Coven of Chaos" keyword="tvshows" />} />
            <Route exact path="/m/Armor%20Wars" element={<MovieItem key="Armor Wars" title="Armor Wars" keyword="tvshows" />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}