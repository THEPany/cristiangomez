<template>
 <main>
     <svg-navbar></svg-navbar>
     <div class="bg-white flex-grow">
         <div class="max-w-lg mx-auto py-8 sm:py-16 px-6">

             <h1 class="text-5xl lg:text-6xl text-medium-purple font-normal">About Me</h1>

             <div class="text-grey-darkest mt-6 sm:mt-12 text-lg antialiased leading-loose">
                 <img class="mt-4 sm:mt-0 sm:w-1/3 sm:ml-8 sm:float-right block rounded" src="https://avatars3.githubusercontent.com/u/19762300?s=460&v=4" alt="Cristian Gómez">
                 <p class="mt-4">Soy desarrollador web y ingeniero de sistemas. Vivo en la pequeña ciudad de La Vega (República Dominicana) donde mis amigos y yo nos reímos y hablamos sobre temas tecnológicos cuando tenemos tiempo. En mi tiempo libre, disfruto de la lectura, música y desarrollar sitios web fabulosos </p>

                 <h2 class="mt-12 text-medium-purple text-2xl font-bold">Breve historia</h2>
                 <p class="mt-4">Comencé a desarrollar software cuando acababa de entrar a la universidad. Mis primeros programas se escribieron en C y Java. Asistí a la universidad Universidad Católica del Cibao (UCATECI). Entre 2014~2017 fui a diferentes charlas de tecnologia, seminarios y hackathones. participar en un programa de certificación impartido por altice dominicana para el desarrollo de aplicaciones básicas y avanzadas</p>

                 <h2 class="mt-12 text-medium-purple text-2xl font-bold">Desarrollo web</h2>
                 <p class="mt-4">Mi enfoque principal como desarrollador de software es el desarrollo web, lo que he estado haciendo desde inicios del 2016. Mis primeros proyectos fueron construidos con HTML, CSS, JavaScript, PHP y MySQL. Curiosamente, mi conjunto de herramientas sigue siendo el mismo hoy. Estos días mi framework PHP de elección es <a class="text-blue-dark" href="https://laravel.com/">Laravel</a>, He estado experimentando con <a class="text-blue-dark" href="https://tailwindcss.com">TailwindCSS</a> un framework css de utilidad para el desarrollo rápido de la interfaz de usuario. Estos días estoy haciendo mucho de mi trabajo de JavaScript con <a class="text-blue-dark" href="https://vuejs.org/">Vue.js</a>.</p>
                 <p class="mt-4">Como desarrollador, valoro el código bien escrito, es fácil de leer y no es innecesariamente complejo. No veo las pruebas automatizadas como opcionales, sino más bien una parte clave para escribir un buen código. Aprecio los siguientes estándares de codificación de la industria. Me refiero a aprender y mejorar continuamente asistiendo a conferencias, leyendo libros y blogs, viendo screencast y siguiendo a expertos de la industria.</p>
             </div>

         </div>
     </div>
 </main>
</template>

<script>
    import SvgNavbar from '../components/_SVG_NavbarButtom';

    export default {
        name: "About",
        components: {
            SvgNavbar
        }
    }
</script>

<style scoped>

</style>