export default function ContactForm() {
    return (
        <>
            <form className="w-1/2 h-full p-10">
                <div className="p-2 rounded-md shadow-lg bg-sky-900">
                    <div className="items-center rounded-md bg-slate-700 p-2">
                        <label className="text-left">Name</label>
                        <div className="p-1 mb-2 border">
                            <input className="text-black p-1 w-full" />
                        </div>
                        <label className="text-left">Email</label>
                        <div className="p-1 mb-2 border">
                            <input className="text-black p-1 w-full" />
                        </div>
                        <label className="text-left">Message</label>
                        <div className="p-1 mb-2 border">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                minLength={10}
                                maxLength={500}
                                className="text-black p-1 w-full"
                            />
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="bg-slate-500 rounded-md p-1 shadow-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}