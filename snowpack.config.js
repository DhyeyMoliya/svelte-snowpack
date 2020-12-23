/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass'
  ],
  install: [
    /* ... */
    'svelte',
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
  experiments: {
    optimize: true,
    // source: "skypack",
  }
};
