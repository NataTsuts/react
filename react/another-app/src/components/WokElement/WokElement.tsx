import React, {useState, FC} from "react";
import { Link } from "react-router-dom";
import { IWok } from "../../interfaces/IWok";
import './WokElement.scss'


interface IWokElement {
    link:string,
    data: IWok
}
const WokElement:FC<IWokElement> = ({link, data}) => {
    const {image, name, description, weight, price} = data
    const [count, setCount] = useState(1);
    const onAdd = () => {
        setCount(count + 1)
    }
    const onDelete = () => {
        setCount(count > 1 ? count - 1 : 1)
    }

return (
    <div className="wok-element">
        <div className="wok-img">
            <Link to={link}>
                <img src={image} alt=""/>
            </Link>
        </div>
        <div className="name-weight">
           <div>
                <h2>{name}</h2>
            </div>
            <div className="weight">
                <h3>{weight}г</h3>
            </div>
        </div>
            <div>
                <h3>{description.length > 89 ? description.substring(0,88) + "..." : description}</h3>
            </div>
        <div className="order">
            <div className="number-price">
                 <div className='btn-number'>
                    <div className='count'>{count}</div>
                    <div className="plus-minus">    
                        <button className='plus' onClick={onAdd}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                             </svg>
                        </button>
                        <button className='minus' onClick={onDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                        </button>   
                   </div>
                </div>
                <div className='price'>
                    <h1> {price*count} грн</h1>
                </div>
            </div>
                <button className='btn-order'>Замовити</button>
        </div>    
    </div>
)
}

export default WokElement