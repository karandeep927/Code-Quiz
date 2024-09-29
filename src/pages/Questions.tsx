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
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setError(false)
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/quiz/${name.toLowerCase()}/${level.toLowerCase()}`);
        console.log(response)
        setQuestions(response.data?.questions);
      } catch (err) {
        setError(true)
      }
    };
    localStorage.clear()
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
        {error && <div className="w-full h-full text-center align-middle">Error while Fetching Questions</div>}
        {questions.length === 0 ? <div className="w-full h-full text-center align-middle">Loading....</div> : <Question
          questionObj={questions[currentQuestionIndex]}
          onOptionSelect={handleOptionSelect}
          showResult={false}
        />}

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
