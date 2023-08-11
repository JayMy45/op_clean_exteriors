export default function ContactForm() {
    return (
        <>
            <form className="w-1/2 h-full border p-10">
                <div className="border p-1 bg-sky-800">
                    <div className="items-center border bg-slate-700 p-2">
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
                        <button className="bg-slate-500 rounded-sm p-1 border">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}