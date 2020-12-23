<script>
    import Counter from "$components/Counter.svelte";
    import { count } from "$stores/counter";
    let hide = false;
</script>

<style lang="scss">
    .App {
        padding: 1rem;
    }
</style>

<div class="App">
    {#if !hide}
        <Counter />
    {/if}
    <Counter />
    <button
        class="btn btn-outline-secondary"
        on:click={() => (hide = !hide)}>Toggle</button>
    <p>Count : {$count}</p>
</div>
