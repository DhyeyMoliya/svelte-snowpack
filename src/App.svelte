<script lang="ts">
  import { Route } from "tinro";

  import { user } from "$stores/user";

  import Main from "$pages/main/Main.svelte";
  import Lazy from "$components/Lazy.svelte";
  import Theme from "$pages/theme/Theme.svelte";
</script>

<Route>
  <Route path="/*" firstmatch>
    <Route path="/theme"><Theme /></Route>
    {#if $user}
      <Route path="/*">
        <Main>
          <Route path="/">
            <Lazy
              component={() => import("$pages/main/dashboard/Dashboard.svelte")}
            />
          </Route>
          <Route path="/user-roles">
            <Lazy
              component={() =>
                import("$pages/main/users/user-roles/UserRoles.svelte")}
            />
          </Route>
          <Route path="/users">
            <Lazy component={() => import("$pages/main/users/Users.svelte")} />
          </Route>
        </Main>
      </Route>
      <Route fallback redirect="/" />
    {:else}
      <Route path="/login">
        <Lazy component={() => import("$pages/login/Login.svelte")} />
      </Route>
      <Route fallback redirect="/login" />
    {/if}
  </Route>
  <Route fallback redirect="/login" />
</Route>
