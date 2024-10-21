import { useNavigate } from "react-router-dom";
import Button from "./Button"


interface CardProps {
    heading:string;
    desc:string;
    img:string;
    tag:string;
}

function Card({heading,desc,img,tag}:CardProps) {
  const navigate = useNavigate()

  return (
    <div className="rounded-xl overflow-hidden max-w-80  border border-thirdBg p-3">
    <div className="w-full h-36 sm:h-64">
        <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="p-2 h-[150px] flex flex-col justify-start">
        <h1 className="text-primaryText font-bold text-xl">
            {heading === 'Cpp'?"C++":heading} - ({tag})
        </h1>
        <p className="text-thirdBg content-start flex-1">{desc}</p>
        <Button className="font-bold text-secondText border border-secondBg rounded-md mt-3 hover:text-white hover:bg-secondText"
        onclick={()=>navigate(`/quiz/${heading}/${tag}`,{state:{name:heading,level:tag}})}
        >
            Play Now
        </Button>
    </div>
</div>
  )
}

export default Card