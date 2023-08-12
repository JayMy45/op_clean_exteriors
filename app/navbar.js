import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";
export default function NavBar() {


    return (
        <>
            <div className="flex flex-row justify-end md:justify-between border-b md:border-0  ">
                <div className="hidden md:block w-1/4 md:m-2">
                    <Image
                        src={`/OpCln.ColorTrans.png`}
                        alt="picture of logo"
                        priority={true}
                        width={200}
                        height={200}
                        className="bg-sky-100 bg-opacity-90 rounded-xl shadow-lg mx-auto md:m-2 "
                    />
                </div>

                <div className="hidden md:block w-2/4 h-inherent">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex w-full">
                            <div className="mx-auto space-x-5">
                                <Link href="/" className="uppercase">Home</Link>
                                <Link href="about" className="uppercase">About</Link>
                                <Link href="work" className="uppercase">Work</Link>
                                <Link href="services" className="uppercase">Services</Link>
                                <Link href="contact" className="uppercase">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 hidden md:block">
                    <div></div>
                    <div></div>
                </div>
                <Hamburger />
            </div>
        </>
    )
}