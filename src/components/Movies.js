import MoviesComp from './MoviesComp';

export default function Movies(props) {

  let {query, data} = props;
  let emptyText = "";
  
  return (
    <div className="my-4 xl:mx-32 lg:mx-28 md:mx-16 sm:mx-32 mx-8 min-h-screen">
      <div className="xl:grid xl:grid-cols-3 md:gap-5 md:grid md:grid-cols-2">
        {data.filter(element => {
          if (query === '' || element.title.toLowerCase().includes(query) || JSON.stringify(element.release_date).slice(1, 5).includes(query)) {
            emptyText = "hide";
            return element;
          }
          emptyText = emptyText !== "hide"?"show":"hide";
          return null;
        }).map((element) => {
          return <div className="my-4">
            <MoviesComp element = {element} />
          </div>
        })}
      </div>
      <div className="text-red-600 col-span-3 font-bold pt-10 text-center text-4xl">{emptyText === "show"?`"No Matches"`:null}</div>
    </div>
  )
}