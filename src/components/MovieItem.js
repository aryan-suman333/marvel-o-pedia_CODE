export default function MovieItem(props) {

  let {keyword, element} = props;
  window.scrollTo(0,0);

  return (
    <div>
      return <div key={element.title} className="h-screen">
        <div className="flex flex-col items-center tracking-wide md:my-16 my-8 mx-auto rounded-lg md:border shadow-md md:flex-row md:max-w-4xl  md:border-gray-700 md:bg-gray-800 bg-black">
        <a href={element.cover_url} className="md:min-w-[382px]" target="_blank" rel="noreferrer">
          <img className="object-cover rounded-t-lg max-h-[566px] md:rounded-none md:rounded-l-lg" src={element.cover_url} alt="" />
        </a>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold text-white">{element.title}</h5>
            <p className="mb-1 text-sm text-gray-400"><span className="font-semibold">Phase: </span>{element.phase}</p>
            <p className="mb-1 text-sm text-gray-400"><span className="font-semibold">Release Date: </span>{element.release_date}</p>
            <p className="mb-1 font-normal text-gray-400"><span className="font-semibold">Director: </span>{element.directed_by}</p>
            {keyword === "movies" && element.box_office !== "0"?<p className="mb-3 font-normal text-gray-400"><span className="font-semibold">Box Office Collection: </span>{(parseInt(element.box_office) / 10000000).toFixed(2)} cr$</p>:null}
            {keyword === "tvshows" && element.number_episodes !== 0?<p className="mb-3 font-normal text-gray-400"><span className="font-semibold">Number of Episodes: </span>{element.number_episodes}</p>:null}
            <p className="mb-3 font-normal text-gray-400">{element.overview}</p>
            <div>
              <a href={element.trailer_url} className="inline-flex mr-3 my-2 w-36 items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800">
                Watch Trailer
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </a>
              <a href={`https://www.imdb.com/title/${element.imdb_id}/`} className="inline-flex my-2 w-[5.5rem] items-center py-2 px-3 text-sm font-medium text-center text-black rounded-lg  focus:ring-4 focus:outline-none bg-amber-400 hover:bg-amber-500 focus:ring-yellow-600">
                IMDB
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
