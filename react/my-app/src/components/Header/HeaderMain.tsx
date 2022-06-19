import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import { IBasketInterface } from '../../interface/IBasketInterface';
import './styles.scss'



const HeaderMain: FC = () => {

    const pizzasInBasket:IBasketInterface[] = useSelector((state: RootState) => state.basket.pizzas)
    const countSum = () => {
        let sum = 0
        pizzasInBasket.forEach( (pizza) => {
            const {options: {amount = 1}} = pizza
            if (pizza.price !== undefined) {
                if (pizza.options.isBigSize) {
                    sum = sum + pizza.price.big * amount 
                } else { 
                    sum = sum + pizza.price.small * amount 
                }
            }
          
        })
        return sum 
    }

    const countAmount = () => {
        let sum = 0
        pizzasInBasket.forEach( (pizza) => {
            
            const {options: {amount = 1}} = pizza
                if (pizza.options) {
                    sum = sum + amount
                }
        })
        return sum 

    }

    return (
        <div className="Header Main">
            <div className='LogoHome'>
                <Link to='/home'><img
                    src="https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2021/05/logo.svg" alt=""/></Link>
            </div>
            <div className='list-food'>
                <div> 
                    <Link className='btn-link' to='/pizza'>
                        <button className="btn btn-outline-success">Піца
                        </button>
                    </Link>
                </div>
                <div> <Link className='btn-link' to='/sushi'>
                        <button className="btn btn-outline-danger">Суші
                        </button>
                     </Link>
                </div>
                <Link to='/'>Комбо</Link>
                <Link to='/'>Сети</Link>
                <Link to='/salad'>Салати</Link>
                <Link to='/other-dishes'>Інше</Link>
                <Link to='/'>Напої</Link>
                <Link to='/'>Акції</Link>
                <Link to='/constructor'>Конструктор</Link>

                <div className='basket-icon'>
                    <Link to='/basket'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-basket"
                            viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Link>    
                        <div className='functions'> {countSum()}</div>
                        {countAmount() === 0 ? (null) : (
                              <div className='functions func-amount'>
                              <h3>{countAmount()}</h3>
                          </div>
                        )}
                      
                </div>

            </div>
        </div>
    )

}

export default HeaderMain
