import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  PYTHON_IMG,
  CPP_IMG,
  REACT_IMG,
  JAVASCRIPT_IMG,
} from "../constants/images";
import SliderItem from "./SliderItem";



function HomeSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="px-4 "
    >
      <SliderItem heading={'Python'} desc={'Python Quiz'} img={PYTHON_IMG} />
      <SliderItem heading={'JavaScript'} desc={'JavaScript Quiz'} img={JAVASCRIPT_IMG} />
      <SliderItem heading={'C++'} desc={'C++ Quiz'} img={CPP_IMG} />
      <SliderItem heading={'React'} desc={'React Quiz'} img={REACT_IMG} />      
    </Carousel>
  );
}
export default HomeSlider;