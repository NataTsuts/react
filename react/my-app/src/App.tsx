import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Pizza from './pages/Pizza/Pizza';
import HeaderTop from './components/Header/HeaderTop';
import HeaderMain from './components/Header/HeaderMain';
import Basket from './pages/Basket/Basket';
import PizzaDetailed from "./pages/PizzaDetailed/PizzaDetailed";
import Constructor from './pages/constructor/constructor';


function App(): any {
    //виды useEffect
    const [param, setParam] = useState<number>(0)
    const [param2, setParam2] = useState<number>(0)
    //будет выполняться при иницализации компоненты и дальше при ЛЮБОМ изменении в стейте
    useEffect(()=>{
        console.log("Regular effect")
    })
    //будет выполняться при иницализации компоненты и дальше при изменении в стейте, указанном в dependency []
    useEffect(()=>{
        console.log("Effect with dependency")
    }, [param])
    useEffect(()=>{
        console.log("Effect with dependency 2")
    }, [param2])
    //будет выполняться только при иницализации компоненты, поскольку [] пустые
    useEffect(()=>{
        console.log("Effect with empty dependency")
        console.log("----------------")
        setParam(1)
    }, [])

    // let interval:any
    // useEffect(()=>{
    //     //это начинает что-то делать
    //     interval = setInterval(()=>{console.log(1+1)},5000)
    //
    //     //это заканчивает начатое при выходе со странички
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[])


    return (
        <Router /* Это нужно для того, чтоб твой проект был подключен к роутингу через URL */>
            <div className='Header'>
                <HeaderTop/>
                <HeaderMain/>
            </div>
            <Routes>  {/* Обворачивая компоненты в этот компонент, ты указываешь на то, что все компоненты внутри будут переключаться в зависимости от url*/}
                <Route path='/home' element={
                    <Home/>}/> {/*path - твой url, element - компонент, который отображать если выполнено условие*/}
                <Route path='/pizza' element={<Pizza/>}/>
                {/*/pizza/:id - даем понять, что мы переходим на эту страничку, когда у нас в url есть параметр. Параметры задаются с помощью двоеточия (:имя_параметра)*/}
                <Route path='/pizza/:id' element={<PizzaDetailed/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/constructor' element={<Constructor/>}/>
            </Routes>
        </Router>
    );
}

export default App;
