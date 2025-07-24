import Movies from "../data.test";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage =() =>{

    const navigate= useNavigate()
    const [searchValue,SetSearchValue] = useState<string>("")

    const handleClick = () =>{
        navigate('/favorites')
    }

    return(
        <>  
            <div onClick={handleClick} className="w-50 h-5 cursor-pointer">Favorites</div>
            <form action="" >
                <input type="text" onChange={(e) => SetSearchValue(e.target.value)} value={searchValue} className="border-1 border-black"/>
                <button type="submit" className="bg-gray-300 cursor-pointer">Search</button>
            </form>
            <div className="flex justify-center items-center w-full h-full ">
                <div className="flex flex-wrap wrap-normal gap-5 m-10 w-295">
                    { Movies.map(m=>
                       m.title.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim()) && <MovieCard movie={m}/>
                    )}
                </div>
            </div>
        </>
    )
}


export default HomePage;