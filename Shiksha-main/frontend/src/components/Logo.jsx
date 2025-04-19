import {Link} from "react-router-dom";

const Logo = ()=>{
    return (
        <Link to="/" className="text-4xl font-bold h-12 flex justify-center items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-full" />
            <h1>shiksha</h1>
        </Link>
    )
};

export default Logo;