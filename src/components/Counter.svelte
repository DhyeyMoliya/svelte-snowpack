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

<main>
  <div class="d-flex flex-row align-items-center">
    <button
      class="btn btn-outline-primary rounded-pill"
      on:click={() => ($count = $count + 1)}>
      <i class="bi-hand-index-thumb"></i>
      {text}
    </button>
    <p class="ms-2 m-0">Clicked : {$count} times</p>
  </div>
</main>

<style lang="scss">
  main {
    margin-bottom: 1rem;
  }
</style>
