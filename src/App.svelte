<script lang="ts">
  import Counter from "$components/Counter.svelte";
  import { count } from "$stores/counter";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
  count.subscribe((val) => progress.set(val));
</script>

<div class="App">
  <Counter text="Click me!" />
  <button
    class="btn btn-outline-secondary"
    on:click={() => count.set(0)}>Reset</button>
  <p>Clicked Counter Value : {Math.round($progress)}</p>
</div>

<style lang="scss">
  .App {
    padding: 1rem;
  }
</style>
