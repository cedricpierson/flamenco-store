import {
  component$,
  useStore,
  $,
  useContext,
  useTask$,
} from "@builder.io/qwik";
import { MyContext } from "~/root";
import Modal from "../modal/modal";

export default component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
    modal: false,
    cart: [],
  });

  const contextState = useContext(MyContext);

  // useBrowserVisibleTask$(() => {
  //   if (localStorage.getItem("show-basket")) {
  //     const currBasket = JSON.parse(localStorage.getItem("show-basket"));
  //     const numItemsInBasket = currBasket.items.length;
  //     store.numItems = numItemsInBasket;
  //     store.cart = currBasket.items;
  //   }
  // });

  const onClose = $(function onClose() {
    store.modal = false;
  });

  useTask$(({ track }) => {
    const tempCart = track(() => contextState.items);
    store.numItems = tempCart.length;
    store.cart = tempCart;
  });

  return (
    <header
      class={
        "fixed top-0 left-0 w-full flex justify-between items-center p-4 text-slate-900 text-xl sm:text-4xl sm:p-8 z-20 " +
        (store.scrolled
          ? " bg-slate-900 text-white shadow"
          : " bg-transparent text-slate-900")
      }
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          store.scrolled = true;
        } else {
          store.scrolled = false;
        }
      }}
    >
      {store.modal && (
        <Modal onClose={onClose} store={store} contextState={contextState} />
      )}
      <a href="/">
        <i class="fa-solid fa-fire mr-3"></i>Flamenco Store
      </a>
      <div
        class="text-xl sm:text-3xl relative cursor-pointer"
        onClick$={() => {
          store.modal = true;
        }}
      >
        <i class="fa-solid fa-cart-shopping"></i>

        <div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center text-white ">
          {store.numItems}
        </div>
      </div>
    </header>
  );
});
