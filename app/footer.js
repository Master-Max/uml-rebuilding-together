import Image from "next/image"

export default function Footer() {
    return(
        <div className="w-full bg-[#89c854] h-40 shadow-[0_-10px_10px_rgba(0,0,0,0.25)]">
            <div className="grid justify-content-center pt-8">
                <div className="md:flex md:flex-row justify-between flex-col bg-white h-full p-8 ">
                    <div className="md:w-48 w-full md:py-8 py-2 flex justify-center ">
                        <Image
                            className="md:py-0 py-1"
                            src="/Logo.png"
                            alt="Rebuiling Together Logo"
                            width={300}
                            height={100}
                            style={`object-fit: "cover";`}
                        />
                    </div>
                    <div className="text-center md:py-0 py-2">
                        <p>10 Phoenix Row</p>
                        <p>Haverhill, MA, 01832</p>
                        <p>Phone: 978-469-0800</p>
                        <p>Email:  <a href="mailto:rt-haverhill@outlook.com">rt-haverhill@outlook.com</a></p>
                    </div>
                    <div className="flex gap-2 justify-center md:py-0 py-2">
                        <Image
                            className=""
                            src="/icons/Facebook_black.svg"
                            alt="facebook link"
                            width={35}
                            height={35}
                        />  
                        <Image
                            className=""
                            src="/icons/Instagram_black.svg"
                            alt="instagram link"
                            width={35}
                            height={35}
                        />  
                        <Image
                            className=""
                            src="/icons/Messenger_black.svg"
                            alt="messenger link"
                            width={35}
                            height={35}
                        />  
                        <Image
                            className=""
                            src="/icons/Twitter_black.svg"
                            alt="twitter link"
                            width={35}
                            height={35}
                        />                        
                    </div>
                </div>
            </div>

        </div>
    )


}
