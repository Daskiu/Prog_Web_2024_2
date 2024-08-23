import React from "react";
import { useState } from "react";
import './Body.css';

import DichotomousQuestions from "../DichotomousQuestions/DichotomousQuestions.jsx"
import MultipleChoiceQuestions from "../MultipleChoiceQuestions/MultipleChoiceQuestions.jsx"
import ScaleQuestions from "../ScaleQuestions/ScaleQuestions.jsx"

import questions from "../../const/questions.js";

export function Body() {

    return (
        <main>
          <h1>Body is here</h1>
          <DichotomousQuestions/>
          <ScaleQuestions/>

          <MultipleChoiceQuestions options={['Espada Larga', 'Hacha Espada', 'Gran Espada']}/>
        </main>
    )
}