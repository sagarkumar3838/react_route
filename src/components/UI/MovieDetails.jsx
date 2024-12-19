import {   useLoaderData} from "react-router-dom";
import { GetMovieDetails } from "../../api/GetMovieDetails";


export const MovieDetails =()=>{
    // const params = useParams();
    // console.log(params);

    const movieData = useLoaderData();
     console.log(movieData);


    return(
        <>
        <li class="wrapper">
    <div class="main_card bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg text-white w-full max-w-[760px] h-[390px] mx-auto my-12 flex">
        <div class="card_left w-9/12">
            <div class="card_datails w-9/12 p-8 mt-[-25px]">
                <h1 class="text-2xl font-bold">Mission: Impossible – Fallout</h1>
                <div class="card_cat flex justify-between">
                    <p class="PG bg-green-300 shadow-md rounded-full px-3 py-1 font-bold">PG - 13</p>
                    <p class="year font-bold">2018</p>
                    <p class="genre font-bold">Action | Adventure</p>
                    <p class="time font-bold">2h 28m</p>
                </div>
                <p class="disc font-light leading-7">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank" class="text-cyan-700 block">Read More</a>
                <div class="social-btn flex mt-8">
                    <button class="bg-green-300 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110">
                        <i class="fas fa-play"></i> SEE TRAILER
                    </button>
                    <button class="bg-green-300 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110 ml-2">
                        <i class="fas fa-download"></i> DOWNLOAD
                    </button>
                    <button class="bg-green-300 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110 ml-2">
                        <i class="fas fa-thumbs-up"></i> 97%
                    </button>
                    <button class="bg-green-300 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110 ml-2">
                        <i class="fas fa-star"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="card_right w-3/12">
            <div class="img_container">
                <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt="" class="h-full rounded-md"/>
            </div>
            {/* <div class="play_btn h-full mx-auto relative text-center bg-green-300 bg-opacity-40 shadow-sm">
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                    <i class="fas fa-play-circle text-green-800 text-6xl mt-24 animate-bounce"></i>
                </a>
            </div> */}
        </div>
    </div>
</li>
        </>
    )
}