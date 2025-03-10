import Image from "next/image"
import Navbar from "../navbar"

export default function Home() {
    return(
        <>
             <Image
                  className="fixed -z-10"
                  src='/smooth_wall.png'
                  alt="background texture"
                  fill
                    objectFit="cover"
                    sizes="100vw"
                />
            <Navbar/>
            <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)]">
                <div className="grid pt-20 place-content-center">
                    <h1 className="text-3xl">Volunteer</h1>
                    <p>Under Construction</p>
                </div>
            </div>
        </>
    )
}
