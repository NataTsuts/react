import React from 'react'
import wokJSON from '../../consts/wok.json'
import { IWok } from '../../interfaces/IWok';
import './wok.scss'
import WokElement from '../../components/WokElement/WokElement';

const Wok = () => {

    const generateWokElement = (data: IWok[]) => {
        const wokArray = []
        for (let i = 0; i < data.length; i++) {
            let wok = data[i]
            wokArray.push(
                //ипользуем wok.id для генерации линки на страничку детальной пиццы и для key
                <WokElement
                    key={wok.id}
                    data={wok}
                    link={`/wok/${wok.id}`}
                />
            )
        }
        return wokArray

    }
    return (
        <div className='wok'>
            <div className="title">
                        <img src="https://yoki.ua/wp-content/themes/yoki/img/icons/title_decor_white.svg" alt=''/>
                        <h1>WOK</h1>
            </div>
            <div className='wok-total'>
                    {generateWokElement(wokJSON)}
            </div>
        </div>
    )
}

export default Wok