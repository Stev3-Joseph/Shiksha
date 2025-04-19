const RoadMap = () => {
    return (
        <ol className="items-baseline md:flex">
            <li className="md:w-1/4 w-3/4 flex gap-3 md:flex-col">
                <div className="flex md:flex-row flex-col md:items-center items-center justify-center">
                    <div className="md:m-0 mt-2 text-2xl z-2 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ">
                        1
                    </div>
                    <div className="md:w-full bg-gray-400 md:h-0.5 h-full w-0.5"></div>
                </div>
                <div className="mt-3 md:pe-8 appear-right">
                    <h3 className="text-2xl mb-3 font-semibold ">Register</h3>
                    <p className="text-lg font-normal text-gray-300 ">Go to the Register page and register for the test by filling out some basic details.</p>
                </div>
            </li>
            <li className="md:w-1/4 w-3/4 flex gap-3 md:flex-col">
                <div className="flex md:flex-row flex-col md:items-center items-center justify-center">
                    <div className="md:m-0 mt-2 text-2xl z-2 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ">
                        2
                    </div>
                    <div className="md:w-full bg-gray-400 md:h-0.5 h-full w-0.5"></div>
                </div>
                <div className="mt-3 md:pe-8 appear-right">
                    <h3 className="text-2xl mb-3 font-semibold ">Login</h3>
                    <p className="text-lg font-normal text-gray-300 ">Go to the Login page, now Login with the same credentials that you registered with.</p>
                </div>
            </li>
            <li className="md:w-1/4 w-3/4 flex gap-3 md:flex-col">
                <div className="flex md:flex-row flex-col md:items-center items-center justify-center">
                    <div className="md:m-0 mt-2 text-2xl z-2 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ">
                        3
                    </div>
                    <div className="md:w-full bg-gray-400 md:h-0.5 h-full w-0.5"></div>
                </div>
                <div className="mt-3 md:pe-8 appear-right">
                    <h3 className="text-2xl mb-3 font-semibold ">Test yourself</h3>
                    <p className="text-lg font-normal text-gray-300 ">Give the test that is divided into 4 sections. Try to complete the test within 2 hours.</p>
                </div>
            </li>
            <li className="md:w-1/4 w-3/4 flex gap-3 md:flex-col">
                <div className="flex md:flex-row flex-col md:items-center items-center justify-center">
                    <div className="md:m-0 mt-2 text-2xl z-2 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ">
                        4
                    </div>
                    <div className="md:w-full bg-none md:h-0.5 h-full w-0.5"></div>
                </div>
                <div className="mt-3 md:pe-8 appear-right">
                    <h3 className="text-2xl mb-3 font-semibold ">Wait for the results</h3>
                    <p className="text-lg font-normal text-gray-300 ">Leave the rest on us, you will soon get the results once you give the test.</p>
                </div>
            </li>
        </ol>
    )
};

export default RoadMap;