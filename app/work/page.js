import Image from "next/image";

export default function WorkPage() {

    return (
        <>
            {/* Main div */}
            <div className="h-fit px-2 md:px-28">
                <div className="text-center p-10">
                    <h2 className="text-4xl font-bold uppercase">Previous Work</h2>
                </div>
                {/* Before and After Card Container */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-5">

                    {/* Siding1 Card */}
                    <div className="shadow-2xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100 justify-center items-center h-auto shadow-md">

                            <div className="flex flex-row space-x-2 bg-gray-100 h-96">
                                <div className="flex flex-col h-96">
                                    {/* Siding1 Before */}
                                    <div className="flex flex-grow">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333748/OpClean/beforeAfter/Before-After/Siding.BA2_xpzmlt.png"}
                                            width={500}
                                            height={400}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Siding2 Bottom*/}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Siding</p>
                        </div>
                    </div>

                    {/* Siding2 Card */}
                    <div className="shadow-2xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">
                            <div className="flex flex-col h-96 bg-gray-100 ">

                                <div className="flex flex-grow">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333748/OpClean/beforeAfter/Before-After/Siding.BA4_tv7ipw.png"}
                                        width={500}
                                        height={400}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Siding2 Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Siding</p>
                        </div>
                    </div>

                    {/* Concrete Card */}
                    <div className="shadow-2xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row  space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            {/* Concrete Before */}
                            <div className="flex flex-col h-96  bg-gray-100 ">
                                <div className="flex flex-grow">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333634/OpClean/beforeAfter/Before-After/Concrete.BA4_swxmfk.png"}
                                        width={500}
                                        height={400}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Concrete Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Concrete</p>
                        </div>
                    </div>

                    {/* Brick Building Card */}
                    <div className="shadow-2xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            {/* Building Before */}
                            <div className="flex flex-col h-96  bg-gray-100 ">
                                <div className="flex flex-grow">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333748/OpClean/beforeAfter/Before-After/Building.BA2_gd41bd.png"}
                                        width={500}
                                        height={400}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Brick Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Brick Buildings</p>
                        </div>
                    </div>



                    {/* Sidewalk Card */}
                    <div className="shadow-2xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">
                            <div className="flex flex-col h-96 bg-gray-100 ">

                                {/* Sidewalk Before */}
                                <div className="flex flex-grow">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333748/OpClean/beforeAfter/Before-After/Sidewalk.BA2_rf62ow.png"}
                                        width={500}
                                        height={400}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sidewalk Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Sidewalks</p>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}