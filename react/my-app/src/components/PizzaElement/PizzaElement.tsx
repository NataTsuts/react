import React, { useState, FC } from 'react'
import {Link} from "react-router-dom";
import './style.scss'
import {useDispatch} from "react-redux";
import {addPizza} from "../../store/slices/basketSlice";
import {IPizza} from "../../interface/IPizza";


interface IPizzaElement {
    link:string,
    data: IPizza
}
const PizzaElement: FC<IPizzaElement> = ({link, data}) => {
    const {image: img, name, description, weight, price} = data
    const [isBigSize, setIsBigSize] = useState(false);
    const toggleClass = (param: boolean) => {
        setIsBigSize(param);
    };

    const [isAddIngr, setisAddIngr] =useState<""|"cheese"|"sesame"|"meat">('');
    const toggleAdd = (bort:""|"cheese"|"sesame"|"meat") => {
        setisAddIngr(bort)
    };

    //function that dispatches actions
    const dispatch = useDispatch()

    const addToBasket = () => {
        dispatch(addPizza({...data, options:{
            isBigSize : isBigSize,
            isAddIngr: isAddIngr
        }}))
    }

    return (
        <div className='product-1'>
            <Link to={link}>
                <img src={img} alt=""/>
            </Link>
            <h1>{name}</h1>
            <h2>{description}</h2>

           <button className={isBigSize ? 'btn' : 'btn-select'} onClick={()=>toggleClass(false)}>
            30 см
            </button>
            <button className={isBigSize ? 'btn-select' : 'btn'} onClick={()=>toggleClass(true)}>
                40 см
            </button>


            <div className='addition'><h3>Бортик:</h3>
                <div className="checkbox" onClick={() => toggleAdd('sesame')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={isAddIngr === "sesame" ? 'bi-circle-select' : 'bi-circle'}viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>

                    <span className={isAddIngr === "sesame" ? 'name-checkox-select' : 'name-checkox'} >Кунжутний</span>
                </div>

                <div className="checkbox" onClick={() => toggleAdd('cheese')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={isAddIngr === "cheese" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                    <span className={isAddIngr === "cheese" ? 'name-checkox-select' : 'name-checkox'} >Сирний</span>
                </div>

                <div className="checkbox" onClick={() => toggleAdd('meat')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={isAddIngr === "meat" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                    <span className={isAddIngr === "meat" ? 'name-checkox-select' : 'name-checkox'} >Мисливський</span>
                </div>
            </div>

            <div className='order'>
                <div className='price'>
                    <h1>{isBigSize ? price.big : price.small } грн</h1>
                </div>
                <div className='weight'>
                    <h2>{isBigSize ? weight.big : weight.small } г</h2>
                </div>
                <button className='btn-order' onClick={addToBasket}>Замовити</button>
            </div>
        </div>
    )
}

export default PizzaElement