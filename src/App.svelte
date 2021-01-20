<script lang="ts">
  import Counter from "$components/Counter.svelte";
  import { count } from "$stores/counter";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { tooltip } from "$actions/tooltip";

  const progress = tweened(0, { duration: 500, easing: cubicOut });
  count.subscribe(progress.set);

  $: tooltipTitle = `Reset Value from ${$count} to 0`;

  const counterValueChange = (ev) =>
    count.set(+(ev.target as HTMLInputElement).value);
</script>

<div class="App">
  <Counter text="Click Me!" />
  <div class="row gx-3 align-items-center">
    <div class="col-auto">
      <button
        class="btn btn-outline-dark rounded-pill"
        on:click={() => count.set(0)}
        use:tooltip={{ title: tooltipTitle, disabled: $count <= 0 }}
        disabled={$count <= 0}>
        <i class="bi-arrow-counterclockwise"></i>
        Reset
      </button>
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
        style="min-width: 300px"
        type="text"
        bind:value={tooltipTitle} />
    </div>
    <div class="col-auto">
      <label for="tooltipTitle">Counter Value</label>
      <input
        name="tooltipTitle"
        class="form-control"
        type="number"
        value={$count}
        on:keyup={counterValueChange} />
    </div>
  </div>
</div>

<style lang="scss">
  .App {
    padding: 1rem;
  }
</style>
