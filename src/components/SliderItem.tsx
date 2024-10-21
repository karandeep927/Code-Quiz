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
    <div className="rounded-lg overflow-hidden border">
        <div className="w-full h-36 sm:h-64">
            <img src={img} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="bg-secondBg  p-3 relative">
            <h1 className="text-white font-bold text-xl">{heading}</h1>
            <p className="text-white ">{desc}</p>
            <Button className="absolute top-5 right-2 bg-white text-secondText rounded-lg border border-secondBg hover:bg-secondText hover:border-white hover:text-white" onclick={()=>navigate(`/quiz`)}>Play Now</Button>
        </div>
    </div>
  )
}

export default SliderItem