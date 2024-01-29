"use client";

import Button from "@/components/library/buttons/root_button/RootButton";
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    

    return (
        <form
            method="POST"
            action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
            className="flex p-5 md:p-10 space-y-5 flex-col  w-full"
        >
            <div className="md:flex justify-between gap-10">
                <div className="md:w-1/2 md:space-y-5">
                    <div className="flex flex-col">
                        <label
                            for="name"
                            className="font-semibold text-primary text-xl"
                        >
                            Name:
                        </label>
                        <input
                            className="bg-white rounded-lg p-2"
                            type="text"
                            placeholder="Name"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            for="name"
                            className="font-semibold text-primary text-xl"
                        >
                            Phone:
                        </label>
                        <input
                            className="bg-white rounded-lg p-2"
                            type="number"
                            placeholder="01 xx xxxx xxx"
                            name="name"
                            id="name"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 md:space-y-5">
                    <div className="flex flex-col">
                        <label
                            for="email"
                            className="font-semibold text-primary text-xl"
                        >
                            Email:
                        </label>
                        <input
                            className="p-2 bg-white rounded-lg"
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            id="email"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            for="name"
                            className="font-semibold text-primary text-xl"
                        >
                            Company:
                        </label>
                        <input
                            className="bg-white rounded-lg p-2"
                            type="text"
                            placeholder="Microsoft"
                            name="name"
                            id="name"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <label for="message" className="font-semibold text-primary text-xl">
                    Leave us a message:
                </label>
                <textarea
                    className="bg-white w-full rounded-lg p-2"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    id="message"
                ></textarea>
            </div>

            <div>
                <Button>Send Message</Button>
            </div>
        </form>
    );
};

export default ContactForm;