import React, {useState} from 'react'
import './style.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import { IBasketInterface } from '../../interface/IBasketInterface';
import OrderInBasket from '../../components/OrderInBasket';

const Basket = () => {

    const pizzasInBasket:IBasketInterface[] = useSelector((state: RootState) => state.basket.pizzas)


    const [isSelect, setIsSelect] = useState(true);
    const toggleSelect = () => {
        setIsSelect(!isSelect);
    };

    const [isCourier, setIsCourier] = useState(true);
    const toggleSelectCourier = (param: boolean) => {
        setIsCourier(param);
    };
    const [isCash, setIsCash] = useState(true);
    const toggleSelectCash = (param: boolean) => {
        setIsCash(param);
    };
    const [isTimed, setIsTimed] = useState(false);
    const toggleSelectTimed = (param: boolean) => {
        setIsTimed(param);
    };

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

    const displayPizzasInBasket = () => {
        let allPizzas = []
        for (let pizza of pizzasInBasket) {
            allPizzas.push(
                <OrderInBasket
                key={pizza.id}
                pizza={pizza}
                />
            )
        }
        return allPizzas
    }

    return (
        <div className="basket">
            <div className='title'><h1>Оформлення замовлення</h1></div>
            <div className='info-order'>
                <div className='info'>
                    <div className='info-user'>
                        <div className='name-category'>
                            <div className='circle-number'>
                                <h3>1</h3>
                            </div>
                            <h2>Контактні дані</h2>
                        </div>
                        <input type="name" className='info__input' placeholder="Ваше ім'я"/>
                        <input type="phone" className="info__input" placeholder="Ваш номер телефону"/>
                        <input type="email" className="info__input"
                               placeholder="E-mail, щоб отримати копію замовлення"/>
                    </div>
                    <div className='info-delivery'>
                        <div className='name-category'>
                            <div className='circle-number'>
                                <h3>2</h3>
                            </div>
                            <h2>Інформація про доставку</h2>
                        </div>

                        <div className='button delivery-method'>
                            <button className={isCourier ? 'btn-select' : 'btn'} onClick={()=>toggleSelectCourier(true)}>
                                Доставка кур'єром
                            </button>
                            <button className={!isCourier ? 'btn-select' : 'btn'} onClick={()=>toggleSelectCourier(false)}>
                                Самовивіз
                            </button>
                        </div>

                        {isCourier ? (
                            <div>
                                <select className='dropdown'>
                                    <option selected value="city"><h2>Чернівці</h2></option>
                                    <option value="city"><h2>Мамаївці</h2></option>
                                    <option value="city"><h2>Лужани</h2></option>
                                    <option value="city"><h2>Вашківці</h2></option>
                                </select>
                                <div>
                                    <input type="address" className="delivery__input-big"
                                           placeholder="Введіть вулицю доставки"/>
                                    <input type="address" className="delivery__input" placeholder="№ будинку"/>
                                </div>

                                <div>
                                    <input type="address" className="delivery__input-small" placeholder="Під'їзд"/>
                                    <input type="address" className="delivery__input-small" placeholder="Квартира"/>
                                    <input type="address" className="delivery__input-small" placeholder="Поверх"/>
                                    <input type="address" className="delivery__input-small" placeholder="Домофон"/>
                                </div>
                            </div>
                        ) : (
                            <div className="delivery-self-pickup">
                                <button className='delivery-self-pickup-address'>
                                    <h3> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                          </svg>
                                    Проспект Незалежності 90
                                    </h3>
                                </button>
                                <button className='delivery-self-pickup-address'>
                                    <h3> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                          </svg>
                                      вул. Руська 253
                                    </h3>
                                </button>
                                <button className='delivery-self-pickup-address'>
                                    <h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                          </svg>
                                         вул. Гагаріна 54
                                    </h3>
                                </button>
                            </div>
                        )}

                            <div className='button-delivery-time'>
                                <button className={!isTimed ? 'btn-select' : 'btn' } onClick={()=>toggleSelectTimed(false)}>
                                    Якомога швидше
                                </button>
                                
                                <button className={isTimed ? 'btn-select' : 'btn'} onClick={()=>toggleSelectTimed(true)}>
                                    На час
                                </button>
                            </div>

                            {isTimed ? (
                                <div className='timed'>
                                    <h3>Часовий інтервал</h3>
                                </div>    
                                ) : (
                                    <h3>(карта)</h3>
                                )
                            }
                        
                    </div>

                </div>
                <div className='order'>
                    <div className='order-list'>
                        <div className='name-category'>
                            <h2>Ваше замовлення</h2>
                        </div>
                        {displayPizzasInBasket()}
                    </div>

                    <div className='payment'>
                        <div className='name-category'>
                            <div className='circle-number'>
                                <h3>3</h3>
                            </div>
                            <h2>Інформація про оплатy</h2>
                        </div>
                        <div className='button-payment'>
                            <button className={isCash ? 'btn-select' : 'btn' } onClick={()=>toggleSelectCash(true)}>
                                Готівка при отриманні
                            </button>
                            <button className={!isCash ? 'btn-select' : 'btn'} onClick={()=>toggleSelectCash(false)}>
                                Оплата через термінал
                            </button>
                        </div>
                        
                        {isCash ? (
                                <div className='cash'>
                                <h1>Решта з</h1>
                                <input type="cash" className="cash__input" placeholder="Вкажіть суму"/>
                                <div className="checkbox">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         className={isSelect ? 'bi-circle' : 'bi-circle-select'} onClick={toggleSelect}
                                         viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    </svg>
                                    <span className='no-return'><h2>Без решти</h2></span>
                                </div>
                                <hr></hr>
                            </div>  
                                ) : (null)
                            }

                        <div className='promokod'>
                            <h1>Ввести промокод</h1>
                            <input type="cash" className="promokod__input" placeholder=""/>
                            <button className='btn-promokod'>Застосувати</button>
                        </div>

                        <div className='total'>
                            <h1>Сума: {countSum()}</h1>
                            
                            <div className='btn-make-order'>оформити замовлення</div>
                        </div>

                        <div className='checkout-order'>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Basket
