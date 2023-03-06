import { component$, useTask$, useStore, $ } from "@builder.io/qwik";

interface ItemProps {
  handleFunction?: any;
}

export const Button = component$((props: ItemProps) => {
  const state = useStore({
    message: "Pas de state",
    color: "green ",
  });

  const handleClick = $(() => {
    state.message = "Button Clicked";
    props.handleFunction();
  });

  useTask$(({ track }) => {
    track(state);
  });

  return (
    <button
      onClick$={handleClick}
      class="bg-gray-800 text-white px-4 rounded-sm hover:bg-gray-600"
    >
      Click Me
    </button>
  );
});
