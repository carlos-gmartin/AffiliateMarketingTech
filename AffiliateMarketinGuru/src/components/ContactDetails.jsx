import React from "react";
import { BiSolidPhoneIncoming, BiBug } from 'react-icons/bi';

const ContactDetails = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 overflow-hidden">
                <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32">
                    <div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[#4F76F6] rounded-[12px]">
                        <div className="absolute inset-x-0 bottom-0 h-[250px] bg-cover bg-[60%] bg-no-repeat bg-[#476add] rounded-[12px]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-cover bg-[60%] bg-no-repeat bg-[#3f5ec4] rounded-[12px]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-cover bg-[60%] bg-no-repeat bg-[#2f4693] rounded-[12px]"></div>
                    </div>
                    <div class="container px-6 md:px-12">
                        <div
                            class="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#172349] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div class="flex flex-wrap">
                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                    <form>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput90" placeholder="Name" />
                                            <label
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                for="exampleInput90">Name
                                            </label>
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="email"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput91" placeholder="Email address" />
                                            <label
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                for="exampleInput91">Email address
                                            </label>
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <textarea
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                            <label for="exampleFormControlTextarea1"
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                                        </div>
                                        <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                        </div>
                                        <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                            class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#77F2A1] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#77F2A1] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#77F2A1] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                                            Send
                                        </button>
                                    </form>
                                </div>
                                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div class="flex flex-wrap">
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <BiSolidPhoneIncoming size={40} color="#77F2A1"></BiSolidPhoneIncoming>
                                                    </div>
                                                </div>
                                                <div class="ml-6 grow">
                                                    <p class="mb-2 font-bold dark:text-white">
                                                        Technical support
                                                    </p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        support@example.com
                                                    </p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div class="align-start flex">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <BiBug size={40} color="#77F2A1"></BiBug>
                                                    </div>
                                                </div>
                                                <div class="ml-6 grow">
                                                    <p class="mb-2 font-bold dark:text-white">Bug report</p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        bugs@example.com
                                                    </p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        +1 234-567-89

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            <p>
                                                <strong class="text-[#77F2A1]">We're thrilled to connect with you!</strong> Whether you have a burning question, need technical assistance, or simply want to explore potential collaborations, our team at AMG is here and ready to assist.
                                            </p>
                                            <p>
                                            Your thoughts and inquiries are <strong class="text-[#77F2A1]">important to us</strong>, and we're committed to providing timely and meaningful responses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactDetails;