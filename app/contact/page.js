import Image from "next/image";
import ContactForm from "./form";

export default function ContactPage() {
    return (
        <>
            <div className="text-center">
                <h1>Hello Contact Page</h1>
            </div>
            <div className="h-full p-5 flex items-center justify-center">
                <div className="flex border rounded-xl overflow-hidden bg-gray-600">

                    <ContactForm />

                    <div className="h-full">
                        <Image
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1691463621/OpClean/beforeAfter/OpCleanGear_uoam4j.png"
                            width={812}
                            height={812}
                            alt="OpClean Gear"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
