<script lang="ts">
    import { count } from "$stores/counter";
    import { onDestroy } from "svelte";

    const unsubscribe = count.subscribe(console.log);
    (async () => {
        const res = await fetch("http://localhost:4000/api/todos");
        console.log("Res :", res);
        if (res?.ok) {
            const todos = await res.json();
            console.log(todos);
        }
    })();
    onDestroy(unsubscribe);
</script>

<style lang="scss">
    main {
        padding: 1rem;
    }
</style>

<main>
    <button
        data-bs-toggle="tooltip"
        title="Tooltip on top"
        class="btn btn-outline-primary"
        on:click={() => ($count = $count + 1)}>Counter :
        {$count}</button>
</main>
