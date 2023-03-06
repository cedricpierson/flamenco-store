import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  return (
    <div class="flex items-center justify-between">
      <div>LOGO</div>
      <ul class="flex space-x-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tester">Tester</Link>
        </li>
      </ul>
    </div>
  );
});
