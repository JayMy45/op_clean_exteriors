
import Image from "next/image";
import HoustonBrand from "./houston";






export default function Footer() {


    return (
        <>
            <footer className="bg-gray-800 dark:bg-transparent md:mt-5 h-fit pt-3 md:pt-5">
                <div className="flex flex-col md:flex-row h-full items-center">
                    <div className="">
                        <div className="my-auto h-full flex hidden md:block">
                            <div className="flex flex-col items-center h-full ml-10 mt-9">
                                <Image
                                    className="items-center"
                                    src={`/OpCln.ColorTrans.png`}
                                    alt="Picture of Pen"
                                    width={150}
                                    height={100}
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex-row md:pr-14">
                        <div className="flex flex-row justify-around items-center">
                            <div className="md:mt-7 hidden md:block">
                                <h5 className="italic font-bold text-slate-100 ml-12">"Empowering Individuals to Transform"</h5>
                            </div>
                            <div className="flex flex-row md:flex-col justify-evenly text-center p-2 md:mt-7 space-x-2 md:space-x-0">
                                <div>
                                    <div className="text-gray-300 underline text-sm hidden md:block">Social Media</div>
                                </div>
                                <div>
                                    <div className="text-gray-300 text-xs italic">
                                        <a href="">
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-300 text-xs italic">
                                        <a href="">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                                <div>

                                    <div className="text-gray-300 text-xs italic">
                                        <a href="">
                                            ClubHouse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-row md:flex-col justify-evenly text-center p-2  md:border-l md:mt-6 md:mr-20 space-x-2 md:space-x-0">

                            <div className="">
                                <div className="text-gray-300 underline text-sm hidden md:block">Information</div>
                            </div>
                            <div>
                                <div className="text-gray-300 text-xs italic">
                                    <a href="/">
                                        Home
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-300 text-xs italic">
                                    <a href="contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-300 text-xs italic">
                                    <a href="contact">
                                        About
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="flex items-center pb-3 md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs bg-cyan-950 md:bg-transparent rounded-xl text-zinc-300 md:text-slate-400 px-1">JayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <HoustonBrand />
                </div>
            </footer>
        </>
    )

}