import Image from "next/image"
import Navbar from "../navbar"

import Calendar from "../components/calendar"

export default function Home() {
    return(
        <>
            <Image
                className="fixed -z-10"
                src='/smooth_wall.png'
                alt="background texture"
                fill
                style={{objectFit:"cover"}}
                sizes="100vw"
            />
            <Navbar/>
            <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)] px-4 lg:px-24 pt-8">
                <div className="bg-white">
                    <Calendar/>
                </div>
            </div>
        </>
    )
}
