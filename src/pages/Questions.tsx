import { useContext, useState, useEffect } from "react";
import Button from "../components/Button";
import Question from "../components/Question";
import { BACK_BUTTON, NEXT_BUTTON } from "../constants/icon";
import { useLocation, useNavigate } from "react-router-dom";
import { quizContext } from "../context/context";
import axios from "axios";

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
  const [name, level] = pathname.split("/").slice(2);
  const { questions, setQuestions } = useContext(quizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false)
  const [isShow,setShow] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setError(false);
        setLoading(true)
        localStorage.set("questions","");
        const response = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL
          }/quiz/${name.toLowerCase()}/${level.toLowerCase()}`
        );
        setLoading(false)
        setQuestions(response.data?.questions);
      } catch (err) {
        setError(true);
        setLoading(false)
      }
    };
      fetchQuestions();
  }, [name, setQuestions, level]);

  const handleOptionSelect = (
    questionNumber: number,
    selectedOption: number
  ) => {
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
    setShow(true)
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-100 dark:bg-gray-900">
      <div className="w-full flex justify-start py-3 shadow-md absolute top-0 bg-secondBg">
        <Button
          onclick={handleBack}          
        >
          <BACK_BUTTON size={23} className="text-white" />
        </Button>
      </div>

      <div className="w-full  m-2 mt-14 sm:h-[550px] sm:w-[900px] relative bg-white flex flex-col justify-between items-end dark:bg-gray-800">
        {
          isShow && 
          <div className="absolute top-0 left-0 bg-thirdBg z-20 w-full h-full flex items-center justify-center">
            <div className=" border bg-white p-3 flex flex-col justify-between items-end w-64 h-32">
            <p className="text-left w-full">Do you want to exit the Quiz ?</p>
            <div className="flex justify-around w-full">
              <Button className="bg-secondBg text-white" onclick={() => {setShow(!isShow);setQuestions([]); navigate("/quiz")}}>Yes</Button>
              <Button className="text-thirdText border" onclick={() => setShow(false)}>No</Button>
            </div>
            </div>
        </div>
        }
        {error && (
          <div className="w-full h-full text-center align-middle dark:text-thirdText">
            Error while Fetching Questions
          </div>
        )}
        {
            loading &&  (
              <div className="w-full h-full text-center align-middle dark:text-thirdText">
                Loading....
              </div>
            ) 
        }
        { questions.length > 0 && (
          <Question
            questionObj={questions[currentQuestionIndex]}
            onOptionSelect={handleOptionSelect}
            showResult={false}
          />
        )}

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
            isDisabled={questions.length === 0}
            className="m-5 flex items-center text-white dark:text-gray-100 bg-secondBg dark:bg-gray-700 gap-2 rounded-md content-end disabled:opacity-50"
          >
            Next <NEXT_BUTTON size={23} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Questions;
