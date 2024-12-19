import {   useLoaderData} from "react-router-dom";
import { GetMovieDetails } from "../../api/GetMovieDetails";
import styled from 'styled-components';


export const MovieDetails =()=>{
    // const params = useParams();
    // console.log(params);

    const movieData = useLoaderData();
     console.log(movieData);

    const {Actors , Poster, Title , Type , Year ,Plot, BoxOffice, imdbID , Genre , imdbRating , Writer , Runtime , totalSeasons} = movieData;


    return(
        <>
        
        <li>

        <StyledWrapper className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flip flex justify-center items-center h-screen ">
    <div className="content relative"> {/* Add relative positioning to the content */}
      <div className="front w-[390px] h-[374px] relative"> {/* Add relative positioning to the front */}
        <img src={Poster} alt={Title} className="absolute inset-0 w-full h-full object-cover rounded-md" />
        <button class=" z-5 ml-4 absolute bg-[rgba(139,137,137,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[9.5px] rounded-[10px] border border-[rgba(255,255,255,0.18)] py-4 px-5   font-extrabold mb-2 mt-52">{Title}</button>
        <h2 className="absolute z-10  text-zinc-100 ml-4  mt-[270px] font-bold text-xl ">Ratings: {imdbRating}</h2>
        <h2 className="absolute z-10  text-zinc-100  mt-[300px] ml-4 text-xl">Genre:{Genre}</h2> 

      

      </div>
      <div className="back text-blue-600">

      <div class="glass-toolbar flex justify-between mt-4">
            <button class="bg-[rgba(139,137,137,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[9.5px] rounded-[10px] border border-[rgba(255,255,255,0.18)] py-4 px-5 mt-2 ml-2 font-extrabold mb-2">YEAR:{Year}</button>
            <button class="bg-[rgba(139,137,137,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[9.5px] rounded-[10px] border border-[rgba(255,255,255,0.18)] py-4 px-5 mt-2 mr-2 font-extrabold mb-2">SEASONS:{totalSeasons}</button>
            
           
        </div>
        <button class="bg-[rgba(139,137,137,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[9.5px] rounded-[10px] border border-[rgba(255,255,255,0.18)] py-4 px-5 mt-2  font-extrabold mb-2 leading-5">ACTORS:{Actors}</button>

      
        <p className="overflow-y-hidden">{Plot}</p>
      </div>
    </div>
  </div>
</StyledWrapper>

        </li>
</>
    )
}

const StyledWrapper = styled.div`
  .flip {
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
    padding: 1em;
    width: 390px;
    height: 354px;
    transform-style: preserve-3d;
    transition: 3s ease;
  }

  .flip:hover {
    transform: rotateY(180deg);
  }
  /* Content */
  .flip .content {
    transform-style: preserve-3d;
  }

  .flip .back, .flip .front {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;

    
  }

  .flip .back {
    transform: rotateY(180deg);
    

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .flip h2,
  .flip p {
    transform: translateZ(90px);
    text-shadow: transparent;
    text-align: center;
  }

  .flip h2 {
    
    
    letter-spacing: 1px;
  }

  .flip p {
    font-size: 1em;
 
    line-height: 1.6em;
  }

  .flip::before,
  .flip::after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    
    
    
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateY(180deg)translateZ(1px);
  }

  .flip::before {
    transform: none;
    
    
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }`;
 