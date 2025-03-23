'use client'

import Image from "next/image";
import Link from "next/link";
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

    return(
        <>
            <div className='nav-bar bg-white w-full sticky top-0 z-[300] shadow-xl hidden md:block'>
                <div className='logo text-white flex justify-center p-2'>
                    {/* <h1>MicroReplay</h1> */}
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
                <div className='links flex justify-center'>
                    {SiteLinks.map((data) => generateLinkButton(data))}
                </div>
            </div>
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
