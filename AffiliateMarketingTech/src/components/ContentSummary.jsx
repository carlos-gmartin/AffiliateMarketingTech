import React from 'react'
import {FaGem} from 'react-icons/fa';
import {GiMetalBar} from 'react-icons/gi';

const ContentSummary = () => {
  return (
    <div>
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-[#77F2A1]">Deploy faster</p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A faster solution</h1>
                <p class="mt-6 text-xl leading-7 text-gray-800">
                  
                  Welcome to the Affiliate Marketing Guru, your ultimate destination for reliable technical assistance and solutions. 

                  Whether you're troubleshooting complex technical implementations, grappling with ecommerce plugins, or seeking programming insights, we're here to guide you through every step of your technical journey.

                  Our dedicated team of experts have crafted a wealth of comprehensive guides, tutorials, and troubleshooting tips to empower you with the knowledge you need to overcome even the trickiest tech challenges. 

                  Join us in unravelling the complexities of technology and embark on a seamless digital experience. Your tech solutions start here.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img class="w-[48rem] max-w-none rounded-xl bg-gray-600 shadow-xl ring-1 ring-gray-100/10 sm:w-[57rem]" src="./src/images/platforms-image.png" alt="Platforms including: Shopify, Woocomerce, Shopware, PrestaShop and GTM"/>
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>How does it work? 

                  First you will need to get in contact with us, explaining the current issue you are encountering. The more information the better! Here is a form that you can use for requesting support: 

                  Once you have completed the form and sent us all of the necessary information for us to then get in contact with you, we will then begin supplying you with the necessary information to help with the installation or debugging for technical implementation.
                  
                  </p>
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg class="mt-1 h-5 w-5 flex-none text-orange-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <GiMetalBar size={20} fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                    </svg>
                    <span><strong class="font-semibold text-gray-900">Bronze</strong> Any plugin installation. Including: Shopify, Woocomerce, Shopware, PrestaShop</span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg class="mt-1 h-5 w-5 flex-none text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <FaGem size={20} fill-rule="evenodd"  clip-rule="evenodd" />
                    </svg>
                    <span><strong class="font-semibold text-gray-900">Platinum</strong> Google Tag Manager installation and debugging </span>
                  </li>
                </ul>
                {/* <p class="mt-8">Bronze package, this package includes only a guided explanation on how to set up any plugin installation. This includes an online call tutorial explaining how to implement the tracking integration for your desired plugin. This implementation is usually completed very quickly.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSummary