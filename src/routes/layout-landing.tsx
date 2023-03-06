import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { Navigation } from "~/components/navigation/navigation";
import Header from "../components/header/header";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <>
      <main class="flex-1 flex flex-col relative">
        <Header />

        <Slot />
      </main>
      <footer>{/* <div>{serverTime.value.date}</div> */}</footer>
    </>
  );
});
