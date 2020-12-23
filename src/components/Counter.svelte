<script lang="ts">
  import { Subscription } from "$helpers/subscription";
  import { count } from "$stores/counter";
  import { onDestroy } from "svelte";

  export let text = "Counter";

  const subscription = new Subscription(count.subscribe(() => {}));
  (async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    if (res?.ok) {
      const todos = await res.json();
      console.log(todos);
    }
  })();
  onDestroy(() => subscription.unsubscribe());
</script>

<svelte:options />
<main>
  <button
    data-bs-toggle="tooltip"
    title="Tooltip on top"
    class="btn btn-outline-primary"
    on:click={() => ($count = $count + 1)}>
    {text}
  </button>
  <p>Clicked : {$count} times</p>
</main>

<style lang="scss">
  main {
    margin-bottom: 1rem;
  }
</style>
