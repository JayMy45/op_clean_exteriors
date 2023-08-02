import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="w-1/4 ">
                    <Image
                        src="/OpCln.ColorTrans.png"
                        width={200}
                        height={200}
                        className="bg-sky-100 rounded-xl shadow-lg mx-auto my-2"
                    />
                </div>
                <div className="flex justify-evenly items-center w-2/4">
                    <Link href="/">Home</Link>
                    <Link href="about">About</Link>
                    <Link href="testimonial">Testimonial</Link>
                    <Link href="contact">Contact</Link>
                </div>
                <div className="w-1/4">
                    <div></div>
                    <div></div>
                </div>

            </div>
        </>
    )
}