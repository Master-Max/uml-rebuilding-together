'use client'

import Image from "next/image";
import Navbar from "./navbar";
import Modal from "./components/modal";
import Carousel from "./components/carousel";
import Footer from "./footer";
import { useState } from "react"

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)


  const mediaSources = [{picture: '/media/build_1.jpg'},{picture: '/media/build_2.jpg'},{picture: '/media/build_3.jpeg'},{picture: '/media/build_4.jpg'},{picture: '/media/build_5.jpg'}];

  const generateMediaItems = () => {
    let cards = mediaSources.map((data, i) => {
      return(
        <div key={`media-${i}`} className="flex min-h-[500px]">
          <Image
            className="self-center outline-4 outline-black rounded-md"
            src={data.picture ? `${data.picture}` : `/picPlaceholder.png`}
            alt={`tmp alt ${data.picture}`}
            width={500}
            height={300}
            // fill={true}
            objectFit=""
          />

        </div>
      )
    })
    return cards
  };

  const [contactStatus, setContactStatus] = useState('unsent')

  const handleSubmit = async (e) => {

      e.preventDefault()
      // console.log(e.target)
      setContactStatus('sending')
      
      let contactDetails = {
          name: e.target.fname.value,
          email: e.target.femail.value,
          company: e.target.fcompany.value,
          phone: e.target.fphone.value,
          message: e.target.fmessage.value
      }
  
      console.log(contactDetails)
  
      const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({contactDetails}),
          headers: {
            'Content-Type': 'application/json'
          }
      })

      const result = await response.json()

      if(result.status === 0){
          setContactStatus('sent')
      }else{
          setContactStatus('error')
      }
  
  }

  const generateContactForm = () => {
      return(
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-2 gap-x-2 gap-y-1 mt-4 text-black">
              <label className="font-bold text-lg" htmlFor="fname">Name:</label>
              <input className="focus:outline-[#2dde19] rounded-md border-2 border-black px-2 py-1" type="text" id="fname" name="fname" placeholder="First Last"></input>
              <label className="font-bold text-lg" htmlFor="femail">Email:</label>
              <input className="focus:outline-[#2dde19] rounded-md border-2 border-black px-2 py-1" type="email" id="femail" name="femail" placeholder="email@example.com"></input>
              <label className="font-bold text-lg" htmlFor="fcompany">Company:</label>
              <input className="focus:outline-[#2dde19] rounded-md border-2 border-black px-2 py-1" type="text" id="fcompany" name="fcompany" placeholder="Conpany Name"></input>
              <label className="font-bold text-lg" htmlFor="fphone">Phone:</label>
              <input className="focus:outline-[#2dde19] rounded-md border-2 border-black px-2 py-1" type="text" id="fphone" name="fphone" placeholder="(XXX) XXX-XXXX"></input>
              <label className="col-span-2 font-bold text-lg" htmlFor="fmessage">Message:</label>
              <textarea rows="4" className="p-2 focus:outline-[#2dde19] rounded-md col-span-2 border-2 border-black h-[100px]" id="fmessage" name="fmessage" placeholder="Write your message here..."></textarea>
              <button className="mt-4 col-span-2 rounded-md px-8 py-3 bg-[#89c854] text-black hover:bg-black hover:text-[#89c854] md:text-2xl text-xl font-extrabold" type="submit">Submit</button>
          </form>
      )
  }

  return (
    <>
      <Image
          className="fixed -z-10"
          src={'/smooth_wall.png'}
          alt="background texture"
          width={0}
          height={0}
          sizes="100vw"
          style={{width: '100%', height: 'auto'}}
        />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-black bg-white">
        <div className="min-h-[70vh] bg-white flex items-center justify-center">
        <div className="grid justify-items-center z-80">
            <h2 className="mx-4 lg:text-6xl text-center text-4xl font-bold text-[#89c854] w-full">Contact Us</h2>
            <div className="mx-4 grid justify-items-center w-full min-h-[478px] z-50 relative">
                {(contactStatus === 'unsent')? generateContactForm() : <></>}
                {(contactStatus === 'sending')? 
                    <div className="flex flex-col justify-center text-center items-center">
                        <h3 className="text-3xl font-bold text-[#89c854]">Sending Message...</h3>
                        <Image alt="Loading Icon" className="mt-8 justify-center" src='spinner.svg' height={50} width={50}/>
                    </div>
                : <></>}
                {(contactStatus === 'sent')? 
                    <div className="flex flex-col justify-center text-center items-center">
                        <h3 className="text-3xl font-bold text-[#89c854] mb-[50px]">Message Sent!</h3>
                    </div>
                : <></>}
                {(contactStatus === 'error')? 
                    <div className="flex flex-col justify-center text-center items-center">
                        <h3 className="text-3xl font-bold text-[#89c854]">Oh No!</h3>
                        <p>It looks like there was an error in our message server.</p>
                        <p>Please email us at <a className="font-bold text-[#89c854]" href="mailto:info@email.com">info@email.com</a> so we don't miss your message!</p>
                    </div>
                :<></>}
            </div>
        </div>
      </div>
        </div>
      </Modal>
      <Navbar/>
      <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)]">
      <div className="grid justify-center pt-8">
            <Image 
              className="" 
              src="/images/groupPhoto.png"
              alt="group photo 2019"
              width={500}
              height={500}            
            />
            </div> 

            <div className="px-8 py-16 grid justify-center">
                <h1 className="font-bold text-green-600 text-3xl" >
                    Promoting a better world one house at a time!
                </h1>
            </div>
            <div className="mx-8 grid justify-center">
                <h3 className="font-bold text-2xl">About Us</h3>
                <p className="max-w-2xl">
                    Rebuilding Together Greater Haverhill, Inc. is a local 501(c)(3) tax exempt affiliate of the National Rebuilding Together organization that joins together volunteers and communities to improve the homes and lives of income-challenged homeowners. We work in the communities of Haverhill, Groveland, Georgetown, Boxford, West Newbury, Merrimac, MA and Plaistow, NH. The Haverhill affiliate has been in continuous operation for 28 years!
                </p>
            </div>
            <div className="grid justify-center p-8">
              <Image 
                className="" 
                src="/images/handsCircle.png"
                alt="image of hands in a circle"
                width={400}
                height={400}            
              />
            </div> 
            <div className="mx-8 grid justify-center">
                <h3 className="font-bold text-2xl">Our Mission</h3>
                <p className="max-w-2xl">
                    Our mission is "Repairing homes, Revitalizing communities, Rebuilding lives; as we assure that income-challenged homeowners, particularly older adults, veterans, disabled, or families with children live in warmth, safety, and independence." Our vision is safe homes and communities for everyone!
                </p>
            </div>

            <div className="w-full grid grid-row-1 gap-2 justify-center py-8">
              <button className="bg-[#e2dad1] px-4 py-2 rounded-lg text-black cursor-pointer border-2 hover:border-[#89c854]">
                Donate
              </button>
              <button className="bg-[#e2dad1] px-4 py-2 rounded-lg text-black cursor-pointer border-2 hover:border-[#89c854]" onClick={openModal}>
                Contact Us
              </button>
          </div>
      </div>
      <Footer/>
    </>
  );
}
