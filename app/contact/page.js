import Image from "next/image";
import ContactForm from "./form";

export default function ContactPage() {
    return (
        <>
            <div className="text-center mt-5">
                <h1 className="uppercase font-bold text-2xl md:text-4xl">Contact Me</h1>
            </div>

            {/* Form Container */}
            <div className="h-full md:p-5 flex items-center justify-center mt-5">
                <div className="flex md:rounded-xl overflow-hidden bg-gray-600">

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
                            width={500}
                            height={500}
                            alt="OpClean Gear"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
