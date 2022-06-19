import React, {FC} from 'react'
import {Link} from "react-router-dom";
import './main.scss'

interface IFood {
    title:string,
    link:string,
    img:string,
}
const FoodCategory: FC<IFood> = ({title, link, img}) => {
    return (
        <div className="food-menu">
        <Link to={link}>
            <img src={img} alt=""/>
            <div className='title'>{title}</div>
         </Link> 
       </div>
    )
}

export default FoodCategory
