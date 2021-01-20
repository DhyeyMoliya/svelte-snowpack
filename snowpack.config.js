/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
    styles: '/styles',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],
  alias: {
    "$components": "./src/components",
    "$stores": "./src/stores",
    "$helpers": "./src/helpers",
    "$actions": "./src/actions",
  },
};
