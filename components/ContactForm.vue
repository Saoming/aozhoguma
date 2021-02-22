<template>
    <div class="max-w-4xl">
        <h1 class="text-6xl font-bold"> Contact Us </h1>
        <h4 class="text-black opacity-50 text-xl"> Get in touch with us </h4>
        <form action="">
            <div class="flex flex-col py-2 mb-8">
                <label class="text-2xl font-bold mb-2">Full Name</label>
                <input placeholder="Your Full Name" type="text"
                    class="py-2 px-2 border text-xl border-black text-large focus:outline-none  placeholder-gray-900">
            </div>
            <div class="flex flex-col py-2 mb-8">
                <label class="text-2xl font-bold mb-2">Email Address</label>
                <input placeholder="Your Email Address" type="text"
                    class="py-2 px-2 border text-xl border-black text-large focus:outline-none  placeholder-gray-900">
            </div>
            <div class="flex flex-col py-2 mb-8">
                <label class="text-2xl font-bold mb-2">Message</label>
                <textarea
                    class="py-4 px-2 border text-xl border-black text-large focus:outline-none  placeholder-gray-900" />
            </div>
            <button type="submit" href="#"
                class="focus:ring-4 focus:outline-non mt-6 font-bold whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-gray-600 hover:bg-gray-800">
                Submit</button>
        </form>
    </div>
</template>