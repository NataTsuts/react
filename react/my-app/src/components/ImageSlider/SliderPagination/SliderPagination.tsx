import React, {FC} from 'react'
import './style.scss'

//Опис пропсів компонента:
interface IPaginationProps {
    currentSlide: number,
    toggleSliderChange: (param: number) => void;
}

//FC - функціональний компонент
//<Interface> - властивості(пропси) цього компонента
const SliderPagination: FC<IPaginationProps> = (props) => {

    const generateButtons = () => {
        let buttons = []
        for (let i = 0; i < 5; i++) {
            let key = i
            buttons.push(
                <div key={key} className={props.currentSlide === key ? 'step selected' : 'step'}
                     onClick={() => props.toggleSliderChange(key)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                </div>
            )
        }
        return buttons
    }

    return (
        <div className='pagination'>
            {generateButtons()}
        </div>
    )
}

export default SliderPagination