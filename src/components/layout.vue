<template>
  <main class="h-screen font-sans text-black antialiased leading-tight">
      <div class="border-t-10 border-blue"></div>
      <div class="container mx-auto px-6 py-10">
          <img class="w-24 h-24 rounded-full border-4 border-white block mx-auto relative -mb-10" src="https://avatars3.githubusercontent.com/u/19762300?s=460&v=4">
          <section class="bg-blue py-10 md:pt-20 px-6 mx:px-0 rounded shadow-md">
              <blockquote class="text-center text-white text-xl md:text-3xl mx-auto leading-tight md:mb-12 max-w-blockquote">
                  <p class="mb-6">Soy Ing. sistemas, me gusta el desarrollo web. Me especializo en Laravel y PHP, Vue.JS y Saas.
                  </p>
                  <p class="flex items-center flex-col md:flex-row justify-center text-white text-xs md:text-base uppercase font-bold tracking-wide leading-tight">
                      <span class="mb-2 md:mb-0">Cristian Gómez</span>
                      <span class="hidden md:inline-block mx-6 mt-2px">
                              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="Artboard-4" fill="#81F1FF" transform="translate(-659 -3246)"><g id="Group-9" transform="translate(500 3245)"><path id="Rectangle-22" d="M159 1h2v20h-2z"></path></g></g></g></svg>
                          </span>
                      <span class="text-white-70%">
                              <a href="https://twitter.com/thepany96" target="_blank" class="no-underline text-white hover:text-grey-darkest mr-4">
                                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                              </a>
                              <a href="" target="_blank" class="no-underline text-white hover:text-grey-darkest mr-4">
                                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                              </a>
                               <a href="https://github.com/THEPany" target="_blank" class="no-underline text-white hover:text-grey-darkest">
                                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                              </a>
                          </span>
                  </p>
              </blockquote>
          </section>
          <p class="mx-auto text-center text-70 text-sm leading-normal py-20" style="color: #56677b">
              © 2018 Cristian Gómez
          </p>
      </div>
  </main>
</template>

<script>
export default {
  name: 'layout',
}
</script>