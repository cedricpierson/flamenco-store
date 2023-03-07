import { component$ } from "@builder.io/qwik";
import Card from "../card/card";

export default component$(() => {
  const shows: any = [
    {
      name: "Caracoles",
      url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/f2/62/75.jpg",
      price: "19",
    },
    {
      name: "Danzaora",
      url: "https://bokun.s3.amazonaws.com/99c269f8-aa9e-45c4-bc47-6438a78f0852.jpeg",
      price: "20",
    },
    {
      name: "Tokitoko",
      url: "https://www.madrid.fr/f/espana/madrid/espectaculo-flamenco-corral-moreria-grid.jpg",
      price: "25",
    },
    {
      name: "Tablao",
      url: "https://jmstrings.com/wp-content/uploads/2019/04/Flamenco-show-Barcelona.jpg",
      price: "15",
    },
    {
      name: "Cante y baile",
      url: "https://www.madrid-traveller.com/wp-content/uploads/2020/05/flamenco-show-madrid.jpeg",
      price: "27",
    },
    {
      name: "Maestros",
      url: "https://www.civitatis.com/f/espana/madrid/galeria/bailaora-flamenco-torres-bermejas.jpg",
      price: "18",
    },
  ];
  return (
    <div id="products" class="min-h-screen grid place-items-center  py-8">
      <div class="flex gap-4 flex-wrap items-stretch justify-center max-w-[1400px]">
        {shows.map((show: any) => (
          <Card {...show} />
        ))}
      </div>
    </div>
  );
});
