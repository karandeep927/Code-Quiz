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
    <div className="rounded-lg overflow-hidden max-w-80 border border-primaryBg dark:border-thirdBg">
    <div className="w-full h-36 sm:h-64">
        <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="bg-thirdBg dark:bg-primaryBg p-2 h-[150px] flex flex-col justify-start">
        <h1 className="text-primaryText dark:text-thirdText font-bold text-xl">
            {heading === 'Cpp'?"C++":heading} - ({tag})
        </h1>
        <p className="text-primaryText dark:text-thirdText content-start flex-1">{desc}</p>
        <Button className="bg-primaryBg text-thirdText border border-primaryBg  dark:border-thirdBg dark:text-thirdText rounded-md mt-3"
        onclick={()=>navigate(`/quiz/${heading}/${tag}`,{state:{name:heading,level:tag}})}
        >
            Play Now
        </Button>
    </div>
</div>
  )
}

export default Card