import React from 'react'
const RequestForm = () => {
    return (
        <div>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your full name</label>
                <input type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5"></input>
            </div>
            <div className="mb-6">
                <label htmlFor="business_name" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your business name</label>
                <input type="text" name="business_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " required></input>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your email</label>
                <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder="buisness@email.com" required></input>
            </div>
            <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your phone number</label>
                <input type="phone" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " required></input>
            </div>
            <div className="mb-6">
                <label htmlFor="platform" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your ecommerce platform / tech stack</label>
                <input type="text" name="platform" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 " placeholder="Shopify, Woocommerce, custom, etc..."></input>
            </div>
            <div className="mb-6">
                <label htmlFor="page_url" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your page URL</label>
                <input type="text" name="page_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 "></input>
            </div>
            <div className="mb-6">
                <label htmlFor="contact_method" className="block mb-2 text-sm font-medium text-[#1F2B37]">Your prefered contact method</label>
                <input type="text" name="contact_method" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 "></input>
            </div>
            <div className="mb-6">
                <label htmlFor="note" className="block mb-2 text-sm font-medium text-[#1F2B37]">Additional note</label>
                <input type="text" name="note" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#77F2A1]  block w-full p-2.5 "></input>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input name="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </div>
    )
}

export default RequestForm