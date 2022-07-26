import React, { useEffect, useState } from "react";
import './App.css';
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return <div className="page">
    <section className="lista">
      {movieList.map((item, key) => (
        <div>
          <MovieRow key={key} title={item.title} items={item.items}/>
        </div>
      ))}
    </section>
    </div>;
}

export default App;
