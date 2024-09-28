import { createContext, useState, useEffect } from "react";

interface Question {
  question: string;
  answer: string;
  selectedOption: number;
  questionNumber: number;
  options: string[];
}

interface QuizContextType {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

interface Props {
  children: React.ReactNode;
}

// Initial default value
const value = {
  questions: [
    {
      question: "",
      answer: "",
      selectedOption: 0,
      questionNumber: 0,
      options: [],
    },
  ],
  setQuestions: () => {},
};

export const quizContext = createContext<QuizContextType>(value);

export const QuizContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem("questions", JSON.stringify(questions));
    }
  }, [questions]);

  return (
    <quizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </quizContext.Provider>
  );
};
