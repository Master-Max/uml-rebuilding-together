'use client'

import Image from "next/image";
import Link from "next/link";
import Modal from "./components/modal";
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter for programmatic navigation
import { useEffect, useState } from "react";


export default function Navbar() {
    const pathname = usePathname(); // Get the current pathname
    const router = useRouter(); // Hook for programmatic navigation

    const SiteLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Events',
            link: '/events'
        },
        {
            title: 'Contact Us',
            link: '/contact'
        },
        {
            title: 'Sponsors',
            link: '/sponsors'
        },
        {
            title: 'Volunteer',
            link: '/volunteer'
        },
        {
            title: 'Media',
            link: '/media'
        }
    ];

    const generateLinkButton = (data) => {
        return (
            <div key={data.link} className={`text-black px-2 mx-2 ${pathname == data.link? 'border-[#89c854]' : 'border-black'}  border-b-2 hover:border-white `}>
                <Link href={data.link}>
                    <h2>{data.title}</h2>
                </Link>
            </div>
        );
    };

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const openBurger = () => setIsBurgerOpen(true);
    const closeBurger = () => setIsBurgerOpen(false);


    const [searchResults, setSearchResults] = useState([])
    const [searchData, setSearchData] = useState({})

    const fetchSearch = async (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target.value)
        let myTerm = e.target.value
        // let myTerm = !!e.target.search.value? e.target.search.value: e.target.value
        console.log('SEARCH: ' + myTerm)
        const searchData = {term: myTerm}

        const response = await fetch('api/search', {
        method: 'POST',
        body: JSON.stringify(searchData),
        headers: {
            'Content-Type': 'application/json'
        }
        });

        const data = await response.json();

        setSearchResults(data.array)
        setSearchData(data)
        
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleSearch = async () => {
        openModal()
    }

    return(
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                 <div className=" pb-2 h-[80vh] w-[80vw] ">
                    <form onChange={fetchSearch} onSubmit={fetchSearch} className="flex justify-center pb-2">
                        <div className="flex items-center gap-2">
                            <button type="submit">
                                <Image 
                                    className=""
                                    src="magnifing-glass.svg"
                                    alt="search icon"
                                    width={50}
                                    height={50}
                                />
                            </button>
                            <input 
                                id='search'
                                type="text"
                                className="border-2 border-black px-1 rounded-md w-[40vw] h-8" //todo make vertically center
                            ></input>
                            <button className="hover:text-green-600 font-bold text-xl">Search</button>
                        </div>
                    </form>
                    <div className="flex justify-center">
                    
                    <div className="">
                        <h3  className="flex justify-center">Results for: {`${!!searchData.term? searchData.term: ''}`}</h3>
                        {searchResults.map((item, index) => {
                            return(
                                <div key={`${index}-SearchResult`} className="">
                                    <Link href={!!item.link? item.link : '/404'} className="rounded flex gap-4 w-full bg-gray-300 px-4 py-2 hover:bg-gray-200">
                                        <h6 className="text-blue-700">{item.link}</h6>
                                        {JSON.stringify(item)}
                                    </Link>
                                    <div className="h-[8px]"></div>
                                </div>)
                            })
                        }
                    </div>
                    
                </div>


                </div> 
                
            </Modal>
            {/* DESKTOP NAVBAR */}
            <div className='nav-bar bg-white w-full sticky top-0 z-[300] shadow-xl hidden md:block'>
                <div className='logo text-white flex justify-center p-2'>
                    <Link href='/'>
                        <Image
                            className=""
                            src="/Logo.png"
                            alt="Rebuiling Together Logo"
                            width={300}
                            height={300}
                        />
                    </Link>                   
                </div>
                {/* <div className="flex justify-center pb-2">
                    <form onSubmit={fetchSearch}>
                        <input 
                            id='search'
                            type="text"
                            className="border-2 border-black px-1 rounded-md" //todo make vertically center
                        ></input>
                    </form>
                </div>  */}
                <div className='links flex justify-center'>
                    {SiteLinks.map((data) => generateLinkButton(data))}
                    {/* SEARCH BUTTON */}
                    <div className={`text-black px-2 mx-2 border-b-2 hover:border-white `}>
                        <button onClick={handleSearch}>
                            <h2>Search</h2>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE NAVBAR */}
            <div className="nav-bar bg-white w-full sticky top-0 z-[300] shadow-log block md:hidden">
                {isBurgerOpen? 
                    // Open Burger
                    <div className="pt-1">
                        <div className="flex justify-between pb-1">
                            <button className="cursor-pointer" onClick={closeBurger}>
                                <Image
                                    className="rotate-90"
                                    src={'/burger-icon.svg'}
                                    alt='menu open button'
                                    width={50}
                                    height={50}
                                />
                            </button>
                            <Image
                                className=""
                                src="/Logo.png"
                                alt="Rebuiling Together Logo"
                                width={150}
                                height={150}
                            />
                            <div id='spacer' className="w-[50px] h-[50px]"></div>                            
                        </div>

                        <div className='links flex-row absolute w-full text-center bg-white shadow-lg pb-2 border-t-4 border-[#89c854]'>
                            {SiteLinks.map((data) => generateLinkButton(data))}
                        </div>
                    </div>
                : 
                    // Closed Burger
                    <div className="pt-1">
                        <div className="flex justify-between pb-1 shadow-lg">
                            <button className="cursor-pointer" onClick={openBurger}>
                                <Image
                                    className=""
                                    src={'/burger-icon.svg'}
                                    alt='menu open button'
                                    width={50}
                                    height={50}
                                />
                            </button>
                            <Image
                                className=""
                                src="/Logo.png"
                                alt="Rebuiling Together Logo"
                                width={150}
                                height={150}
                            />
                            <div id='spacer' className="w-[50px] h-[50px]"></div>
                        </div>
                    </div>
                }

                
            </div>
        </>
    )
}

// Should try this https://dev.to/dalalrohit/sticky-navbar-from-scratch-using-react-37d5
