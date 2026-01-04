export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const quizData: Question[] = [
  {
    id: 1,
    question: "What does 'HTML' stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "font-style"],
    correctAnswer: "color",
  },
  {
    id: 3,
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script src='script.js'>",
      "<script file='script.js'>",
    ],
    correctAnswer: "<script src='script.js'>",
  },
  {
    id: 4,
    question: "Which React hook is used for handling side effects in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    id: 5,
    question: "What does 'API' stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Program Interface",
      "Automated Programming Interface",
    ],
    correctAnswer: "Application Programming Interface",
  },
];
