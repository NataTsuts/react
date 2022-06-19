import React, {FC} from "react";
import { Link } from "react-router-dom";
import {SliderData} from "./SliderData";
import './style.scss'


interface IProps {
    slides: { 
        image: string,
        title: string,
        description?: string
     }[];
    currentSlide: number;
    toggleSliderChange: (param: number) => void
}

const Slider: FC<IProps> = ({slides, currentSlide, toggleSliderChange}) => {
    const length = slides.length

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        toggleSliderChange(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
        toggleSliderChange(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }
    return (
        <section className="Slider">
            <div className="arrow left-arrow" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                   <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </div>
            <div className="arrow right-arrow" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </div>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide active' : 'slide'}
                         key={index}>

                        {index === currentSlide && (
                            <div className="">
                            <img src={slide.image} alt="" className="image"/>
                            <span className="title-slider">{slide.title}</span>
                            <span className="description">{slide.descripton}</span>
                            </div>
                        )}
                    </div>
                )
            })}

                <div className="red-circle">
                    <Link to='/about'>
                    <h2>Детальніше</h2>
                    <img src="https://yoki.ua/wp-content/themes/yoki/img/icons/btn_more.svg"></img>
                    </Link>
                </div>
        </ section>
    )
};

export default Slider