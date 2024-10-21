import Card from "../components/Card";
import HomeSlider from "../components/HomeSlider";
import QuizCardSlider from "../components/QuizCardSlider";
import {
  PYTHON_IMG,
  CPP_IMG,
  REACT_IMG,
  JAVASCRIPT_IMG,
  HTML_IMG,
} from "../constants/images";



function Home() {
  return (
    <div className="min-h-screen">
      <div className="h-[400px] w-full pt-4 -mb-36 sm:mb-1">
        <HomeSlider />
      </div>
      <h1 className="text-primaryText m-5 -mt-6 text-2xl font-bold">
        Top Picks
      </h1>
      <div className="">
        <QuizCardSlider>
          <Card
            heading="Python"
            desc="Play and Test you Knowledge"
            img={PYTHON_IMG}
            tag="Basic-I"
          />
          <Card
            heading="JavaScript"
            desc="Play and Test you Knowledge"
            img={JAVASCRIPT_IMG}
            tag="Basic-II"
          />
          <Card
            heading="React"
            desc="Play and Test you Knowledge"
            img={REACT_IMG}
            tag="Intermediate-III"
          />
          <Card
            heading="Cpp"
            desc="Play and Test you Knowledge"
            img={CPP_IMG}
            tag="Intermediate-II"
          />
          <Card
            heading="HTML"
            desc="Play and Test you Knowledge"
            img={HTML_IMG}
            tag="Basic-II"
          />
        </QuizCardSlider>
      </div>
      <h1 className="text-primaryText m-5 text-2xl font-bold">
        Basic
      </h1>
      <div className="mb-7">
        <QuizCardSlider>
          <Card
            heading="React"
            desc="Play and Test you Knowledge"
            img={REACT_IMG}
            tag="Basic-III"
          />
            <Card
              heading="HTML"
              desc="Play and Test you Knowledge"
              img={HTML_IMG}
              tag="Basic-II"
            />
          <Card
            heading="Cpp"
            desc="Play and Test you Knowledge"
            img={CPP_IMG}
            tag="Basic-II"
          />
          <Card
            heading="JavaScript"
            desc="Play and Test you Knowledge"
            img={JAVASCRIPT_IMG}
            tag="Basic-II"
          />
          <Card
            heading="Python"
            desc="Play and Test you Knowledge"
            img={PYTHON_IMG}
            tag="Basic-I"
          />
        </QuizCardSlider>
      </div>
      <h1 className="text-primaryText m-5 text-2xl font-bold">
        Hard
      </h1>
      <div className="mb-7">
        <QuizCardSlider>
          <Card
            heading="Python"
            desc="Play and Test you Knowledge"
            img={PYTHON_IMG}
            tag="Advanced-I"
          />
            <Card
              heading="React"
              desc="Play and Test you Knowledge"
              img={REACT_IMG}
              tag="Advanced-III"
            />
          <Card
            heading="JavaScript"
            desc="Play and Test you Knowledge"
            img={JAVASCRIPT_IMG}
            tag="Advanced-II"
          />
          <Card
            heading="HTML"
            desc="Play and Test you Knowledge"
            img={HTML_IMG}
            tag="Advanced-II"
          />
          <Card
            heading="Cpp"
            desc="Play and Test you Knowledge"
            img={CPP_IMG}
            tag="Advanced-II"
          />
        </QuizCardSlider>
      </div>
    </div>
  );
}

export default Home;
