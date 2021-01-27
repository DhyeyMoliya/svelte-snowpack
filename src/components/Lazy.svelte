<script lang="ts">
  export let component;
</script>

{#await component.then ? component : component() then Cmp}
  <svelte:component this={Cmp.default} />
{/await}
