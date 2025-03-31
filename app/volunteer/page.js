import Image from "next/image"
import Navbar from "../navbar"
import Footer from "../footer"

const ThankYouList = [
    "City of Haverhill, Community Development",
    "George C.Wadleigh Foundation",
    "Griffin-White Foundation",
    "Lowes Home Improvement",
    "Haverhill Elks Lodge #165",
    "Seacoast Coca-Cola Bottling",
    "Hope Worldwide/Boston Church of Christ",
    "Kiwanis Club of Haverhill",
    "Breakfast Exchange Club of Haverhill",
    "Rotary Club of Haverhill",
    "Lions Club of Haverhill",
    "Modern Woodmen",
    "Analog Devices",
    "West Church",
]

export default function Home() {
    return(
        <div className="relative">
            <Navbar/>
            <Image
                className="fixed -z-10"
                src='/smooth_wall.png'
                alt="background texture"
                fill
                style={{objectFit:"cover"}}
                sizes="100vw"
            />
            
            <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)] px-4 lg:px-40 pb-8">
                <div className="grid pt-16 place-content-center bg-white mb-12 pt-8 pb-8 px-2">
                    <h1 className="text-3xl font-bold underline pb-8 text-center ">How You Can Help!</h1>
                    <div className="flex flex-col pb-4 px-4 gap-4">
                        <h4 className="text-xl font-bold">Volunteer:</h4>
                        <p>We need carpenters, electricians, plumbers, and masons to address many issues.  Licensed contractors are needed to provide emergency repairs.  Materials are supplied by Rebuilding Together Greater Haverhill. You provide your knowledge, experience, and time which usually amounts to two to six hours on one day.</p>
                        <p>Unskilled volunteers are needed for cleanups inside homes and out, or to serve on program/governance committees for behind-the-scenes activites. Please encourage friends, family, neighbors, and co-workers to volunteer and make a great day together. Many hands make light work!  A workday is usually 4 to 6 hours, but any amount of time is very appreciated.Please wear work clothes. Youth volunteers are welcome over the age of 14 and must be accompanied by a parent.</p>
                    </div>
                    <hr></hr>
                    <div className="flex flex-col py-4 px-4 gap-4">
                        <h4 className="text-xl font-bold">What a volunteer recieves:</h4>
                        <p>The satisfaction of helping transform the home of a person who otherwise is not physically able or could not afford to make much needed repairs.</p>
                        <p>The camaradarie of the volunteers who you will work with at a home and all the other people who will work on other homes in Greater Haverhill that day.</p>
                        <p>A T-Shirt</p>
                        <p>Free food and drinks</p>
                    </div>
                    <hr></hr>
                    <div className="flex flex-col py-4 px-4 gap-4">
                        <h4 className="text-xl font-bold text-center">Online Volunteer Application</h4>
                        <a className="hover:outline text-[#89c854] border-2 border-black rounded text-center" href="https://fwdev.civicore.com/rthaverhill/index.php?section=volunteerApplication&action=new">Fill out the form here!</a>
                        <h5 className="text-lg font-bold text-center">Your feedback is important to us.</h5>
                        <a className="hover:outline text-[#89c854] border-2 border-black rounded text-center" href="https://fwdev.civicore.com/rthaverhill/index.php?section=volunteerApplication&action=new">Send feedback here!</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
