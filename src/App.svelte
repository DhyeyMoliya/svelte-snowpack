<script lang="ts">
  import Counter from "$components/Counter.svelte";
  import { count } from "$stores/counter";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { tooltip } from "$actions/tooltip";

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
  count.subscribe((val) => progress.set(val));
  let tooltipTitle = "Reset";
  setTimeout(() => (tooltipTitle += " Counter Value"), 3000);
</script>

<div class="App">
  <Counter text="Click me!" />
  <div class="d-flex flex-row align-items-center">
    <button
      class="btn btn-outline-dark rounded-pill"
      on:click={() => count.set(0)}
      use:tooltip={{ title: tooltipTitle }}>Reset</button>
    <p class="ms-2 m-0">Counter Value : {Math.round($progress)}</p>
  </div>
</div>

<style lang="scss">
  .App {
    padding: 1rem;
  }
</style>
