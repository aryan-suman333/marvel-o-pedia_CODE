import React from 'react';
import { Link } from 'react-router-dom';

export default function ex(props) {

  let {imgUrl, id, imdb_id, title, year, description, trailer_url} = props;

  return (
    <div>
      <div className="max-w-sm rounded-lg border  shadow-md bg-gray-800 border-gray-700">
        <a href={imgUrl} target="_blank" rel="noreferrer">
          <img className="rounded-t-lg" src={imgUrl} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl tracking-normal font-bold text-white">{title}{year ? " - " + year : null}</h5>
          <p className="mb-3 font-normal  text-gray-400">{description!=="ull"?description:""}...</p>
          <div>
            <Link to={`/m/${id+imdb_id}`} className="inline-flex mr-3 items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-red-600 hover:bg-red-700 focus:ring-red-800">
            More details
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
            </Link>
            <a href={trailer_url} className="inline-flex my-2 items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800">
            Watch Trailer
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
