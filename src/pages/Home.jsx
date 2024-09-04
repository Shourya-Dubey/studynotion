import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/Common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore"


function Home(){
    return (
        <div>
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center
            justify-between gap-8 text-white max-w-maxContent mt-7">

                <Link to={"/signup"}>

                    <div className="group mt-16 p-2 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </div>

                </Link>
            
                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"}/>
                </div>

                <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                    Become an Instructor Empower Your Future with Coding Skills With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[80%] flex justify-center">
                    <video className="shadow-[20px_20px_rgba(255,255,255)]"
                    muted
                    loop
                    autoPlay>
                        <source src={Banner} type="video/mp4"/>
                    </video>
                </div>

                {/*Code Section 1*/}
               <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                    <div className="text-4xl font-semibold">
                        Unlock your
                        <HighlightText text={"coding potential"} /> with our online courses.
                    </div>
                    }
                    subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={{
                    btnText: "Try it Yourself",
                    link: "/signup",
                    active: true,
                    }}
                    ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                    }}
                    codeColor={"text-yellow-25"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                />
                </div>

                {/*Code Section 2*/}
               <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                    <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                        Start
                        <HighlightText text={"coding in seconds"} />
                    </div>
                    }
                    subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={{
                    btnText: "Continue Lesson",
                    link: "/signup",
                    active: true,
                    }}
                    ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                    }}
                    codeColor={"text-white"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}

                />
               </div>

               <ExploreMore/>

            </div>

            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[310px]">

                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                    <div className="h-[150px]"></div>
                     <div className="flex flex-row gap-7 text-white">
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex gap-3 items-center">
                               Explore Full Catalog 
                               <FaArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                     </div>
                    </div>

                </div>

                <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7">

                    <div className="flex flex-row gap-5 mb-10 mt-[95px]">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a 
                            <HighlightText text={"job that is in demand"}/>
                        </div>

                        <div className="flex flex-col gap-10 lg:w-[40%] items-start">
                            <div className="text-[16px]">
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                Learn more
                            </CTAButton>
                        </div>

                    </div>

                  <TimelineSection/>

                  <LearningLanguageSection/>

                </div>


            </div>

            {/* Section 3 */}
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter:bg-richblack-900 text-white">
                
                <InstructorSection/>

                <h2 className="text-center text-4xl font-semibold mt-10">Review from Other Learners</h2>

                {/*Review slider here*/}

            </div>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home;