import { useEffect, useState } from "react";

interface Question {
  question: string;
  answer: string;
  selectedOption: number;
  questionNumber: number;
  options: string[];
}

interface QuestionsProps {
  questionObj: Question;
  onOptionSelect: (questionNumber: number, selectedOption: number) => void;
}

function Question({ questionObj, onOptionSelect }: QuestionsProps) {
  const [selected, setSelected] = useState<number | null>(questionObj?.selectedOption || null); // Safeguard against undefined

  const { question, questionNumber, options } = questionObj || {}; // Safeguard against undefined

  useEffect(() => {
    if (questionObj) {
      setSelected(questionObj.selectedOption);
    }
  }, [questionObj?.selectedOption, questionObj?.questionNumber,questionObj]);

  const handleOptionClick = (index: number) => {
    setSelected(index);
    onOptionSelect(questionNumber, index); // Update parent state with selected option
  };

  return (
    <div className="p-4 flex flex-col items-end gap-10 w-full bg-white dark:bg-gray-800">
      <h1 className="text-xl sm:text-3xl text-left w-full text-black dark:text-white">
        Q.{questionNumber} {question}
      </h1>
      <ul className="list-none w-full content-start">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`border p-3 my-4 cursor-pointer ${
              selected === index ? "bg-slate-300 dark:bg-gray-600" : ""
            } dark:text-white dark:border-gray-700`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
