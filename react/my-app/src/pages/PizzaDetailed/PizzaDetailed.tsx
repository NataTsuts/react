import React, {useEffect, useState, FC} from 'react'
import './style.scss'
import {useParams} from "react-router-dom";
import allPizza from "../../consts/pizza.json"
import { IPizza } from '../../interface/IPizza';
import {useDispatch} from "react-redux";
import {addPizza} from "../../store/slices/basketSlice";


const PizzaDetailed = () => {

    const dispatch = useDispatch()

    const addToBasket = () => {
        if (pizza) {
            dispatch(addPizza({...pizza, options:{
                isBigSize : isBigSize,
                isAddIngr: isAddIngr,
                amount: count
            }}))
        }
    }
    // const params = useParams()
    // const id = params.id

    //id это имя_параметра, которое мы указали в Route после :
    //Если бы мы в Route указали pizza_id, то доставали бы соответсвенное название
    //const {pizza_id} = useParams()

    //useParams используется для взятия параметров из url, которые мы определяем в Route
    const {id} = useParams()

    const [pizza, setPizza] = useState<IPizza | null>(null)
    const [hasError, setHasError] = useState(false)

    //если бы шел запрос на сервер
    useEffect(()=>{
        //тут делаешь axios запрос на сервер c id пиццы, которая пришла в url, чтобы получить данные о пицце
        if (id){
            if (+id > 6 || +id < 0){
                setHasError(true)
                setPizza(null)
            } else {
                console.log("Типа axios запрос")
                const axiosResult = allPizza[+id]
                setPizza(axiosResult)
            }

        }
    },[])

    const [isBigSize, setIsBigSize] = useState(false);
    const toggleClass = (param: boolean) => {
        setIsBigSize(param);
    };

    const [isAddIngr, setIsAddIngr] = useState<"" | "cheese" | "sesame" | "meat">('');
    const toggleAdd = (bort: "" | "cheese" | "sesame" | "meat") => {
        setIsAddIngr(bort)
    };

    const [count, setCount] = useState(1);
    const onAdd = () => {
        setCount(count + 1)
    }
    const onDelete = () => {
        setCount(count > 1 ? count - 1 : 1)
    }

    //Ожидание пиццы
    if (pizza === null) {
        return (
            <div>
                Your pizza is loading
            </div>
        )
    }

    //Концепт перехвата ошибки с сервера
    if (hasError){
        return (
            <div>
                Sorry, wrong pizza
            </div>
        )
    }
   
    return (
        <div className='kaprichoza'>
            <div className='product'>
                {/*проверка на существование обьекта, который пришел с сервера*/}
                <img src={pizza.image}
                     alt=""/>
            </div>
            <div className='description'>
                <div className='weight'>
                    <h2>{isBigSize ? (pizza.weight.big) : (pizza.weight.small)} г</h2>
                </div>
                <h1>{pizza.name}</h1>
                <h2>{pizza.description}</h2>
                <div className='button'>
                    <button className={isBigSize ? 'btn' : 'btn-select'} onClick={()=>toggleClass(false)}>
                        30 см
                    </button>
                    <button className={isBigSize ? 'btn-select' : 'btn'} onClick={()=>toggleClass(true)}>
                        40 см
                    </button>
                </div>

                <div className='addition'>
                    <div><h3>Бортик:</h3></div>
                    <div className="checkbox" onClick={() => toggleAdd('sesame')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddIngr === "sesame" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span
                            className={isAddIngr === "sesame" ? 'name-checkox-select' : 'name-checkox'}>Кунжутний</span>
                    </div>

                    <div className="checkbox" onClick={() => toggleAdd('cheese')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddIngr === "cheese" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span className={isAddIngr === "cheese" ? 'name-checkox-select' : 'name-checkox'}>Сирний</span>
                    </div>

                    <div className="checkbox" onClick={() => toggleAdd('meat')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddIngr === "meat" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span
                            className={isAddIngr === "meat" ? 'name-checkox-select' : 'name-checkox'}>Мисливський</span>
                    </div>
                </div>
                <div className='order'>
                    <div className='price'>
                        <h1>{isBigSize ? (pizza.price.big)*count : (pizza.price.small)*count} грн</h1>
                    </div>
                    <div className='weight'>
                        <h2>{isBigSize ? (pizza.weight.big) : (pizza.weight.small)} г</h2>
                    </div>

                    <div className='btn-number'>
                        <div className='minus' onClick={onDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </div>
                        <div className='count'>{count}</div>
                        <div className='plus' onClick={onAdd}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </div>
                    </div>
                    <button className='btn-add-basket' onClick={addToBasket}>Додати в кошик</button>
                </div>
            </div>
        </div>
    )
}

export default PizzaDetailed