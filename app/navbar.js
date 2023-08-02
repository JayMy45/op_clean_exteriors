import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="w-1/4 ">
                    <Image
                        src="/OpClean.Transparent.png"
                        width={200}
                        height={200}
                        className="bg-sky-200 rounded-lg mx-auto my-2"
                    />
                </div>
                <div className="flex justify-evenly items-center w-2/4">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Testimonial</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className="w-1/4">
                    <div></div>
                    <div></div>
                </div>

            </div>
        </>
    )
}