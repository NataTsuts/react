import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HeaderMain from './components/Header/HeaderMain';
import HeaderTop from './components/Header/HeaderTop';
import Home from './pages/Home/Home';
import Wok from './pages/wok/wok';
import WokDetailed from './pages/wok/WokDetailed';

function App() {
  return (
    <Router /* Это нужно для того, чтоб твой проект был подключен к роутингу через URL */>
        <div className='Header'>
            <HeaderTop/>
            <HeaderMain/>
        </div>
        <Routes>  {/* Обворачивая компоненты в этот компонент, ты указываешь на то, что все компоненты внутри будут переключаться в зависимости от url*/}
           <Route path='/home' element={<Home/>}/>  {/*path - твой url, element - компонент, который отображать если выполнено условие*/}
          <Route path='/wok' element={<Wok/>}/>
            {/*/pizza/:id - даем понять, что мы переходим на эту страничку, когда у нас в url есть параметр. Параметры задаются с помощью двоеточия (:имя_параметра)*/}
            <Route path='/wok/:id' element={<WokDetailed/>}/>
        </Routes>
    </Router>
);
}

export default App;
