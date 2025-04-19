import logout from "../../util/logout";

const LoginButton = () => {
    return (
        <button onClick={logout} className="bg-gray-800 hover:bg-black hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit">Log Out</button>
    )
};

export default LoginButton;