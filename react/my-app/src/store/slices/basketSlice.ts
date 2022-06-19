import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IBasketInterface} from "../../interface/IBasketInterface";


export interface BasketState {
    pizzas: IBasketInterface[]
}

const initialState: BasketState = {
    //@ts-ignore
    pizzas: JSON.parse(localStorage.getItem('pizzaInBasket') || '[]')

}

export const counterSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addPizza: (state,action: PayloadAction<IBasketInterface>) => {
          
            state.pizzas = [...state.pizzas, action.payload]
            localStorage.setItem('pizzaInBasket', JSON.stringify(state.pizzas))
        },
        removePizza: (state, action: PayloadAction<number>) => {
            state.pizzas = state.pizzas.filter((pizza) => pizza.id !== action.payload)
            localStorage.setItem('pizzaInBasket', JSON.stringify(state.pizzas))
        },
        addAmount: (state, action: PayloadAction<number>) => {
            state.pizzas = state.pizzas.map((pizza) => {
                
                if (pizza.id === action.payload) {
                   if (pizza.options.amount) {
                    let newAmount = pizza.options.amount + 1
                    pizza.options.amount = newAmount
                    console.log(newAmount)
                   } 
                   else {
                 console.log (5) 
                 pizza.options.amount = 2 
                   }
                   return pizza
                } else {
                    return pizza
                }
            })
            localStorage.setItem('pizzaInBasket', JSON.stringify(state.pizzas))
        },
        removeAmount: (state, action: PayloadAction<number>) => {
            state.pizzas = state.pizzas.map((pizza) => {
                
                if (pizza.id === action.payload) {
                   if (pizza.options.amount && pizza.options.amount > 1 ) {
                    let newAmount = pizza.options.amount - 1
                    pizza.options.amount = newAmount
                   } 
                   else {
                    pizza.options.amount = 1
                   }
                   return pizza
                } else {
                    return pizza
                }
            })
            localStorage.setItem('pizzaInBasket', JSON.stringify(state.pizzas))
        }
    },
})


export const { addPizza, removePizza, addAmount, removeAmount } = counterSlice.actions

export default counterSlice.reducer