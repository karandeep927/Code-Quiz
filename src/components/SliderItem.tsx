import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface CardProps {
    heading:string;
    desc:string;
    img:string;
}

function SliderItem({heading,desc,img}:CardProps) {
  const navigate = useNavigate()
  return (
    <div className="rounded-lg overflow-hidden border border-primaryBg dark:border-thirdBg">
        <div className="w-full h-36 sm:h-64">
            <img src={img} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="bg-thirdBg  p-3 relative  dark:bg-primaryBg">
            <h1 className="text-primaryText font-bold text-xl dark:text-thirdText">{heading}</h1>
            <p className="text-primaryText dark:text-thirdText">{desc}</p>
            <Button className="absolute top-5 right-2 bg-primaryBg text-thirdText rounded-md border border-primaryBg dark:border-thirdBg" onclick={()=>navigate(`/quiz`)}>Play Now</Button>
        </div>
    </div>
  )
}

export default SliderItem