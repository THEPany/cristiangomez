<template>
    <main>
        <svg-navbar></svg-navbar>
        <div class="bg-white flex-grow">
            <div class="max-w-lg mx-auto py-8 sm:py-16 px-6">

                <h1 class="text-5xl lg:text-6xl text-medium-purple font-normal">Proyectos</h1>

                <p class="text-grey-darkest mt-6 sm:mt-12 text-lg sm:text-xl leading-loose antialiased">Estos son algunos de los proyectos en los que he trabajado recientemente. Puedes encontrar mas de mi trabajo en <a class="text-blue-dark no-underline hover:underline" href="https://github.com/THEPany">GitHub</a></p>

                <div class="lg:-mx-12 mt-6 sm:mt-12 rounded overflow-hidden" style="background-color: #98372b">
                    <div class="md:flex">
                        <div class="md:w-1/2 md:pt-12 md:pr-0 md:pl-12">
                            <a class="block relative" style="padding-top: 60%" href="http://ingsecom.com/">
                                <img class="pin-b absolute block rounded-t md:shadow-lg-dark" src="/img/ingsecom.png" alt="ingsecom">
                            </a>
                        </div>
                        <div class="px-6 pt-8 pb-6 md:w-1/2 md:px-12 md:py-8 md:flex md:items-center">
                            <div>
                                <div class="text-white antialiased text-xl md:text-2xl font-medium">INGSECOM</div>
                                <div class="mt-2 md:mt-3 text-white antialiased text-sm md:text-base leading-tight md:leading-normal opacity-75">Landing page</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:-mx-12 mt-6 sm:mt-8 rounded overflow-hidden" style="background-color: #425874">
                    <div class="md:flex">
                        <div class="md:w-1/2 md:pt-12 md:pr-0 md:pl-12">
                            <a class="block relative" style="padding-top: 60%" href="http://notidigitalrd.com/">
                                <img class="pin-b absolute block rounded-t md:shadow-lg-dark" src="/img/notidigital.png" alt="notidigital">
                            </a>
                        </div>
                        <div class="px-6 pt-8 pb-6 md:w-1/2 md:px-12 md:py-8 md:flex md:items-center">
                            <div>
                                <div class="text-white antialiased text-xl md:text-2xl font-medium">NotiDigital RD</div>
                                <div class="mt-2 md:mt-3 text-white antialiased text-sm md:text-base leading-tight md:leading-normal opacity-75">Blog de noticias, gestión y administración de contenidos publicados con facilidad para compartir publicaciones.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>
</template>

<script>
    import SvgNavbar from '../components/_SVG_NavbarButtom';

    export default {
        name: "Project",
        components: {
            SvgNavbar
        }
    }
</script>