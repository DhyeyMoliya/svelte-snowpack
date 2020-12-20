<script>
    import Counter from "$components/Counter.svelte";
    import { count } from "$stores/counter";
</script>

<div class="App">
    <Counter />
    <p>Count : {$count}</p>
</div>
