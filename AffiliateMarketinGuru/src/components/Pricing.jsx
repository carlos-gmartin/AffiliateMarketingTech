import React from 'react'
import {FaGem} from 'react-icons/fa';
import {GiMetalBar} from 'react-icons/gi';

const Pricing = () => {
	return (
		<>
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
				<div class="container px-6 py-8 mx-auto">
					<div class="xl:items-center xl:-mx-8 xl:flex">
						<div class="flex flex-col items-center xl:items-start xl:mx-8">

							<h1 class="text-2xl font-medium capitalize lg:text-3xl">Our Pricing Plan</h1>

							<div class="mt-4">
								<span class="inline-block w-40 h-1 bg-[#77F2A1] rounded-full"></span>
								<span class="inline-block w-3 h-1 mx-1 bg-[#77F2A1] rounded-full"></span>
								<span class="inline-block w-1 h-1 bg-[#77F2A1] rounded-full"></span>
							</div>

							<p class="mt-4 font-medium">
								You can get All Access by selecting your plan!
							</p>

							<a href="#" class="flex items-center mt-4 -mx-1 text-sm capitalize dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-[#4F76F6]">
								<svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010			 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</a>
						</div>

						<div class="flex-1 xl:mx-8">
							<div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
								<div class="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
									<div class="p-6">

										<div class="inline-flex">
											<GiMetalBar size={30} fill-rule="evenodd" class="mx-4 text-orange-700" clip-rule="evenodd" />
											<h1 class="text-xl font-medium capitalize lg:text-2xl">Bronze</h1>
										</div>

										<p class="mt-4">
											This package is the most basic implementation for installing tracking plugins, this is the quickest implementation.
										</p>

										<h2 class="mt-4 text-2xl font-semibold sm:text-3xl">££££</h2>

										<p class="mt-1">One time Payment</p>

										<button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize text- transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
											Start Now
										</button>
									</div>

									<div class="p-6">
										<h1 class="text-lg font-medium capitalize lg:text-xl">What’s included:</h1>

										<div class="mt-8 space-y-4">
											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Shopify</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Woocomerce</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Shopware</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">PrestaShop</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Google Tag Manager</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Custom implementations</span>
											</div>
										</div>
									</div>
								</div>

								<div class="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
									<div class="p-6">
										<div class="inline-flex" >
											<FaGem size={30} fill-rule="evenodd" class="mx-4 text-slate-400" clip-rule="evenodd"/>
											<h1 class="text-xl font-medium  capitalize lg:text-2xl">Platinum</h1>
										</div>
										
										<p class="mt-4  ">The perfect package for someone looking for more complex solutions and implementations receiving the most indepth assistance.</p>

										<h2 class="mt-4 text-2xl font-semibold  sm:text-3xl ">££££<span class="text-base font-medium"></span></h2>

										<p class="mt-1  ">
											One time Payment
										</p>

										<button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 fo			cus:ring focus:ring-blue-300 focus:ring-opacity-80">
											Start Now
										</button>
									</div>

									<div class="p-6">
										<h1 class="text-lg font-medium  capitalize lg:text-xl">What’s included:</h1>

										<div class="mt-8 space-y-4">
											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4">Shopify</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4  ">Woocommerce</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4  ">Shopware</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4  ">PrestaShop</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4  ">Google Tag Manager</span>
											</div>

											<div class="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4F76F6]" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>

												<span class="mx-4  ">Custom</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div></>
	)
}
export default Pricing;


