import Image from "next/image";

export default function WorkPage() {

    return (
        <>
            <div className="text-center">
                <div className="text-left">
                    <h1>Work</h1>
                </div>
            </div>

            {/* Main div */}
            <div className="h-fit px-2 md:px-28 border">
                <div className="text-center p-10 border">
                    <h2>Previous Work</h2>
                </div>
                {/* Before and After Card Container */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-5 border">

                    {/* Siding Card */}
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            <div className="flex flex-row space-x-2 bg-gray-100 h-96">
                                <div className="flex flex-col h-96">
                                    {/* Siding Before */}
                                    <div className="flex flex-grow">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333748/OpClean/beforeAfter/Before-After/Siding.BA2_xpzmlt.png"}
                                            width={500}
                                            height={500}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Siding  Bottom*/}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl text-gray-100">Siding</p>
                        </div>
                    </div>

                    {/* Concrete Card */}
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row  space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            {/* Concrete Before */}
                            <div className="flex flex-col h-96  bg-gray-100 ">
                                <div className="flex flex-grow">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692333634/OpClean/beforeAfter/Before-After/Concrete.BA4_swxmfk.png"}
                                        width={500}
                                        height={500}
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
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            {/* Building Before */}
                            <div className="flex flex-col h-96  bg-gray-100 ">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                </div>
                                <div className="flex-grow flex items-center justify-center">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691435405/OpClean/beforeAfter/buildingBefore_nbye8o.png"}
                                        width={230}
                                        height={230}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>

                            {/* Brick Building After */}
                            <div className="flex flex-col h-96  bg-gray-100 ">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>
                                </div>
                                <div className="flex-grow flex items-center justify-center">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691435405/OpClean/beforeAfter/buildingAfter_wppv3n.png"}
                                        width={230}
                                        height={230}
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
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row space-x-2 bg-gray-100  justify-center items-center h-auto shadow-md">

                            <div className="flex flex-row space-x-2 bg-gray-100  h-96">
                                <div className="flex flex-col h-96 bg-gray-100 ">
                                    <div>
                                        <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                    </div>

                                    {/* Sidewalk Before */}
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691438041/OpClean/beforeAfter/SidewalkBefore_rtsuvs.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>

                                {/* Sidewalk After */}
                                <div className="flex flex-col h-96 bg-gray-100 ">
                                    <div>
                                        <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>
                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691438046/OpClean/beforeAfter/SidewalkAfter_ndubyx.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
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