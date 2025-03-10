'use client'

import Image from "next/image";
import Navbar from "../navbar";
import Modal from "../components/modal";
import Carousel from "../components/carousel";
import { useState } from "react"

export default function Media() {
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
            Test
          </div>
        </Modal>
        <Navbar/>
        <div className="bg-transparent text-black w-full min-h-[calc(100vh-140px)]">
          <div className="flex justify-center">
            <Carousel items={generateMediaItems()} itemsToShow={1}/>
          </div>
          <div className="w-full grid grid-row-1 gap-2 justify-center">
            <button className="bg-[#e2dad1] px-4 py-2 rounded-lg text-black cursor-pointer border-2 hover:border-[#89c854]">
              Donate
            </button>
            <button className="bg-[#e2dad1] px-4 py-2 rounded-lg text-black cursor-pointer border-2 hover:border-[#89c854]" onClick={openModal}>
              Contact Us
            </button>
          </div>
        </div>
      </>
    );


}