<template>
    <div>
        <HeaderUser />
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
            <!-- Left -->
            <div class="relative header bg-blue-100 h-auto md:h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-center text-white">
                <img src="https://picsum.photos/id/1002/800/900" alt="Placeholder" class="top-0 left-0 absolute object-cover h-full w-full" />
            </div>
            <!-- Right -->
            <div class="col-span-1 md:cols-span-2 h-screen md:overflow-auto">
                <div class="max-w-3xl mx-auto py-16">
                    <div class="pt-16 pb-8">
                        <h1 class="text-6xl font-bold mb-4"> Welcome to aozhoguma </h1>
                        <h3 class="text-2xl text-black opacity-50">Aozhoguma is a travel blog based in Australia,
                            focused on brands, products, campaigns and interactive experiences.</h3>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    </div>
</template>