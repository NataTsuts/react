import React, {FC} from "react";
import {SliderData} from "./SliderData";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import './styles.scss'
import SliderPagination from "./SliderPagination/SliderPagination";

interface IProps {
    slides: { image: string }[];
    currentSlide: number;
    toggleSliderChange: (param: number) => void
}

const ImageSlider: FC<IProps> = ({slides, currentSlide, toggleSliderChange}) => {
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
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide active' : 'slide'}
                         key={index}>

                        {index === currentSlide && (
                            <img src={slide.image} alt="" className="image"/>
                        )}
                    </div>
                )
            })}
            <SliderPagination
                toggleSliderChange={toggleSliderChange}
                currentSlide={currentSlide}
            />
        </ section>
    )
};

export default ImageSlider