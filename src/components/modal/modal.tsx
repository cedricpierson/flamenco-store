import { component$ } from "@builder.io/qwik";

export interface Props {
  onClose: any;
  store: any;
  contextState: any;
}

export default component$((props: Props) => {
  const { onClose, store, contextState } = props;

  return (
    <div class="absolute top-0 right-0 shadow w-full h-screen overflow-scroll bg-white z-50 flex flex-col gap-4 p-4 sm:w-[500px] text-slate-900">
      <div class="flex items-center justify-between pb-4 border-b">
        <h1 class="font-bold text-4xl text-slate-900">PANIER</h1>
        <i
          onClick$={onClose}
          class="fa-solid fa-xmark  cursor-pointer hover:rotate-45"
        ></i>
      </div>
      {store.cart.length > 0 ? (
        <div class="bg-slate-900 flex flex-col gap-[1px]">
          {store.cart.map((item: any, i: number) => {
            return (
              <div class="bg-white p-4 flex items-center justify-between text-slate-900">
                <div class="flex flex-col gap-1">
                  <h2 class="">{item.name}</h2>
                  <p class="text-xs">{item.price}€</p>
                </div>
                <i
                  onClick$={() => {
                    contextState.items = contextState.items.reduce(
                      (acc: any, curr: number, index: number) => {
                        if (index !== i) {
                          return [...acc, curr];
                        }
                        return acc;
                      },
                      []
                    );
                  }}
                  class="fa-solid fa-xmark cursor-pointer hover:opacity-40 text-sm"
                ></i>
              </div>
            );
          })}
          <a
            href="/"
            class="relative border text-center bg-white border-b border-l border-r border-solid border-slate-900 py-8 text-xl hover:bg-slate-900 hover:text-white"
          >
            COMMANDER
          </a>
        </div>
      ) : (
        <div>
          <h3 class="text-sm">Votre panier est vide</h3>
        </div>
      )}
    </div>
  );
});
