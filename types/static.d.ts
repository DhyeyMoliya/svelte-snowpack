/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

//#region Ensure Svelte file endings have a type for TypeScript
/**
 * These declarations tell TypeScript that we allow import of Svelte files in TS files, e.g.
 * ```
        import Component from './Component.svelte';
     ```
 */
declare module '*.svelte' {
    export { SvelteComponent as default } from 'svelte';
}
//#endregion

/* CSS MODULES */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.styl' {
    const classes: { [key: string]: string };
    export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
    const ref: string;
    export default ref;
}
declare module '*.bmp' {
    const ref: string;
    export default ref;
}
declare module '*.gif' {
    const ref: string;
    export default ref;
}
declare module '*.jpg' {
    const ref: string;
    export default ref;
}
declare module '*.jpeg' {
    const ref: string;
    export default ref;
}
declare module '*.png' {
    const ref: string;
    export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */

//#region Bootstrap Declarations

declare type TooltipOptions = { title: string, placement?: string, boundary?: string, customClass?: string, trigger?: string, disabled?: boolean };

//#endregion