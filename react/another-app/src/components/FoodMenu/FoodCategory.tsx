import { EnumStringMember } from "@babel/types";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import '../../pages/Home/Home.scss'

interface IFoodCategory {
    name: string,
    img: string,
    link: string
}

const FoodCategory: FC<IFoodCategory> = ({name, img, link}) => {
    return (
        <div className="food-category">
            <Link to={link}>
                <img src={img} alt=""/>
                <div className="name">{name}</div>
            </Link>
        </div>
    )
}

export default FoodCategory