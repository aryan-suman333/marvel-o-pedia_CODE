import React, { useEffect, useState } from 'react';
import MoviesComp from './MoviesComp';

export default function Movies(props) {

  const [data, setData] = useState([]);
  let {keyword, setProgress, query} = props;
  let emptyText = "";

  useEffect(() => {
    let url = `https://mcuapi.herokuapp.com/api/v1/${keyword}`;

    const fetchData = async () => {
      const response = await fetch(url);
      setProgress(50);
      const data = await response.json();
      setProgress(100);
      setData(data.data);
    };
    setProgress(30);
    fetchData();
  }, [keyword, setProgress]);
  
  return (
    <div className="xl:mx-32 lg:mx-28 md:mx-16 sm:mx-32 mx-8 min-h-screen">
      <h1 className="text-3xl text-center mt-4 text-red-600"><strong>MARVEL {keyword === "movies" ? "MOVIES" : "TV SHOWS"}</strong></h1>
      <div className="xl:grid xl:grid-cols-3 md:gap-5 md:grid md:grid-cols-2">
        {data.filter(element => {
          if (query === '' || element.title.toLowerCase().includes(query)) {
            emptyText = "hide";
            return element;
          }
          emptyText = emptyText !== "hide"?"show":"hide";
          return null;
        }).map((element) => {
          return <div className="my-4" key={element.id}>
            <MoviesComp title={element.title} description={JSON.stringify(element.overview).slice(1,250)} imgUrl={element.cover_url} trailer_url={element.trailer_url} year={element.release_date ? JSON.stringify(element.release_date).slice(1, 5) : null} />
          </div>
        })}
      </div>
      <div className="text-red-600 col-span-3 font-bold pt-10 text-center text-4xl">{emptyText === "show"?`"No Matches"`:null}</div>
    </div>
  )
}