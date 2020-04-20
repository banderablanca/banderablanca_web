<template>
  <div class="h-screen bg-right bg-cover bg_background">
    <!--Nav-->
    <Nav />
    <!--Main-->
    <div
      class="container  px-6 mx-auto flex flex-wrap flex-col
				md:flex-row items-center min-h-screen"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start
					overflow-y-hidden "
      >
        <h1
          class="my-4 text-3xl md:text-5xl text-gray-800 font-bold
						leading-tight text-center md:text-left slide-in-bottom-h1"
        >
          Es tiempo de ayudarnos
        </h1>
        <p
          class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle"
        >
          Encuentra hogares vulnerables en un solo mapa.
        </p>
        <p class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle">
           Alza una
          bandera si necesitas ayuda.
          </p>
        <p  class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle">
          ¿Quieres hacer feliz a un hogar? Localiza una bandera cerca a
          tu zona y ayúdala.
        </p>

        <p
          class="text-red-400 font-bold pb-2 lg:pb-6 text-center md:text-left
						fade-in"
        >
          Descargar Bandera blanca
        </p>
        <div
          class="flex w-full justify-center md:justify-start pb-24 lg:pb-0
						fade-in"
        >
          <a
            href="https://play.google.com/store/apps/details?id=org.banderablanca"
            target="_blank"
          >
            <img
              src="~/assets/img/Play Store.svg"
              class="h-12 bounce-top-icons"
            />
          </a>
          <div
            class=" flex-wrap items-center  text-center justify-center lg:px-8 pl-4"
          >
            <img
              src="~/assets/img/App Store.svg"
              class="h-12 pr-4 bounce-top-icons"
            />
            <span class="font-bold pr-2 text-gray-500 text-xs">Muy pronto</span>
          </div>
        </div>
      </div>

      <!--Right Col-->
      <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
          src="~/assets/img/header-iphone.png"
        />
      </div>
    </div>
    <section class="bg-gray-200">
      <div
        class="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full">
          ¿Cómo funciona?
        </h1>
        <p class="leading-normal mb-4 text-gray-700">
          Las banderas en el mapa son registros por las mismas personas o
          voluntarios que desean ayudar a los hogares vulnerables.
        </p>
      </div>
      <div
        class="font-sans container  m-auto flex flex-col lg:flex-row justify-center my-8"
      >
        <div
          class="order-2 lg:order-1 p-4  w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8"
        >
          <div
            class="w-16 h-16 rounded-full border border-red-400 mb-2 flex items-center justify-center"
          >
            <img src="~/assets/img/logo.svg" alt="" class="w-full p-5" />
          </div>
          <h2 class="text-black mb-2 font-bold">Localiza una bandera</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Encuentra un hogar vulnerable esperando tu ayuda.
          </p>
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/people-arrows-solid.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            Comunidad
          </h2>
          <p class="text-gray-700 leading-normal mb-8">
            Si apoyaste un hogar, comenta con una foto, así los voluntarios
            podrán tener la oportunidad de ayudar a otros hogares.
          </p>
        </div>
        <div
          class="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0"
        >
          <img src="~/assets/img/features-app.jpg" alt="" class="px-8" />
        </div>
        <div
          class="order-last w-full p-4  lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8"
        >
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/comments-regular.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            Comenta una bandera
          </h2>
          <p class="text-gray-700 leading-normal mb-8">
            Puedes comentar en una bandera para comunicarte con el creador.
          </p>
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/flag-regular.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            Alzar una bandera
          </h2>
          <p class="text-gray-700 leading-normal">
            Si necesitas ayuda o encuentras un hogar vulnerable alza una bandera
            y dale la oportunidad de recibir ayuda de otros voluntarios
          </p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="my-8 pt-8 font-sans container m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center text-gray-700 min-h-screen"
      >
        <div
          class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start"
        >
          <h1 class="my-4 font-bold text-3xl md:text-5xl  w-full">
            Registrar una bandera
          </h1>
          <p class="leading-normal mb-4">
            Si necesitas ayuda o ves un hogar que necesita apoyo, registra una
            bandera en el mapa. Personas voluntarias podrán localizarla.
          </p>
          <ul class="list-inside ">
            <li class="py-2 flex">
              - Toma una foto para generar confianza al voluntario.
            </li>
            <li class="py-2 flex">
              - Localiza el hogar en el mapa, es importante la ubicación exacta.
            </li>
            <li class="py-2 flex">
              - Agrega una breve descripción para que el voluntario pueda saber
              de tus necesidades.
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2">
          <img
            src="~/assets/img/description-2-app.png"
            alt=""
            class="p-4 lg:px-16"
          />
        </div>
      </div>
    </section>

    <section class="bg-gray-200">
      <div
        class="font-sans container m-auto lg:text-left sm:items-center  text-gray-700"
      >
        <div
          class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center p-8 items-center lg:items-center text-center min-h-screen "
        >
          <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">
            Sobre nosotros
          </h1>
          <h2 class="text-2xl font-bold w-full">
            Bandera Blanca es una iniciativa sin fines de lucro.
          </h2>
          <p class="leading-normal mb-4">
            Somos un grupo de jóvenes entusiastas que vive en carne propia la
            situación que atraviesa la humanidad sobre la pandemia generada por
            el COVID-19 y de cómo esto afecta en gran escala la calidad de vida
            de muchas personas. Nos unimos para crear una herramienta que sirve
            como canal de localización de hogares vulnerables que necesitan
            ayuda y dar la oportunidad de ayudar a otros.
          </p>
        </div>
      </div>
    </section>
        <section
      class="my-8 font-sans container m-auto lg:text-left sm:items-center min-h-screen bg-transparent"
    >
      <div
        class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full">
          Nuestra motivación
        </h1>
        <p class="leading-normal mb-4 text-gray-700">
          Recientemente hemos visto una creciente interacción en las redes
          sociales de hogares con bandera blanca. Las redes sociales no son una
          herramienta pensada para esta situación ya que es fácil de perder un
          post y con ello la oportunidad de ayudar a los más necesitados,
          Bandera Blanca es una aplicación que centraliza los hogares
          vulnerables en un solo mapa.
        </p>
      </div>
      <div class="w-full mx-auto">
        <img
          src="~/assets/img/description-1-app.png"
          alt=""
          class="p-8 hidden lg:block"
        />
        <img
          src="~/assets/img/description-1-mobile.png"
          alt=""
          class="p-8 block lg:hidden"
        />
      </div>
    </section>
    <!--Footer-->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Nav,
    Footer
  }
})
</script>

<style>
.bg_background {
  background-image: url('~assets/img/bg.svg');
  background-attachment: fixed;
}
</style>
