'use client'


import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    // loading state for submit button
    const [loading, setLoading] = useState(false);


    // notify functions to display toast messages
    const notifySuccess = () => {
        toast.success('Email sent successfully');
    };

    const notifyError = () => {
        toast.error('Failed to send email');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        };
        console.log(data);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('response worked');

            // reset form
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.phone.value = '';
            event.target.message.value = '';

            // display toast message when email is sent successfully
            notifySuccess();
        }
        if (!response.ok) {
            setLoading(false);
            console.log('Error sending message');

            // display toast message when email fails to send
            notifyError();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="w-screen md:w-1/2 bg-blend-lighten h-full p-0 md:p-10"
            >
                <div className="p-2 rounded-md shadow-lg bg-sky-800">
                    <div className="items-center rounded-md md:bg-slate-700 p-2">

                        {/* Name */}
                        <div className="p-1 mb-3 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <input
                                id='name'
                                className="text-black p-1 w-full"
                                type="text"
                                minLength={2}
                                maxLength={150}
                                placeholder="Full Name"
                                autoComplete="off"
                            />
                        </div>

                        {/* Phone */}
                        <div className="p-1 mb-3 mb-2 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <input
                                id='phone'
                                className="text-black p-1 w-full"
                                type="text"
                                minLength={7}
                                maxLength={15}
                                placeholder="Phone Number"
                            />
                        </div>

                        {/* Email */}
                        <div className="p-1 mb-3 border border-slate-400 rounded-md  w-2/3 mx-auto md:w-full">
                            <input
                                id='email'
                                className="text-black p-1 w-full"
                                required
                                type="email"
                                minLength={5}
                                maxLength={150}
                                autoComplete="off"

                                placeholder="Email Address"
                            />
                        </div>

                        {/* Message */}
                        <div className="p-1 border border-slate-400 rounded-md w-2/3 mx-auto md:w-full">
                            <textarea
                                id="message"
                                className="text-black  w-full"
                                placeholder="Leave a message..."
                                name="message"
                                rows="4"
                                minLength={10}
                                maxLength={500}
                            />
                        </div>
                    </div>
                    <div className="p-1 flex justify-center">
                        <button
                            disabled={loading}
                            className="bg-slate-300 rounded-md py-1 shadow-2xl  hover:bg-slate-500 hover:text-orange-600 hover:text-2xl hover:font-bold w-2/3 md:w-full">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {/* toast container */}
            <div className='z-11'>
                <ToastContainer
                    position='bottom-center'
                    autoClose={2000}
                />
            </div>
        </>
    )
}