import React, {useEffect, useState, FC} from 'react'
import { useParams } from 'react-router-dom';
import { IWok } from '../../interfaces/IWok';
import allWok from "../../consts/wok.json"
import './wokDetailed.scss'


const WokDetailed = () => {

    const [count, setCount] = useState(1);
    const onAdd = () => {
        setCount(count + 1)
    }
    const onDelete = () => {
        setCount(count > 1 ? count - 1 : 1)
    }

    const {id} = useParams()

    const [wok, setWok] = useState<IWok | null>(null)
    const [hasError, setHasError] = useState(false)
    
    useEffect(()=>{
        //тут делаешь axios запрос на сервер c id пиццы, которая пришла в url, чтобы получить данные о пицце
        if (id){
            if (+id > 9 || +id < 0){
                setHasError(true)
                setWok(null)
            } else {
                console.log("Типа axios запрос")
                const axiosResult = allWok[+id]
                setWok(axiosResult)
            }

        }
    },[])

    if (hasError){
        return (
            <div>
                Sorry, wrong pizza
            </div>
        )
    }

    return (
        <div className='wok-detailed'>
            <div className="wok-img">
                <img src={wok?.image} alt=""/>
            </div>
           <div className='wok-info'>
                <div className="weight">
                    <h3>{wok && wok.weight}</h3>
                </div>
                <h2>{wok && wok.name}</h2>

                <div className="description" >
                    <h3>{wok?.description}</h3>
                </div>
                <div className="order-wok">
                    <div className="number-price">
                        <div className='btn-number'>   
                        <button className='minus' onClick={onDelete}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </button>  
                                <button className='count'><h4>{count}</h4></button>
                                <button className='plus' onClick={onAdd}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                        </div>

                        <div className='price'>
                            <h1> {wok && wok.price * count} грн</h1>
                        </div>
                    </div>
                <button className='btn-order'>Додати в кошик</button>
                <button className='btn-fast-order'>Швидке замовлення</button>
                 </div>    
            </div>
            

            
        </div>

    )
}

export default WokDetailed