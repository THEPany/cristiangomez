<template>
    <div class="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 lg:max-w-2lg xl:max-w-3xl">
        <div class="text-center md:text-left my-6 sm:my-8 md:my-16 lg:my-32 flex flex-col flex-col-reverse md:flex-row">
            <div class="md:w-1/2">
                <h1 class="text-5xl lg:text-6xl text-white font-normal">Desarrollador web & <span class="font-bold">Ingeniero en sistemas</span></h1>
                <p class="font-light mt-8 text-lg text-white leading-loose max-w-md md:max-w-full mx-auto md:mx-0 lg:pr-24 xl:pr-32">
                    ¡Hola! Mi nombre es Cristian Gómez ¡Bienvenidos a mi sitio web! Soy un desarrollador de software con un enfoque particular en la web. Ayudo a las organizaciones a desarrollar software personalizado basado en la web, así como a crear elegantes sitios web.
                    Me encanta <a class="text-white font-bold no-underline hover:underline whitespace-no-wrap" href="https://laravel.com/" target="_blank">Laravel</a>,lo uso junto con <a class="text-white font-bold no-underline hover:underline whitespace-no-wrap" href="https://vuejs.org/" target="_blank">Vue.js</a> y <a class="text-white font-bold no-underline hover:underline whitespace-no-wrap" href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>
                </p>
                <router-link to="/about" class="mt-8 inline-block antialiased bg-blue text-white font-bold py-2 px-4 rounded-full leading-none hover:translateY-1px transition-1s no-underline">Más sobre mí</router-link>
            </div>
            <div class="md:w-1/2 max-w-xs md:max-w-full mx-auto md:mx-0 mb-12 md:mb-0 md:pl-12">
                <img class="block w-full rounded shadow-xl" src="https://avatars3.githubusercontent.com/u/19762300?s=460&v=4" alt="Cristian Gómez" style="background: radial-gradient(#ccc8c6 40%, #818177)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>
