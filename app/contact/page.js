import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <div className="text-center">
                <h1>Hello Contact Page</h1>
            </div>
            <div className="h-full p-5 border flex items-center justify-center">
                <div className="flex border-2 rounded-xl overflow-hidden">
                    <form className="w-1/2 h-full border p-10">
                        <div className="border p-1">
                            <div className="items-center border p-2">
                                <label className="text-left">Name</label>
                                <div className="p-2 border">
                                    <input className="text-black p-1 w-full" />
                                </div>
                                <label className="text-left">Email</label>
                                <div className="p-2 border">
                                    <input className="text-black p-1 w-full" />
                                </div>
                                <label className="text-left">Message</label>
                                <div className="p-2 border">
                                    <textarea className="text-black p-1 w-full" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="h-full">
                        <Image
                            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1691463621/OpClean/beforeAfter/OpCleanGear_uoam4j.png"
                            width={610}
                            height={610}
                            alt="OpClean Gear"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
