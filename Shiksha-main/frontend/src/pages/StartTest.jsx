import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../components/Logo";
const StartTest = ()=> {
    function startQuiz() {
        const sectionName = localStorage.getItem("currentSection");
        window.location.href = `/test/section/${sectionName}`;
    }
    useEffect(()=>{
        localStorage.removeItem("answers");
    },[]);

    return (
    <div className="w-full min-h-screen bg-gray-100 px-4 h-fit text-gray-900 flex flex-col justify-center items-center">
        <div className="mb-8 ">
            <Logo/>
        </div>
        <div id="instructions" className="bg-white p-4 rounded-lg shadow-lg text-center md:w-1/2 w-full h-fit">
            <div className="w-full p-3">
                <h2 className="text-4xl text-red-500">Instructions:</h2>
            </div>
            <div className="w-full p-4 ">
                <ol className="text-left text-xl p-3 list-disc list-inside">
                    <li>The test consists of 40 questions, divided into 4 sections, with 10 questions per section.</li>
                    <li>There is no individual time limit per question, but the session will expire automatically after 2 hours. Ensure you complete the test within this timeframe.</li>
                    <li>It is advised to spend a maximum of 3 minutes per question to complete all sections on time.</li>
                    <li>Do not switch tabs or exit the test window, as this may result in auto-submission.</li>
                    <li>Ensure a stable internet connection and a quiet environment to avoid disruptions.</li>
                </ol>
            </div>
            <div className="w-full flex justify-evenly items-center p-4">
                    <Link to={"/"} className="bg-gray-800 hover:bg-black hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit">Go Back</Link>
                    <button onClick={()=> startQuiz()} className="bg-linear-to-br/hsl from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit">Start Test</button>
            </div>
        </div>
    </div>);
};
export default StartTest;