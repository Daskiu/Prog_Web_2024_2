import React from "react";

const DichotomousQuestions = ({question, handleChange}) => {
    return (
        <div className="dichotomousContainer">
            <p>{question}</p>
            <div>
                <input type="radio"
                id="yes" 
                name="dichotomous" 
                value="yes" 
                onChange={handleChange}/>
                <label htmlFor="yes">Si</label>
            </div>

            <div>
            <input type="radio"
                id="no" 
                name="dichotomous" 
                value="no" 
                onChange={handleChange}/>
                <label htmlFor="no">No</label>
            </div>
        </div>
    )
}

export default DichotomousQuestions;