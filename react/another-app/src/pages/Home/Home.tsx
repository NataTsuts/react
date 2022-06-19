import React, { useState } from "react";
import FoodCategory from "../../components/FoodMenu/FoodCategory";
import Slider from "../../components/Slider/Slider";
import { SliderData } from "../../components/Slider/SliderData";
import './Home.scss'


const Home = () => {

    const [sliderImageNumber, setSliderImageNumber] = useState<number>(0)
    const toggleSliderChange = (slide:number) => {
      setSliderImageNumber(slide)
    }

    return (
      <div>
          <Slider 
            slides={SliderData}
            currentSlide={sliderImageNumber} 
            toggleSliderChange={toggleSliderChange}
           />
            
            <div className="all-menu">
                <div className="title">
                    <img src="https://yoki.ua/wp-content/themes/yoki/img/icons/title_decor_white.svg" alt=''/>
                    <h1>Популярні категорії</h1>
                </div>
                <div className="food-menu">
                
                    <FoodCategory
                    name={'wok'}
                    link={'/wok'}
                    img={"https://yoki.ua/wp-content/uploads/2021/12/a2ca6301-e96c-4922-aced-e050ebeef146.jpg"}
                    />

                    <FoodCategory
                    name={'суп'}
                    link={'/soup'}
                    img={"https://yoki.ua/wp-content/uploads/2022/03/42eb647c-adab-4783-9c87-5817800c04c6.jpg"}
                    />
                    <FoodCategory
                    name={'закуски'}
                    link={'/snacks'}
                    img={"https://yoki.ua/wp-content/uploads/2021/12/6a9706d2-2769-4aec-91f7-57f7c826e579-scaled-e1639485442608-427x326.webp"}
                    />
                    <FoodCategory
                    name={'десерти'}
                    link={'/deserts'}
                    img={"https://yoki.ua/wp-content/uploads/2021/12/461bfa44-dddd-4aab-9f3e-9b6070ef6107-scaled-e1639483959564-474x326.webp"}
                    />
                    <FoodCategory
                    name={'роли і суші в чернівцях'}
                    link={'/sushi'}
                    img={"https://yoki.ua/wp-content/uploads/2021/12/35ba6dbc-b7bb-47ca-9f63-fc11ac6c0e14-scaled-e1639484157378-455x326.webp"}
                    />
                    <FoodCategory
                    name={'напої'}
                    link={'/drinks'}
                    img={"https://yoki.ua/wp-content/uploads/2021/12/img_8655-scaled-e1639485471917-510x326.webp"}
                    />
                </div>
          
            </div>
            

      </div>  
    )
}

export default Home