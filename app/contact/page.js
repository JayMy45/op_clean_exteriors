import Image from "next/image";
import ContactForm from "./form";

export default function ContactPage() {
    return (
        <>
            <div className="text-center mt-4">
                <h1 className="uppercase font-bold text-2xl md:text-4xl">Contact Me</h1>
            </div>

            {/* Form Container */}
            <div className="h-full md:p-5 flex items-center justify-center mt-5">
                <div className="block md:flex md:rounded-xl overflow-hidden bg-gray-600">

                    <ContactForm className="flex-grow" />

                    <div className="h-full hidden md:block">
                        <Image
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1691463621/OpClean/beforeAfter/OpCleanGear_uoam4j.png"
                            width={816}
                            height={816}
                            alt="OpClean Gear"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
