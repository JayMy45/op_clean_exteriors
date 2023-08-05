import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";
export default function NavBar() {


    return (
        <>
            <div className="flex flex-row justify-end md:justify-between dark:bg-slate-700 dark:bg-opacity-30">
                <div className="hidden md:block w-1/4 md:m-2">
                    <Image
                        src={`https://res.cloudinary.com/dp04hh5pz/image/upload/v1682265599/OpClean/TransBkGrnd/400PngdpiLogo_bt4qkd.png`}
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
                                <Link href="/" className="uppercase">Home</Link>
                                <Link href="about" className="uppercase">About</Link>
                                <Link href="testimonial" className="uppercase">Testimonial</Link>
                                <Link href="contact" className="uppercase">Services</Link>
                                <Link href="contact" className="uppercase">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 hidden md:block border">
                    <div></div>
                    <div></div>
                </div>
                <Hamburger />
            </div>
        </>
    )
}