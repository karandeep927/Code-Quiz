import Card from "../components/Card"
import QuizCardSlider from "../components/QuizCardSlider"


interface Props{
    heading:string;
    img:string;
}

function QuizSection({heading,img}:Props) {
  return (
    <>
    <h1 className="text-primaryText m-5  text-3xl border-b py-5 mr-10 border-b-thirdBg font-bold">{heading}</h1>
      <QuizCardSlider>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Basic-I" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Basic-II" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Basic-III" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Intermediate-I" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Intermediate-II" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Intermediate-III" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Advanced-I" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Advanced-II" img={img}/>
        <Card heading={heading} desc="Play and Test Your Knowledge" tag="Advanced-III" img={img}/>
      </QuizCardSlider>
    </>
  )
}

export default QuizSection