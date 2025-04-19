import PropTypes from "prop-types";

const Submit = ({ text, isLoading = false }) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className="bg-linear-to-br/hsl from-blue-700 to-blue-500 
            hover:from-blue-800 hover:to-blue-600
            hover:scale-102 delay-75 text-lg font-semibold 
            text-white p-6 pt-3 pb-3 rounded-md flex gap-2 items-center"
        >
            {isLoading && (
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
            {text}
        </button>
    );
};

Submit.propTypes = {
    text: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
}

export default Submit;