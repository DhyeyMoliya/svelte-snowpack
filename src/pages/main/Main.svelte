<script lang="ts">
  import { logout } from "$stores/user";
  import { active } from "tinro";
</script>

<main>
  <div class="header">
    <h1 class="my-0 d-flex align-items-center">
      <span>Svelte Snowpack App</span>
    </h1>
    <button
      class="btn btn-outline-primary ms-2 btn-sm"
      type="button"
      on:click={logout}
    >
      Logout
    </button>
  </div>
  <div class="main-content">
    <div class="side-menu">
      <a class="btn btn-link" href="/" use:active data-exact> Dashboard </a>
      <a class="btn btn-link" href="/user-roles" use:active>User Roles</a>
      <a class="btn btn-link" href="/users" use:active>Users</a>
    </div>
    <div class="page-content">
      <slot />
    </div>
  </div>
</main>

<style lang="scss">
  :global(a.active) {
    color: red;
  }
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
  }

  .main-content {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid #dddddd;
    padding: 1rem 0.5rem;
    width: 200px;
    flex-shrink: 0;
  }

  .page-content {
    padding: 1rem;
    flex-grow: 1;
  }
</style>
