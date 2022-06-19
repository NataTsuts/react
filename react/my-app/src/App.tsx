import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Pizza from './pages/Pizza/Pizza';
import HeaderTop from './components/Header/HeaderTop';
import HeaderMain from './components/Header/HeaderMain';
import Basket from './pages/Basket/Basket';
import PizzaDetailed from "./pages/PizzaDetailed/PizzaDetailed";


function App(): any {

    const [param, setParam] = useState<number>(0)
    const [param2, setParam2] = useState<number>(0)

    useEffect(()=>{
        console.log("Regular effect")
    })

    useEffect(()=>{
        console.log("Effect with dependency")
    }, [param])
    useEffect(()=>{
        console.log("Effect with dependency 2")
    }, [param2])

    useEffect(()=>{
        console.log("Effect with empty dependency")
        console.log("----------------")
        setParam(1)
    }, [])

    return (
        <Router>
            <div className='Header'>
                <HeaderTop/>
                <HeaderMain/>
            </div>
            <Routes> 
                <Route path='/home' element={
                    <Home/>}/> 
                <Route path='/pizza' element={<Pizza/>}/>
                <Route path='/pizza/:id' element={<PizzaDetailed/>}/>
                <Route path='/basket' element={<Basket/>}/>
            </Routes>
        </Router>
    );
}

export default App;
