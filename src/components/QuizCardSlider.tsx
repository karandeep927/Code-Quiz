import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

interface Props{
    children:React.ReactNode
}


function QuizCardSlider({children}:Props) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1, 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, 
        }
      }
  return (
    <Carousel
      className=""
      swipeable={true}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="px-4"
    >
       {children}
      </Carousel>
  )
}

export default QuizCardSlider