<script>
  import { login } from "$stores/user";

  let email = "";
  let password = "";
  const onLogin = async () => {
    console.log({ email, password });
    login({ user: { _id: 1, name: "John Doe" }, token: "asdasd" });
  };
</script>

<svelte:head>
  <title>Login | Svelte</title>
</svelte:head>

<main>
  <h1>Login</h1>
  <form class="d-flex flex-column align-items-center">
    <input
      class="form-control mb-2"
      type="text"
      name="email"
      placeholder="Email"
      bind:value={email}
    />
    <input
      class="form-control mb-2"
      type="password"
      name="password"
      placeholder="Password"
      bind:value={password}
    />
    <button
      class="btn btn-primary"
      on:click={onLogin}
      disabled={!email || !password}
    >
      Login
      <i class="bi-arrow-right" />
    </button>
  </form>
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
