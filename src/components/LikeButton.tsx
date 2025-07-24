import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface props {
    onClick:()=>void,
    isLiked :boolean
}

const LikeButton = ({onClick,isLiked}:props) => {

    return (
        <>
            <button onClick={onClick} className="cursor-pointer w-auto h-auto z-10">
                {isLiked?                
                    <FavoriteIcon sx={{color:"red"}}/>
                   : <FavoriteBorderIcon  sx={{color:"black"}}/>
                
                }
            </button>
        </>
    )
     
}

export default LikeButton