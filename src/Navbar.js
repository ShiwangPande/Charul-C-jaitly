import React from 'react'

function Navbar() {
    return (
        <div>

            <nav class=" fixed w-full z-20 top-0 left-0 border-b border-gray-400 ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <a href="#" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <a href="#" class="block font-bold py-2 pl-3 pr-4 text-lg text-black bg-[#82bbd2] rounded md:bg-transparent md:text-[#82bbd2] md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block font-bold py-2 pl-3 pr-4 text-lg text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#82bbd2] md:p-0 ">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block font-bold py-2 pl-3 pr-4 text-lg text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#82bbd2] md:p-0 ">Pricing</a>
                            </li>
                            <li>
                                <a href="/contact" class="block font-bold py-2 pl-3 pr-4 text-lg text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#82bbd2] md:p-0 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


      

        </div>

    )
}

export default Navbar