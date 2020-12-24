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
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    open: "none"
  },
  buildOptions: {
    /* ... */
    clean: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
    "$components": "./src/components",
    "$stores": "./src/stores",
    "$helpers": "./src/helpers",
    "$actions": "./src/actions",
  },
  experiments: {
    // optimize: true,
    // source: "skypack",
  }
};
