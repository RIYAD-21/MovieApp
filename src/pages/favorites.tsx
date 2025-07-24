import Movies from "../data.test";
import MovieCard from "../components/MovieCard";

const Favorites = () =>{

    return(
        <>
            <div className="flex gap-3">
                {Movies.map(movie => (
                    
                    <>
                        {movie.like && <MovieCard movie={movie}/>}
                        
                    </>
                        
                    
                )
                     
                )}
                
            </div>
        </>
    )
}

export default Favorites;