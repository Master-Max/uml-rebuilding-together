import Image from "next/image"
import Navbar from "../navbar"
import Footer from "../footer"

export default function About() {
    return(
        <div className="relative">
            <Navbar/>
            <Image
                className="fixed -z-10"
                src={'/smooth_wall.png'}
                alt="background texture"
                fill
                style={{objectFit:"cover"}}
                sizes="100vw"
            />
            <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)] px-4 lg:px-40 pb-8">
                <div className="grid place-content-center bg-white mb-12 pt-8 pb-8 px-2">
                    <h1 className="text-3xl font-bold underline pb-8 text-center lg:text-left">About Us</h1>
                    <div className="max-w-[700px] pb-8">
                        <div className="pb-8">
                            <h2 className="text-2xl font-bold w-full pb-4 text-center">What We Do</h2>
                            <div className="pl-4">
                                <h3 className="text-xl font-bold py-2">Program</h3>
                                <p>
                                    National Rebuilding Together Day is always held on the last Saturday in April nationwide.  Skilled and unskilled volunteers perform home repairs, accessibility, modifications, and energy conservation services for income-challenged  homeowners in Haverhill, Groveland, Georgetown, Merrimac, West Newbury, Boxford, MA and Plaistow, NH.
                                </p>
                            </div>
                            <div className="pl-4">
                                <h3 className="text-xl font-bold py-2">Emergency Home Repairs</h3>
                                <p>
                                    Throughout the year, critical home repairs or accessibility modifications are completed for income-challenged homeowners such as installing grab bars, handrails, or wheelchair ramps.
                                </p>
                            </div>
                            <div className="pl-4">
                                <h3 className="text-xl font-bold py-2">Veterans</h3>
                                <p>
                                    Rebuilding Together Veterans Housing Initiative was created to meet the growing needs of veterans in our communities.  The initiative serves to fill the gaps in housing modifications and repair services that active and retired service men and women struggle to meet, often providing  handicapped modifications for veterans wounded in service to our country. 
                                </p>
                            </div>
                            <div className="pl-4">
                                <h3 className="text-xl font-bold py-2">Special Events</h3>
                                <p>
                                    Corporate sponsors are welcomed to create an opportunity to bring their employees for a unique team-building experience while making a difference in the life of income-challenged homeowners.  Projects are selected to match the skill set of the volunteer team and supplemented with skilled tradespersons as required. 
                                </p>
                            </div>

                        </div>
                        <hr></hr>
                        <div className="pb-8">
                            <h2 className="text-2xl font-bold w-full text-center py-4 lg:py-8">Who We Are</h2>
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:place-items-center gap-8">
                                <div className="pl-4">
                                    <h3 className="text-xl font-bold pb-2">Our Board and Staff</h3>
                                    <p>Michael McGonagle, President</p>
                                    <p>Sarah Cummings, Treasurer</p>
                                    <p>Michelle Schena, Secretary</p>
                                    <p>Palema Perron</p>
                                    <p>Debora Ware</p>
                                    <p>Timothy Riley</p>
                                    <p>Stephen Herman</p>
                                </div>
                                <div className="pl-4">
                                    <h3 className="text-xl font-bold pb-2">Advisory Board</h3>
                                    <p>Amy Anwyl</p>
                                    <p>Timothy Barnes</p>
                                    <p>Peter Carbone</p>
                                    <p>BJ Cunningham</p>
                                    <p>Bob DesMarais</p>
                                    <p>Jean McCann</p>
                                    <p>John McCarthy</p>
                                    <p>Gary Urso</p>
                                    <p>George Valvanis</p>
                                </div>
                                <div className="pl-4 lg:col-span-2 ">
                                    <h3 className="text-xl font-bold pb-2">Program Director</h3>
                                    <p>Maureen McGonagle</p>
                                </div>
                            </div>

                        </div>


                    </div>
                        
                </div>
            </div>
            <Footer/>
        </div>
    )
}
