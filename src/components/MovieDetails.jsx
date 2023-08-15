import axios from "axios";
import { useEffect, useState } from "react";

const MovieDetails = ({ movieName }) => {
    const [movieDetails , setMovieDetails] = useState("");
    const apiKey = "YOUR API KEY";

    useEffect(() => {
        axios(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
            .then((response) => {
                setMovieDetails(response.data);
            }
        );
    } , [movieName]);

    if (movieDetails.Error === "Movie not found!") {
        return (
            <div className="bg-white text-gray-700 rounded-lg p-5 shadow-2xl mb-5">
                <p className="text-red-700 mb-2 text-xl">There is no movie with the name you are looking for</p>
                <p className="text-indigo-800"><span className="text-yellow-400">NOT :</span>If You Are Sure There Is A Movie With The Name You Are Looking For, Please Enter The Foreign Name Of The Movie</p>
            </div>
        );
    }

    console.log(movieDetails);
    return (
        <div className="bg-white text-gray-700 rounded-lg p-5 shadow-2xl mb-5 flex flex-col gap-y-5">
            <h1 className="text-3xl text-center py-2 border-b border-gray-400">{movieDetails.Title}</h1>
            <div className="flex gap-x-3">
                <div className="basis-3/12">
                    <img src={movieDetails.Poster} className="w-full h-full rounded-lg" alt="" />
                </div>
                <div className="basis-9/12 flex flex-col gap-y-1">
                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Year of construction</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.Year}</p>
                    </div>

                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Movie Time</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.Runtime}</p>
                    </div>

                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Type</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.Genre}</p>
                    </div>

                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Actors</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.Actors}</p>
                    </div>

                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Subject</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.Plot}</p>
                    </div>

                    <div className="border-b border-gray-200 py-1 flex">
                        <p className="basis-6/12 text-lg text-gray-400">Budget for the Movie</p>
                        <p className="basis-6/12 text-lg text-indigo-400">{movieDetails.BoxOffice === "N/A" ? "Not found" : movieDetails.BoxOffice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;