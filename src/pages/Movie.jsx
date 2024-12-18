import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {moviesData && moviesData.Search.map((m) => {
          return <Card key={m.imdbID} m={m} />;
        })}
      </ul>
    </>
  );
};