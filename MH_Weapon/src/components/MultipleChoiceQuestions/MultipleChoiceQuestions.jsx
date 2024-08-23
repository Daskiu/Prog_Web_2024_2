import React from "react";

const MultipleChoiceQuestions = ({ question, options, handleChange}) => {
    return (
        <div className="choiceContainer">
            <p>{question}</p>
            {options.map((option, index) => (
                <div key={index}>
                <input type="radio"
                id={`option-${index}`}
                name="multiple-choice"
                value={option}
                onChange={handleChange}/>
                
                <label htmlFor={`option-${index}`}>{option}</label>
                
            </div>
            ))}
        </div>
    )
}

export default MultipleChoiceQuestions;