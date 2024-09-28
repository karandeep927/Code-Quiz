import { useContext, useState, useEffect } from "react";
import Button from "../components/Button";
import Question from "../components/Question";
import DarkModeToggle from "../components/DarkModeToggle";
import { BACK_BUTTON, NEXT_BUTTON } from "../constants/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { quizContext } from "../context/context";
import axios from 'axios'

interface QuestionType {
  question: string;
  answer: string;
  selectedOption: number;
  questionNumber: number;
  options: string[];
}

function Questions() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [name, level] = pathname.split('/').slice(2);
  const { questions, setQuestions } = useContext(quizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/quiz/${name.toLowerCase()}/${level.toLowerCase()}`);
        console.log(response.data)
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [name, setQuestions,level]);

  const handleOptionSelect = (questionNumber: number, selectedOption: number) => {
    setQuestions((prevQuestions: QuestionType[]) =>
      prevQuestions.map((question) =>
        question.questionNumber === questionNumber
          ? { ...question, selectedOption }
          : question
      )
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen w-full flex justify-center items-center relative bg-slate-100 dark:bg-gray-900">
      <div className="w-full flex justify-start py-3 shadow-md absolute top-0 ">
        <Button
          onclick={handleBack}
          className="disabled:opacity-50"
          isDisabled={currentQuestionIndex === 0}
        >
          <BACK_BUTTON size={23} className="dark:text-white" />
        </Button>
        <div className="absolute top-5 right-5 ">
          <DarkModeToggle />
        </div>
      </div>

      <div className="w-full m-2 mt-14 sm:h-[550px] sm:w-[900px] border border-slate-300 bg-white dark:border-slate-600 flex flex-col justify-between items-end dark:bg-gray-800">
        <Question
          questionObj={questions[currentQuestionIndex]}
          onOptionSelect={handleOptionSelect}
        />

        {currentQuestionIndex === questions.length - 1 ? (
          <Button
            onclick={() => navigate("/result")}
            className="m-5 flex items-center text-whiteText dark:text-gray-100 bg-primaryBg dark:bg-gray-700 gap-2 rounded-md content-end disabled:opacity-50"
          >
            Result
          </Button>
        ) : (
          <Button
            onclick={handleNext}
            className="m-5 flex items-center text-whiteText dark:text-gray-100 bg-primaryBg dark:bg-gray-700 gap-2 rounded-md content-end disabled:opacity-50"
          >
            Next <NEXT_BUTTON size={23} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Questions;
