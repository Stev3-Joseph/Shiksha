import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const RegButton = ({priText, secText})=>{
    return <Link
        to="/register"
        className='text-center bg-linear-to-br/hsl from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 hover:scale-102 delay-75 ease-in text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit'
    >{priText}<span className='font-light'>{secText}</span></Link>
};

RegButton.propTypes = {
    priText: PropTypes.string,
    secText: PropTypes.string,
};

export default RegButton;