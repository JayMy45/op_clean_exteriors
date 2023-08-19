import Image from "next/image";
import ContactForm from "./form";

export default function ContactPage() {
    return (
        <>
            <div className="h-screen md:h-fit md:px-28">
                <div className="text-center p-10">
                    {/* <div className="container-page text-center"> */}
                    <h1 className="uppercase font-bold text-2xl md:text-4xl">Contact Me</h1>
                </div>

                {/* Form Container */}
                <div className=" md:p-5 flex items-center justify-center">
                    <div className="flex md:rounded-lg shadow-2xl overflow-hidden bg-gray-900 bg-opacity-25">

                        <ContactForm className="flex-grow" />

                        <div className="h-full hidden lg:block">
                            <Image
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1691463621/OpClean/beforeAfter/OpCleanGear_uoam4j.png"
                                width={816}
                                height={816}
                                alt="OpClean Gear"
                            />
                        </div>
                        <div className="flex justify-center items-center my-auto mr-3 rounded-2xl border border-green-600 bg-opacity-70 h-full hidden md:block bg-zinc-600 lg:hidden">
                            <Image
                                src="/OpCln.ColorTrans.png"
                                width={250}
                                height={250}
                                alt="OpClean Gear"
                            />
                            {/* </div> */}

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
