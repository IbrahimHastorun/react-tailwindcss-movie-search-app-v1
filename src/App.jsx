import { useState } from "react";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movieName , setMovieName] = useState("");

  return (
    <div className="w-[700px]">
      <Header setMovieName={setMovieName} />
      {movieName && <MovieDetails movieName={movieName} />}
    </div>
  );
}

export default App;
