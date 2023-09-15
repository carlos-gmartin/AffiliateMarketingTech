import React from 'react'

const PackageForm = () => {
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
            <div class="container my-10 mx-auto md:px-6">
                <section class="mb-32">
                </section>
                <div class="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6x">Apply for a solution now!</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We will get in contact with you as soon as possible.</p>
                </div>
                <form>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your full name</label>
                        <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5" placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="business_name" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your business name</label>
                        <input type="text" id="business_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your phone number</label>
                        <input type="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="platform" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your ecommerce platform</label>
                        <input type="text" id="platform" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="page_url" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your page URL</label>
                        <input type="text" id="page_url" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>
                    <div class="mb-6">
                        <label for="contact_method" class="block mb-2 text-sm font-medium text-[#1F2B37]">Your prefered contact method</label>
                        <input type="text" id="contact_method" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>     
                    <div class="mb-6">
                        <label for="note" class="block mb-2 text-sm font-medium text-[#1F2B37]">Additional note</label>
                        <input type="text" id="note" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder=""></input>
                    </div>  
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                        </div>
                        <label for="terms" class="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </form>
            </div>
        </div>
    )
}

export default PackageForm;