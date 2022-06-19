import React, { useState } from "react";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";


const Home = () => {

    const [sliderImageNumber, setSliderImageNumber] = useState<number>(0)
    const toggleSliderChange = (slide:number) => {
      setSliderImageNumber(slide)
    }

    return (
      <div>
          <ImageSlider 
            slides={SliderData}
            currentSlide={sliderImageNumber} 
            toggleSliderChange={toggleSliderChange}
           />

           <div className="FoodMenu">
              <FoodCategory
                  title={'Піца'}
                  link={'/pizza'}
                  img={"https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2022/01/p.jpg"}
              />
              <FoodCategory
                title={'Суші'}
                link={'/sushi'}
                img={"https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2022/01/csh.jpg"}
              />
               <FoodCategory
                title={'Салати'}
                link={'/salad'}
                img={"https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2022/01/k.png"}
              />
               <FoodCategory
                title={'Інші страви'}
                link={'/other-dishes'}
                img={"https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2022/01/f.jpg"}
              />
           </div>
          

      </div>  
    )
}

export default Home