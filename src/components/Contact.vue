<template>
    <main>
        <svg-navbar></svg-navbar>
        <div class="bg-white flex-grow">
            <div class="max-w-lg mx-auto py-8 sm:py-16 px-6">

                <h1 class="text-5xl lg:text-6xl text-medium-purple font-normal">Contact Me</h1>

                <p class="text-grey-darkest mt-6 sm:mt-12 text-lg sm:text-xl leading-loose antialiased">¡Hola! Siéntete libre de mandarme un correo electronico. Hago todo lo posible por responder de manera oportuna, pero los correos electrónicos no urgentes pueden demorar algunos días adicionales.</p>

                <div class="md:w-3/4 mt-6 sm:mt-12 text-lg sm:text-xl text-grey-darkest antialiased">
                    <div class="py-4 flex">
                        <div class="w-32 sm:w-48">Twitter:</div>
                        <a class="text-blue no-underline hover:underline" href="https://twitter.com/thepany96">@thepany96</a>
                    </div>
                    <div class="py-4 flex border-t">
                        <div class="w-32 sm:w-48">GitHub:</div>
                        <a class="text-blue no-underline hover:underline" href="https://github.com/THEPany">THEPany</a>
                    </div>
                    <div class="py-4 flex border-t">
                        <div class="w-32 sm:w-48">Linkedin:</div>
                        <a class="text-blue no-underline hover:underline" href="https://www.linkedin.com/in/cristian-evangelista-5b9433174/">@thepany</a>
                    </div>
                    <div class="py-4 flex border-t">
                        <div class="w-32 sm:w-48">Email:</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import SvgNavbar from '../components/_SVG_NavbarButtom';

    export default {
        name: "Contact",
        components: {
            SvgNavbar
        }
    }
</script>