/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript'
  ],
  install: [
    /* ... */
    'svelte',
    '@popperjs/core',
    'bootstrap',
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
    "$components": "./src/components",
    "$stores": "./src/stores",
    "$helpers": "./src/helpers"
  },
};
