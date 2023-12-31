import React from 'react'

function Contact() {
    return (
        <div>


            <form class="w-full max-w-lg m-auto mt-36 mb-32 " action="https://formsubmit.co/shiwangpande1@gmail.com"
                method="POST">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"
                            name="name"
                            placeholder="Name"
                            required />
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p>  w */}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class="form-control no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="query"

                            style={{ height: "150px" }}
                            placeholder="write your query here"
                            cols="30"
                            rows="10"
                            required></textarea>
                        <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                        <input type="hidden" name="_next"
                            value="https://mesathank.netlify.app/" />
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )
}

export default Contact