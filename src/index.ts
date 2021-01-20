import App from "./App.svelte";
import * as Popper from '@popperjs/core';
import * as bootstrap from 'bootstrap';
(window as any).bootstrap = bootstrap;
(window as any).Popper = Popper;

let app = new App({
    target: document.body
})

export default app;
