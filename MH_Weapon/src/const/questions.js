const questions = [
    {
      type: 'multiple-choice',
      question: '¿Cuál es tu arma favorita en MHW?',
      options: ['Espada Larga', 'Hacha Espada', 'Gran Espada'],
    },
    {
      type: 'scale',
      question: '¿Qué tan importante es la movilidad para ti?',
      min: '1',
      max: '5',
      step: '1',
    },
    {
      type: 'dichotomous',
      question: '¿Prefieres el combate a distancia?',
    }
  ];

  export default questions;