
import Image from "next/image";
import HoustonBrand from "./houston";

export default function Footer() {

    const currentYear = new Date().getFullYear(); // Get the current year



    return (
        <>
            <footer className="bg-gray-800 dark:bg-transparent h-fit pt-3">
                <div className="flex flex-col md:flex-row h-full items-center">
                    <div className="">
                        <div className="my-auto h-full flex hidden md:block">
                            <div className="flex flex-col items-center h-full ml-10 mt-9">
                                <Image
                                    className="items-center"
                                    src={`/LOGO.png`}
                                    alt="Picture of Pen"
                                    width={100}
                                    height={100}
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex-row md:pr-14">
                        <div className="flex flex-row justify-around items-center">
                            <div className="md:mt-7 hidden md:block">
                                <h5 className="italic font-bold text-yellow-800 ml-12">"Transforming surfaces"</h5>
                            </div>
                            <div className="flex flex-row md:flex-col justify-evenly text-center text-slate-700 p-2 md:mt-7 space-x-2 md:space-x-0">
                                <div>
                                    <div className="text-slate-700 underline text-sm hidden md:block">Social Media</div>
                                </div>
                                <div>
                                    <div className="text-slate-700 text-xs italic">
                                        <a href="">
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-700 text-xs italic">
                                        <a href="">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-row md:flex-col justify-evenly text-center p-2  md:border-l md:mt-6 md:mr-20 space-x-2 md:space-x-0">

                            <div className="">
                                <div className="text-slate-700 underline text-sm hidden md:block">Information</div>
                            </div>
                            <div>
                                <div className="text-slate-700 text-xs italic">
                                    <a href="/">
                                        Home
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="text-slate-700 text-xs italic">
                                    <a href="work">
                                        Work
                                    </a>
                                </div>
                            </div>
                            <div>
                                {/* <div className="text-slate-700 text-xs italic">
                                    <a href="about">
                                        About
                                    </a>
                                </div> */}
                            </div>
                            <div>
                                <div className="text-slate-700 text-xs italic">
                                    <a href="contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="flex items-center pb-3 md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs bg-cyan-950 md:bg-transparent rounded-xl text-zinc-300 md:text-zinc-800 px-2">&copy; {currentYear} JayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <HoustonBrand />
                </div>
            </footer>
        </>
    )

}