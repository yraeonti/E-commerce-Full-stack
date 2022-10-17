import React from "react";

import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"

const ProductStars = ({stars}) => {

const prodStars = Array.from({length:5}, (_, index) => {
    const halfNumber = index + 0.5
    return (
        <span key={index}>
        {stars >= index + 1 ? <BsStarFill/> : stars >= halfNumber ? <BsStarHalf/> : <BsStar/>}
        </span>
    )
})
return (
    <div className="flex">
        {prodStars}
    </div>
)

}

export default ProductStars