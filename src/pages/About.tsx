
function About(){
  return (
    <div className="bg-primaryBg p-6 min-h-screen flex flex-col items-center gap-5">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-thirdText">About Code Quiz App</h1>
      <p className="sm:text-lg mb-6 text-whiteText sm:w-1/2">
        Welcome to <strong>Code Quiz App</strong>, your go-to platform for enhancing coding skills through fun and interactive quizzes. 
        Whether you're a beginner or an advanced programmer, our app is designed to challenge and improve your knowledge in various programming languages.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-thirdText">Why Code Quiz App?</h2>
      <ul className="list-disc list-inside mb-6 text-whiteText sm:w-1/2 text-left">
        <li>Wide variety of questions covering languages like JavaScript, Python, C++, and HTML.</li>
        <li>Save and review your answers even after refreshing the page.</li>
        <li>Perfect for both beginners and experienced developers.</li>
      </ul>
      <p className="text-lg text-white border border-thirdBg p-2 text-center sm:w-1/2">
        Our mission is to help developers learn and grow through challenges, ensuring you’re always one step ahead in your programming journey.
      </p>
    </div>
  );
};

export default About;
