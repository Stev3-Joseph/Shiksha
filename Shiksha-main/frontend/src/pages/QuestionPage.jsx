import { useParams } from "react-router-dom";
import Question from "../components/Question";
import TestNav from "../components/TestNav";
import { useEffect, useState } from "react";
import checkSession from "../util/session";
import logout from "../util/logout";
import questions from "../data/questions"; // Import to check valid question numbers

const QuestionPage = () => {
  const { sectionName, qNumber } = useParams();
  const [questionNumber, setQuestionNumber] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    async function check() {
      const curr = localStorage.getItem("currentSection");
      if (!curr || curr !== sectionName) {
        window.location.href = "/test";
      }

      // Check session and section
      const session = await checkSession();
      if (!session) {
        alert("Session expired. Please login again.");
        await logout();
      }
    }

    const parsedQNumber = parseInt(qNumber);
    const sectionOffset = (sectionName.charCodeAt(0) - 65) * 10; // A = 0, B = 10, etc.
    const computedQuestionNumber = sectionOffset + parsedQNumber;

    // Ensure the question number is within range
    if (
      parsedQNumber < 1 ||
      parsedQNumber > 10 ||
      sectionName > "D" ||
      computedQuestionNumber > questions.length
    ) {
      window.location.href = "/notfound";
      return;
    }

    setQuestionNumber(computedQuestionNumber);
    check();
  }, [qNumber, sectionName]);

  async function exitTest() {
    // Prompt is user actually wants to exit test
    if (window.confirm("Are you sure you want to exit the test?")) {
      setIsLoggingOut(true);
      try{
        await logout();
      }catch(err){
        console.log(err);
      }finally{
        setIsLoggingOut(false);
      }
    }
  }


  return (
    <div className="bg-gray-100 h-fit flex flex-col">
      <div className="h-20 w-full bg-white flex items-center justify-between md:px-10 px-4 border-gray-200 border-b">
        <div className="text-4xl font-bold h-12 flex justify-center items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-full" />
          <h1>shiksha</h1>
        </div>
        <button
          onClick={() =>exitTest()}
          className='flex justify-center items-center gap-2 bg-red-500 hover:bg-red-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit'
        >
          {isLoggingOut && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          Exit Test
        </button>
      </div>
      <div className="w-full h-fit flex md:flex-row flex-col-reverse">
        <div className="md:w-1/3 w-full min-w-xs md:h-screen h-fit">
          <TestNav />
        </div>
        <div className="md:w-2/3 w-full md:h-full max-h-100 text-gray-900 md:p-4 p-2 overflow-y-scroll">
          {questionNumber !== null && <Question qnumber={questionNumber} />}
        </div> 
      </div>
    </div>
  );
};

export default QuestionPage;
