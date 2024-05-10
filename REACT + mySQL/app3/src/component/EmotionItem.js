// 객체 React는 배열안에 있는 개체값을 사용할 때 불러온다.
import React from "react"
import "./EmotionItem.css"

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
        onClick(id)
    }
    return (
        <div className="EmotionItem" 
        
        onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img} />
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem