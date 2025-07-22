import { useState } from "react"

const LikeButton = () => {

    const [isLiked, setIsLiked]= useState<boolean>(false)

    const handleClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <>
            <button onClick={handleClick}>
                {isLiked?
                    <p>Like</p>
                    :<p>NotLiked</p>
                }
            </button>
        </>
    )
     
}

export default LikeButton