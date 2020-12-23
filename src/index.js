import App from "./App.svelte";
import * as bootstrap from 'bootstrap';
import * as Popper from '@popperjs/core';
window.bootstrap = bootstrap;
window.Popper = Popper;

let app = new App({
    target: document.body
})

export default app;
