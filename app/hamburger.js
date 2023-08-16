'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai";


export default function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 739 && navbarOpen) {
                setNavbarOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navbarOpen]);

    return (
        <>
            <div className="flex items-center cursor-pointer md:hidden mx-auto my-5 mr-5">
                {/* ICON TO Left working on it */}
                {/* <div className="md:hidden w-1/4 md:m-2">
                    <Image
                        src={`/OpCln.ColorTrans.png`}
                        alt="picture of logo"
                        priority={true}
                        width={300}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto md:m-2 "
                    />
                </div> */}


                <AiOutlineMenu
                    onClick={handleToggle}
                    size={30}
                    className="text-slate-100"
                />
            </div>
            <div className={navbarOpen
                ? "fixed left-0 top-0 w-[75%] h-screen bg-slate-800 p-7 ease-in duration-500"
                : "fixed left-[-100%]  w-[75%] h-screen top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleToggle} className="cursor-pointer text-slate-200">
                        <AiOutlineClose
                            size={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Home
                            </li>
                        </Link>
                        <Link href="about">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                About
                            </li>
                        </Link>
                        <Link href="work">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Work
                            </li>
                        </Link>
                        <Link href="contact">
                            <li
                                onClick={() => setNavbarOpen(false)
                                }
                                className="py-4 cursor-pointer text-slate-200">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row justify-around pt-10 items-center">

                        <AiOutlineInstagram
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineFacebook
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineTwitter
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}