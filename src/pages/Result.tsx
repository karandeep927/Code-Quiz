import { useContext, useEffect, useReducer } from "react";
import Button from "../components/Button";
import DarkModeToggle from "../components/DarkModeToggle";
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";
import { quizContext } from "../context/context";

interface InitialState {
  right: number;
  wrong: number;
  notAttempt: number;
  total: number;
}

type Action = { type: 'right' | 'wrong' | 'notAttempt' | 'total'; payload?: number };

const initialState: InitialState = {
  right: 0,
  wrong: 0,
  notAttempt: 0,
  total: 0,
};

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'right':
      return { ...state, right: state.right + (action.payload || 1) };
    case 'wrong':
      return { ...state, wrong: state.wrong + (action.payload || 1) };
    case 'notAttempt':
      return { ...state, notAttempt: state.notAttempt + (action.payload || 1) };
    case 'total':
      return { ...state, total: state.total + (action.payload || 1) };
    default:
      throw new Error('Unhandled action type');
  }
}

function Result() {
  const navigate = useNavigate();
  const [state , dispatch] = useReducer(reducer,initialState)
  const { questions } = useContext(quizContext);


  function countScore() {
    questions.forEach((question) => {
      if (question.answer === question.options[question.selectedOption]) {
        dispatch({ type: 'right' });
      } else if (question.selectedOption !== -1) {
        dispatch({ type: 'wrong' });
      } else {
        dispatch({ type: 'notAttempt' });
      }
      dispatch({ type: 'total' });
    });
  }
  useEffect(countScore,[questions])
  return (
    <div className="pb-5 min-h-screen pt-[70px] flex flex-col gap-6 justify-center items-center relative dark:bg-gray-800">
      <div className="w-full flex justify-between items-center py-3 shadow-md absolute top-0 px-5 bg-white dark:bg-gray-800">
        <Button
          className="text-thirdBg dark:text-white"
          onclick={() => navigate("/")}
        >
          Back To Home
        </Button>
        <div className="absolute top-5 right-5">
          <DarkModeToggle />
        </div>
      </div>
      <div className="w-full h-full  flex flex-col items-center ">
        <h1 className="font-bold text-3xl text-primaryText dark:text-gray-200">
          Result
        </h1>
        <h2 className="font-bold text-xl text-thirdText dark:text-gray-300">
          Total Scores: {state.right} / {state.total}
        </h2>
        <h2 className="font-bold text-xl text-red-700 dark:text-red-400">
          Wrong Answers: {state.wrong}
        </h2>
        <h2 className="font-bold text-xl text-green-700 dark:text-green-400">
          Right Answers: {state.right}
        </h2> 
        <h2 className="font-bold text-xl dark:text-gray-300">
          Not Attempted: {state.notAttempt}
        </h2>
        <div className="border shadow-md w-full sm:w-3/4 lg:w-1/2 p-4 mt-5 relative bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            {questions.map((question) => {
              return (
                <Question questionObj={question} onOptionSelect={() => {}} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Result;
