import React from 'react'
import PizzaElement from '../../components/PizzaElement/PizzaElement';
import pizzaJSON from '../../consts/pizza.json'
import './style.scss'
import {IPizza} from "../../interface/IPizza";

const Pizza = () => {

    const generatePizzaElement = (data: IPizza[]) => {
        const pizzaArray = []
        for (let i = 0; i < data.length; i++) {
            let pizza = data[i]
            pizzaArray.push(
                
                <PizzaElement
                    key={pizza.id}
                    data={pizza}
                    link={`/pizza/${pizza.id}`}
                />
            )
        }
        return pizzaArray

    }
    return (
        <div className='pizza'>
            <div className='title'>Піца</div>
            <div className='product-list'>
                {generatePizzaElement(pizzaJSON)}
            </div>
        </div>
    )
}

export default Pizza
