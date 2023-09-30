import React from 'react'
import { FaGem } from 'react-icons/fa';
import { GiMetalBar } from 'react-icons/gi';
import imgSummary from '../images/platforms-image.png';
import imgSummarySmall from '../images/platforms-image-small.png'
import LinesGraphic from '../components/LinesGraphic';

const ContentSummary = () => {
  return (
    <div>
      <div class="relative isolate overflow-hidden bg-white px-6 py-5 sm:py-20 sm: lg:overflow-visible lg:px-0">
        <LinesGraphic></LinesGraphic>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-[#77F2A1]">Deploy faster</p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A faster solution</h1>
                <p class="mt-6 text-xl leading-7 text-gray-800">

                  Welcome to Affiliate Marketing Tech, your ultimate destination for reliable technical assistance and solutions.

                  Whether you're troubleshooting complex technical implementations, grappling with ecommerce plugins, or seeking programming insights, we're here to guide you through every step of your technical journey.

                  Our dedicated team of experts have crafted a wealth of comprehensive guides, tutorials, and troubleshooting tips to empower you with the knowledge you need to overcome even the trickiest tech challenges.

                  Join us in unravelling the complexities of technology and embark on a seamless digital experience. Your tech solutions start here.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img class="w-[20rem] max-w-none rounded-xl bg-gray-600 shadow-xl ring-1 ring-gray-100/10 sm:w-[57rem]" src={window.innerWidth > 1024 ? imgSummary : imgSummarySmall} alt="Platforms including: Shopify, Woocomerce, Shopware, PrestaShop and GTM" />
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
                      <FaGem size={20} fill-rule="evenodd" clip-rule="evenodd" />
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