<script lang="ts">
  import { Subscription } from "$helpers/subscription";

  import { count } from "$stores/counter";
  import { onDestroy } from "svelte";

  const subscription = new Subscription(count.subscribe(console.log));
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

<main>
  <button
    data-bs-toggle="tooltip"
    title="Tooltip on top"
    class="btn btn-outline-primary"
    on:click={() => ($count = $count + 1)}>
    Counter :
    {$count}
  </button>
</main>

<style lang="scss">
  main {
    margin-bottom: 1rem;
  }
</style>
