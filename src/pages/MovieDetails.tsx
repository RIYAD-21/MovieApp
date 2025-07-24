import { useParams } from "react-router-dom";
import Movies from "../data.test";
import type { Movie } from "../components/MovieCard";

const MovieDetails = () => {

    const {id}  =useParams();
    var mov:Movie ;
    const theMovie = () => {
        for (let i=0; i<Movies.length; i++) {
            if (Movies[i].id == id){
                mov = Movies[i];
                break
            }
        }
        return mov;
    }


    return(
        <>
            <div>
                <p>{theMovie().title}</p>
                <p>hhhhh</p>
                <p>this movie is : {theMovie().like ?  <p>Liked</p>  : <p>unliked</p>}
                </p>
            </div>
        </>
    )
}

export default MovieDetails;