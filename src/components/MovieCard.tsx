import { useNavigate } from "react-router-dom"
import { useEffect, useRef,useState } from "react"
import LikeButton from "../components/LikeButton";

interface Movie {
    id?:number,
    title:string,
    picture : string,
    date : string
    like:boolean
}

const MovieCard = ({movie}:{movie:Movie}) => {

    const navigate = useNavigate();
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered , setIsHovered] = useState<boolean>();
    const [isLiked, setIsLiked]= useState<boolean>(movie.like);

    const handleCLick = () =>{
        navigate(`/movie/${movie.id}`)
    }      

    function changeObj (m:Movie){
        m.like = isLiked
    }

    changeObj(movie)
    
    useEffect(()=>{
        const div = divRef.current;
        if (!div) return;
            div.addEventListener("mouseenter",()=>{setIsHovered(true)})
            div.addEventListener("mouseleave",()=>{setIsHovered(false)})
    },[])

    return(
        <>
            <div ref={divRef} className="bg-gray-200 w-55 h-95 rounded-[10px] contain-content cursor-pointer" >
    
                    <div className="w-full h-[75%] bg-amber-50 flex justify-center items-center  contain-content" onClick={handleCLick}>
                        <img src="/vite.svg" alt="" className="w-40 h-auto" />
                    </div>
                    <div className=" w-full h-[25%] p-5 contain-content flex justify-between items-center">
                        <div>
                            <p className="font-medium text-[20px] overflow-ellipsis contain-content">{movie.title}</p>
                            <p className="text-[12px]">{movie.date }</p> 
                        </div>
                        <div>
                            {isHovered && !isLiked && <LikeButton onClick={()=>{setIsLiked(!isLiked)}} isLiked={isLiked}/>}
                            {isLiked &&  <LikeButton onClick={()=>{setIsLiked(!isLiked)}} isLiked={isLiked}/> }
                        </div>
                    </div>
            </div>
        </>
    )
}

export default MovieCard
export type {Movie}