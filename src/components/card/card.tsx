import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$((props) => {
  const { name, url, price } = props;

  return (
    <Link href="/shows">
      <div
        class="flex flex-col gap-2 cursor-pointer border border-solid border-transparent hover:border-slate-900"
        onClick$={() => {
          localStorage.setItem("show", JSON.stringify({ ...props }));
        }}
      >
        <img src={url} alt={name} class="sm:h-[300px] object-cover" />
        <div class="flex flex-col gap-2 p-4 shadow">
          <h2 class="text-2xl">{name}</h2>
          <p>{price}€</p>
        </div>
      </div>
    </Link>
  );
});
