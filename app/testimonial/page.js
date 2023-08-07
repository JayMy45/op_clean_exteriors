import Image from "next/image";

export default function TestimonialPage() {

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

                        <div className="flex flex-row  space-x-2 bg-white justify-center items-center h-auto">
                            <div className="flex flex-row  space-x-2 bg-white h-96">
                                <div className="flex flex-col h-96 bg-zinc-400">
                                    <div>
                                        <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                    </div>

                                    {/* Siding Before */}
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingBefore_x9c4mk.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>

                                {/* Siding After */}
                                <div className="flex flex-col h-96 bg-slate-300">
                                    <div>
                                        <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>
                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691371604/OpClean/beforeAfter/SidingAfter_dmwyuh.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding after soft wash"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Siding  Bottom*/}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl">Siding</p>
                        </div>
                    </div>

                    {/* Concrete Card */}
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">

                        <div className="flex flex-row  space-x-2 bg-white justify-center items-center h-auto">

                            {/* Concrete Before */}
                            <div className="flex flex-col h-96  bg-zinc-400">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                </div>
                                <div className="">
                                    <div className="pb-1">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691442785/OpClean/beforeAfter/Before_and_AfterUpper_y8ax7m.jpg"}
                                            width={233}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />

                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691377789/OpClean/beforeAfter/Concrete1Before_noBorder_wphfg5_safylw.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Concrete After */}
                            <div className="flex flex-col h-96  bg-slate-300">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">After</h3>
                                </div>
                                <div>
                                    <div className="pb-1">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691442785/OpClean/beforeAfter/Before_and_AfterUpper_after_zvpmod.jpg"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />

                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <Image
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691377789/OpClean/beforeAfter/Concrete2After_noBorder_o8botb_fm7det.png"}
                                            width={230}
                                            height={230}
                                            alt="picture of house siding before soft wash"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Concrete Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl">Concrete</p>
                        </div>
                    </div>

                    {/* Brick Building Card */}
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">
                        <div className="flex flex-row  space-x-2 bg-white justify-center items-center h-auto">

                            {/* Building Before */}
                            <div className="flex flex-col h-96  bg-zinc-400">
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

                            {/* Building After */}
                            <div className="flex flex-col h-96  bg-slate-300">
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
                            <p className="text-center font-bold text-2xl">Building</p>
                        </div>
                    </div>

                    {/* Building Sidewalk Card */}
                    <div className="shadow-xl w-fit rounded-md overflow-hidden pb-2 mx-auto bg-slate-500">

                        <div className="flex flex-row  space-x-2 bg-white justify-center items-center h-auto">
                            {/* bSidewalk Before */}
                            <div className="flex flex-col h-96  bg-zinc-400">
                                <div>
                                    <h3 className="text-black text-center font-semibold text-xl p-2">Before</h3>
                                </div>
                                <div className="flex-grow flex items-center justify-center">
                                    <Image
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1691438041/OpClean/beforeAfter/SidewalkBefore_rtsuvs.png"}
                                        width={230}
                                        height={230}
                                        alt="picture of house siding before soft wash"
                                    />
                                </div>
                            </div>

                            {/* bSidewalk After */}
                            <div className="flex flex-col h-96  bg-slate-300">
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

                        {/* bSidewalk Bottom */}
                        <div className="p-4 bg-slate-500">
                            <p className="text-center font-bold text-2xl">SideWalks</p>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}