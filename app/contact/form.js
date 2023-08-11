export default function ContactForm() {
    return (
        <>
            <form className="w-screen md:w-1/2 bg-blend-lighten h-full p-0 md:p-10">
                <div className="p-2 rounded-md shadow-lg bg-sky-900">
                    <div className="items-center rounded-md md:bg-slate-700 p-2">

                        {/* Name */}
                        <div className="p-1 mb-3 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <input
                                className="text-black p-1 w-full"
                                placeholder="Full Name"
                                type="text"
                            />
                        </div>

                        {/* Phone */}
                        <div className="p-1 mb-3 mb-2 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <input
                                className="text-black p-1 w-full"
                                placeholder="Phone Number"
                                type="tel"
                            />
                        </div>

                        {/* Email */}
                        <div className="p-1 mb-3 border border-slate-400 rounded-md  w-2/3 mx-auto md:w-full">
                            <input
                                className="text-black p-1 w-full"
                                placeholder="Email Address"
                                type="email"
                            />
                        </div>

                        {/* Message */}
                        <div className="p-1 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <textarea
                                id="message"
                                placeholder="Leave a message..."
                                name="message"
                                rows="4"
                                minLength={10}
                                maxLength={500}
                                className="text-black  w-full"
                            />
                        </div>
                    </div>
                    <div className="p-1 flex justify-center">
                        <button className="bg-slate-500 rounded-md p-1 shadow-lg  w-2/3 md:w-full">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}