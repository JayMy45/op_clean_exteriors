import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";
export default function NavBar() {


    return (
        <>
            <div className="flex flex-row justify-end md:justify-between border-b md:border-0 bg-slate-500 bg-opacity-50 md:bg-transparent">
                <div className="hidden md:block w-1/2 md:m-2">
                    <div className="flex justify-left">
                        <Link href="/" className="uppercase">
                            <Image
                                src={`/OpCln.ColorTrans.png`}
                                alt="picture of logo"
                                priority={true}
                                width={200}
                                height={200}
                                className="rounded-xl mx-auto md:m-2 "
                            />
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block w-1/2 h-inherent">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex w-full">
                            <div className="ml-auto pr-10 space-x-5 text-orange-700">
                                <Link href="/" className="uppercase">Home</Link>
                                <Link href="about" className="uppercase">About</Link>
                                <Link href="work" className="uppercase">Work</Link>
                                <Link href="services" className="uppercase">Services</Link>
                                <Link href="contact" className="uppercase">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <Hamburger />
            </div>
        </>
    )
}