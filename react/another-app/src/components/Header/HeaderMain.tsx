import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import './style.scss'



const HeaderMain = () => {

    return (
        <div className="Header Main">
            <div className='Home'>
                <Link to='/home'>
                    <img src="https://yoki.ua/wp-content/uploads/2021/12/logo_black_resteurant-01.svg" alt=""/>
                </Link>
                <Navbar/>
            </div>
                 
                 <div className='menu'>
                    <Link to='/'>Акції</Link>
                    <Link to='/'>Роли</Link>
                    <Link to='/salad'>Закуски</Link>
                    <Link to='/other-dishes'>Гарячі страви</Link>
                    <Link to='/'>Веган меню</Link>
                    <Link to='/'>Десерти</Link>
                    <Link to='/'>Kids</Link>
                    <Link to='/'>Напої</Link>
                 </div>
               

                <div className='bag-icon'>
                    <Link to='/basket'>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </Link>    
                    
                      
                </div>

            </div>
      
    )

}

export default HeaderMain
