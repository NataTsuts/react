import React, {useState, FC} from 'react'
import {useDispatch} from "react-redux";
import { IBasketInterface } from '../interface/IBasketInterface';
import { addAmount, removeAmount, removePizza } from '../store/slices/basketSlice';

interface IProps {
    pizza: IBasketInterface
}

const OrderInBasket: FC<IProps>  = ({pizza}) => {
    const dispatch = useDispatch()
    const {image, name, options: {amount = 1}} = pizza
    const onAdd = () => {
        dispatch(addAmount(pizza.id))
    }
    const onDelete = () => {
        dispatch(removeAmount(pizza.id))
    }

    const toggleDeletePizza = () => {
        dispatch(removePizza(pizza.id))
    }
    
       return (
                //Pizza - create component for display pizza in basket with ability to remove pizza from basket
                <div className='pizza-in-basket'>
                <img src={image}/> 
                <div className='pizza-name-size'>
                    <span className='pizza-name'>{name}</span>
                <span className='pizza-size'> {pizza.options.isBigSize ? pizza.weight.big  : pizza.weight.small} г</span>
                <div className='pizza-bort'>{`Бортик: ${pizza.options.isAddIngr}`}</div>
                </div>
                <div className='btn-number'>
                    <div className='minus' onClick={onDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                    <div className='count'>{amount}</div>
                    <div className='plus' onClick={onAdd}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </div>
                </div>
                <span className='pizza-price'> {pizza.options.isBigSize ? pizza.price.big * amount  : pizza.price.small * amount} грн</span>
                
                <span className='pizza-remove' onDoubleClick={toggleDeletePizza}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </span>
            </div>        
       )   
}


export default OrderInBasket