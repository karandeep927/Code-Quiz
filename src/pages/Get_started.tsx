import Button from "../components/Button"
import getstartimg from '../assets/getstarted.png'
import DarkModeToggle from "../components/DarkModeToggle"
import { Link } from "react-router-dom"


function Get_started() {

  return (
    <div className="flex bg-secondBg dark:bg-gray-900 w-full h-screen justify-center items-center p-4 gap-10 relative">
      <div className="absolute top-5 right-5 "> 
        <DarkModeToggle />
      </div>
    <div className="flex-1">
      <h1 className={`capitalize text-5xl font-bold w-56 my-3 text-thirdText dark:text-white sm:w-[30rem] sm:text-7xl`}>
        Welcome to the world of quiz's
      </h1>
      <p className="text-thirdText dark:text-gray-300 sm:text-xl my-5 sm:my-6">
        Sharpen your coding skills with quizzes on programming languages and frameworks. From beginner to advanced levels, challenge yourself and deepen your understanding of different languages. Test your knowledge and stay ahead in the ever-evolving world of technology!
      </p>
      <Link to="/dashboard">
      <Button
        className="text-white rounded-lg mt-5 border border-primaryBg bg-primaryBg focus:bg-secondBg dark:bg-gray-700 dark:border-gray-500 dark:focus:bg-gray-600"
        >
        Let's Play
      </Button>
      </Link>
    </div>
    <div className="flex-1 hidden sm:block">
      <img src={getstartimg} alt="get start picture" />
    </div>
  </div>
  )
}

export default Get_started