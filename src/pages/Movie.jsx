import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {

  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
  <>
  <ul className="grid grid-cols-4 gap-4">
     
  {moviesData && moviesData.Search.map((m)=>{
      return <Card key={m.imdbID} m={m} />;
     })}

  </ul>
     
  </>
  )
}