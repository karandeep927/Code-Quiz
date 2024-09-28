
import QuizSection from "../components/QuizSection"
import { CPP_IMG, JAVASCRIPT_IMG, PYTHON_IMG,REACT_IMG,HTML_IMG,CSS_IMG } from "../constants/images"

function Quizes() {
  return (
    <div className="w-full min-h-screen bg-primaryBg p-2 pb-10">
      <QuizSection heading="HTML" img={HTML_IMG}/>
      <QuizSection heading="CSS" img={CSS_IMG}/>
      <QuizSection heading="JavaScript" img={JAVASCRIPT_IMG}/>
      <QuizSection heading="React" img={REACT_IMG}/>
      <QuizSection heading="Cpp" img={CPP_IMG}/>
      <QuizSection heading="Python" img={PYTHON_IMG}/>
    </div>
  )
}

export default Quizes