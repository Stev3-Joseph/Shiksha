import Header from '../components/Header';
import Footer from '../components/Footer';
import RegButton from '../components/buttons/RegButton';
import RoadMap from '../components/RoadMap';
const Home = () => {
    return (
        <>
            <Header />
            <div className="h-20 bg-white">
            </div>
            <main id="hero" className='w-full h-fit flex md:flex-row flex-col justify-center items-center p-4 md:p-0'>
                <div className='hero-animation-a mt-10 md:w-3/4 w-full h-96 rounded-md flex justify-between md:flex-row flex-col bg-[url(/hero-image.jpg)] bg-cover bg-center'>
                    <div className='hero-animation-b md:w-2/3 w-full flex justify-center items-center md:p-8 p-4'>
                        <p className='md:text-7xl text-6xl text-white'><span className='line-through text-red-500'>No</span> More <span className='line-through text-red-500'>Empty</span> Classrooms !</p>
                    </div>
                    <div className='bg-black/20 backdrop-invert-75 md:w-1/3 w-full flex flex-col justify-center items-center md:p-5 p-2 rounded-md'>
                        <p className='hero-animation-b text-center md:text-xl text-lg  text-white'>Know your strengths and weaknesses with a single test. Register for the test now and join us in the mission.</p>
                        <div className='hero-animation-b mt-5 w-full flex h-fit justify-center items-center'>
                            <RegButton priText={`Register now`} secText ={`- it's free`} />
                        </div>
                    </div>
                </div>
            </main>
            <div className='w-full py-10 flex justify-center'>
                <div className='md:w-3/4 w-full bg-gray-800 text-white p-4 md:p-6 rounded-md'>
                    <h1 className='text-4xl mb-5'>How does it work?</h1>
                    <RoadMap/>
                </div>
            </div>
            <div className='w-full flex justify-center py-7'>
                <div className='md:w-3/4 w-full h-fit md:gap-8 gap-4 p-4 flex md:flex-row flex-col md:text-lg text-md justify-center items-center bg-gray-100 rounded-md'>
                    <div className='appear-left md:w-1/2 w-full flex justify-center'>
                        <img src="/girl-on-board.jpg" alt="Girl writing on board" className=' w-full rounded-md' />
                    </div>
                    <div className='appear-right md:w-1/2 w-full flex flex-col justify-center gap-4'>
                        <h2 className='md:text-2xl text-xl'><span className='font-bold'>India&apos;s literacy problem, a big concern...</span> What is the solution?</h2>
                        <div className='w-full md:text-lg text-md'>
                            India&apos;s education system, despite its vast reach, continues to grapple with deep-seated inefficiencies and systemic inequities. The COVID-19 pandemic has only exacerbated these challenges, with the digital divide further marginalizing students from low-income families. The pandemic has also underscored the need for a more holistic approach to education, one that goes beyond rote learning and focuses on building critical thinking and problem-solving skills.
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-7'>
                <div className='md:w-3/4 w-full h-fit md:gap-8 gap-4 p-4 flex md:flex-row flex-col-reverse md:text-lg text-md 
                justify-center items-center border-2 border-gray-200 rounded-md'>
                    <div className='appear-left md:w-1/2 w-full flex flex-col justify-center gap-4'>
                        <h2 className='md:text-2xl text-xl'><span className='font-bold'>Our project and the effort that it makes...</span> Is it the ultimate solution?</h2>
                        <div className='w-full md:text-lg text-md'>
                            By leveraging technology and innovative teaching methods, we can create a more personalized and engaging learning experience for students. Our project seeks to disrupt this archaic framework by introducing an IoT-powered, ML-driven assessment system that evaluates students based on a single comprehensive test and recommends a personalized learning trajectory suited to their individual strengths and weaknesses.
                        </div>
                    </div>
                    <div className='appear-right md:w-1/2 w-full flex justify-center'>
                        <img src="/students.jpg" alt="Girl writing on board" className='  w-full rounded-md' />
                    </div>
                </div>
            </div>
            <div className='appear-top mb-7 w-full p-5 h-fit flex flex-col justify-center items-center gap-4'>
                <p className='text-black font-extrabold md:text-4xl text-3xl'>Register for the test now !</p>
                <RegButton priText={`Register`} />
            </div>
            <Footer />
        </>
    )
};

export default Home;