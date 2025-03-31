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
                    <h1 className="text-3xl font-bold underline pb-8 text-center ">Sponsors</h1>
                    <div className="pb-4">
                        <h2 className="text-2xl font-medium pb-4 grid text-center">Thank you to the following contributors:</h2>
                        <div className="grid md:grid-cols-2 gap-2 text-center">
                            {ThankYouList.map((name, index) => {
                                return(<p key={`${index}-sponsor`}>{name}</p>)
                            })}
                        </div>
                    </div>
                    <hr></hr>
                    <Image 
                        className="grid justify-self-center py-8 "
                        src="/BreakfastExchange.jpeg"
                        alt="Breakfast Exchange"
                        width={500}
                        height={300}
                    />
                    <hr></hr>
                    <div className="pt-8 grid gap-2 md:px-16 px-2">
                        <p>We deeply appreciate all the support from the hundreds of generous people that have contributed time, talents, and funds to enable us to do what we have done for the past 27 years.</p>
                        <p>We are so grateful for the ongoing support and commitment of the community.</p>
                        <p>All contributions are gratefully accepted and will help with the purchase of materials needed for repairs.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
