import Image from "next/image";

export default function TestimonialPage() {

    return (
        <>
            <div className="text-center">
                <div className="text-left">
                    <h1>Work</h1>
                </div>
            </div>
            <div className="h-fit bg-gray-500 p-3 border">
                <div className="text-center p-10 border">
                    <h2>Previous Work</h2>
                </div>
                {/* Before/After Card Container */}
                <section className="flex py-5 border">
                    {/* House B/A Card */}
                    <div className="flex flex-col md:flex-row  md:space-x-14 space-y-5 md:space-y-0 mx-auto">
                        <div className="shadow-xl rounded-xl overflow-hidden pb-2 mx-auto bg-yellow-700 ">
                            <div className="flex flex-row space-x-1 bg-white">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingBefore_x9c4mk.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>

                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingAfter_dmwyuh.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding after soft wash"
                                    />
                                </div>
                            </div>
                            <div className="p-4 bg-yellow-700">
                                <p className="text-center font-bold text-2xl">Siding</p>
                            </div>
                        </div>

                        {/* Concrete B/A Card */}
                        <div className="shadow-xl w-fit rounded-xl overflow-hidden pb-2 bg-yellow-700">
                            <div>
                                <h3></h3>
                            </div>
                            <div className="flex flex-row space-x-1 bg-white">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingBefore_x9c4mk.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>

                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingAfter_dmwyuh.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding after soft wash"
                                    />
                                </div>
                            </div>
                            <div className="p-4 bg-yellow-700">
                                <p className="text-center font-bold text-2xl">Siding</p>
                            </div>
                        </div>

                        {/* Concrete B/A Card */}
                        <div className="shadow-xl w-fit rounded-xl overflow-hidden pb-2 bg-yellow-700">
                            <div>
                                <h3></h3>
                            </div>
                            <div className="flex flex-row space-x-1 bg-white">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingBefore_x9c4mk.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>

                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingAfter_dmwyuh.png"}
                                        width={250}
                                        height={250}
                                        alt="picture of house siding after soft wash"
                                    />
                                </div>
                            </div>
                            <div className="p-4 bg-yellow-700">
                                <p className="text-center font-bold text-2xl">Siding</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}