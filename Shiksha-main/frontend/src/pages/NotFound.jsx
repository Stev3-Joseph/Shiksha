import Header from "../components/Header";
import {Link} from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex justify-center items-center bg-white">
                <div className="bg-white p-8 md:w-1/3 w-full h-fit rounded-3xl flex flex-col justify-center items-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/024/405/934/small_2x/icon-tech-error-404-icon-isolated-png.png" className="max-w-1/2" />
                    <h1 className="text-gray-900 font-bold text-7xl md:text-5xl">Uh-oh!</h1>
                    <p className="text-gray-900 text-center text-xl">We can&apos;t find the page you&apos;re looking for. Please try searching from <Link className="text-blue-700 hover:underline" to="/">home</Link>.</p>
                </div>
            </div>
        </>
    )
}

export default NotFound;