'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <>

            <div className="flex flex-row justify-end md:justify-between dark:bg-slate-700 dark:bg-opacity-30">
                <div className="hidden md:block w-1/4 md:m-2">
                    <Image
                        src="/OpCln.ColorTrans.png"
                        alt="picture of logo"
                        width={200}
                        height={200}
                        className="bg-sky-100 rounded-xl shadow-lg mx-auto md:m-2 "
                    />
                </div>

                <div className="hidden md:block w-2/4 h-inherent border">
                    <div className="flex items-center justify-center w-full h-full border">
                        <div className="flex w-full border">
                            <div className="mx-auto space-x-5">
                                <Link href="/">Home</Link>
                                <Link href="about">About</Link>
                                <Link href="testimonial">Testimonial</Link>
                                <Link href="contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 hidden md:block border">
                    <div></div>
                    <div></div>
                </div>
                <div className="flex items-center cursor-pointer md:hidden mx-auto my-5 mr-5">
                    <AiOutlineMenu
                        onClick={handleToggle}
                        size={30}
                        className=""
                    />
                </div>
            </div>
        </>
    )
}