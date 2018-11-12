<template>
    <div class="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 lg:max-w-2lg xl:max-w-3xl">
        <header class="py-8 text-center sm:pt-16 sm:pb-12 sm:flex sm:items-end sm:justify-between">
            <router-link to="/" class="inline-flex items-baseline text-white no-underline text-2xl antialiased hover:translateY-1px transition-1s">
                <div class="text-beige mr-1">Cristian</div>
                <div class="font-bold">Gómez</div>
            </router-link>
            <nav class="font-medium antialiased mt-4 sm:mt-0">
                <router-link to="/about" class="text-white hover:underline no-underline">Acerca de</router-link>
                <router-link to="/projects" class="text-white hover:underline no-underline ml-4 md:ml-8">Proyectos</router-link>
               <!-- <router-link to="/blog" class="text-white hover:underline no-underline ml-4 md:ml-8">Blog</router-link>-->
                <router-link to="/contact" class="text-white hover:underline no-underline ml-4 md:ml-8">Contacto</router-link>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>