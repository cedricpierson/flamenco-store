import {
  component$,
  useBrowserVisibleTask$,
  useContext,
  useStore,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { MyContext } from "~/root";

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    name: "",
    url: "",
    price: "",
  });

  const contextState = useContext(MyContext);

  useBrowserVisibleTask$(() => {
    const data = JSON.parse(localStorage.getItem("show"));
    state.name = data.name;
    state.url = data.url;
    state.price = data.price;
  });

  useBrowserVisibleTask$(() => {
    if (localStorage.getItem("show-basket")) {
      contextState.items = [
        ...JSON.parse(localStorage.getItem("show-basket")).items,
      ];
    }
  });

  return (
    <>
      <div class="flex flex-col gap-2 mb-8">
        <img
          src={state.url}
          alt={state.name}
          class="object-cover relative z-10"
        />
        <div class="flex justify-between p-4">
          <h2 class="text-xl">{state.name}</h2>
          <p>{state.price}€</p>
        </div>
        <button
          onClick$={() => {
            let currBasket = { items: [] };
            if (localStorage.getItem("show-basket")) {
              currBasket = JSON.parse(localStorage.getItem("show-basket"));
            }
            currBasket.items.push(state);
            localStorage.setItem("show-basket", JSON.stringify(currBasket));
            contextState.items = [...contextState.items, state];
          }}
          class="border py-2 border-slate-900 border-solid px-8 mx-auto hover:opacity-50"
        >
          RÉSERVER
        </button>
      </div>
    </>
  );
});
