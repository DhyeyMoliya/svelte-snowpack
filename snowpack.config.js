/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    minify: true,
  },
  mount: {
    public: '/',
    src: '/dist',
  },
  exclude: ['**/_*.scss'],
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-sass', { compilerOptions: { sourceMap: false, style: 'compressed', noCharset: true } }],
  ],
  alias: {
    "$components": "./src/components",
    "$stores": "./src/stores",
    "$helpers": "./src/helpers",
    "$actions": "./src/actions",
    "$pages": "./src/pages",
  },
  routes: [
    { "match": "routes", "src": ".*", "dest": "/index.html" }
  ],
  buildOptions: {
    sourcemap: true,
  },
};
