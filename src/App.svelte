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
  <div class="row gx-3 align-items-center">
    <div class="col-auto">
      <button
        class="btn btn-outline-dark rounded-pill"
        on:click={() => count.set(0)}
        use:tooltip={{ title: tooltipTitle, disabled: $count <= 0 }}
        disabled={$count <= 0}>Reset</button>
    </div>
    <div class="col-auto">
      <span>Counter Value : {Math.round($progress)}</span>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-auto">
      <label for="tooltipTitle">Tooltip Title</label>
      <input
        name="tooltipTitle"
        class="form-control"
        type="text"
        bind:value={tooltipTitle} />
    </div>
  </div>
</div>

<style lang="scss">
  .App {
    padding: 1rem;
  }
</style>
