import {
  component$,
  useContext,
  useBrowserVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ProductsGrid from "~/components/products-grid/products-grid";
import { MyContext } from "~/root";

export default component$(() => {
  const contextState = useContext(MyContext);
  console.log(contextState);

  useBrowserVisibleTask$(() => {
    if (localStorage.getItem("show-basket")) {
      contextState.items = [
        ...JSON.parse(localStorage.getItem("show-basket")).items,
      ];
    }
  });

  return (
    <div class="flex flex-1 flex-col">
      <section class="min-h-screen flex relative">
        <img
          src="https://www.teatroreal.es/sites/default/files/espectaculos/Cabecera_Web_1920x1200_MacarenaRamirez.jpg"
          alt="flamenco-macarena-ramirez"
          class="object-cover"
        />
        <a
          href="#products"
          class="absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2 p-4 px-8 border-2 text-white border-solid border-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden"
        >
          <h3 class="relative z-20 text-center">Votre spectacle</h3>
        </a>
      </section>
      <ProductsGrid />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Flamenco Store",
  meta: [
    {
      name: "description",
      content: "Flamenco Landing Page",
    },
  ],
};
