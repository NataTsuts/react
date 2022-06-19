import React from 'react'
import {Link} from "react-router-dom";
import './style.scss'


const HeaderTop = () => {
    return (
        <div className="Header Top">
            <div className='Header Locations'>    
                <h2>Доставка азійської кухні у <a href='#'>Чернівцях</a></h2>
            </div>
            <div className='Header Delivery'>    
                <h1>Доставка та оплата</h1>
            </div>
            <div className='Header work'>  
                <div className='work-number'>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg> 
                    <h1>
                        050 159 77 77
                    </h1>
                </div> 
                 
                <div className='worktime'>
                    Доставляємо з
                    11:00-19:30 
                </div>
            </div>
            <div className='Header UserActions'>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search"
                         viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>    
            
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person"
                         viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                </div>    
                
            </div>
        </div>
    )
}

export default HeaderTop