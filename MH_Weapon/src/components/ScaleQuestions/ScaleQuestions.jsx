import React from "react";

const ScaleQuestions = ({ question, min, max, step, handleChange}) => {
    return (
        <div className="scaleContainer">
            <p>{question}</p>
            <input type="range"
            min={min}
            max={max}
            step={step}
            onChange={handleChange}/>
        </div>
    )
}

export default ScaleQuestions;