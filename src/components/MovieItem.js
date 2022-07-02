import React, { useEffect, useState } from 'react';

export default function MovieItem(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://mcuapi.herokuapp.com/api/v1/${props.keyword}`;

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    }

    fetchData();
  }, [props.keyword]);

  return (
    <div>
      {data.map((element) => {
        if (element.title === props.title) {
          return <div key={props.title} className="h-screen">
            <div className="flex flex-col items-center md:my-16 mx-auto rounded-lg border shadow-md md:flex-row md:max-w-4xl  border-gray-700 bg-gray-800">
              <img className="object-cover  rounded-t-lg md:max-h-[566px] md:rounded-none md:rounded-l-lg" src={element.cover_url} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">{element.title}</h5>
                <p className="mb-1 text-sm text-gray-400"><span className="font-semibold">Phase: </span>{element.phase}</p>
                <p className="mb-1 text-sm text-gray-400"><span className="font-semibold">Release Date: </span>{element.release_date}</p>
                <p className="mb-1 font-normal text-gray-400"><span className="font-semibold">Director: </span>{element.directed_by}</p>
                <p className="mb-3 font-normal text-gray-400"><span className="font-semibold">Box Office Collection: </span>{(parseInt(element.box_office) / 10000000).toFixed(2)} cr$</p>
                <p className="mb-3 font-normal text-gray-400">{element.overview}</p>
                <a href={element.trailer_url} className="inline-flex my-2 w-36 items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800">
                  Watch Trailer
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        }
        return null
      })}
    </div>
  )
}
