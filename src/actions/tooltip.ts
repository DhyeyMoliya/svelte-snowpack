import { Tooltip } from "bootstrap";

const defaultOptions: TooltipOptions = { title: '', placement: 'bottom', trigger: 'hover focus' };
export type TooltipOptions = {
    title: string,
    placement?: "bottom" | 'auto' | 'top' | 'left' | 'right',
    boundary?: Element | "viewport" | "window" | "scrollParent",
    customClass?: string,
    trigger?: "hover focus" | "click" | "hover" | "focus" | "manual" | "click hover" | "click focus" | "click hover focus",
    disabled?: boolean
};


const initTooltip = (node, options?: TooltipOptions): Tooltip => {
    options = { ...defaultOptions, ...options };
    if (Tooltip) {
        return new Tooltip(node, options)
    }
    return undefined;
}

export function tooltip(node, options?: TooltipOptions) {
    let tt = initTooltip(node, options);

    return {
        update(options?: TooltipOptions) {
            console.log('Tooltip Updated', tt);
            if (tt) { tt.hide(); }
            tt = initTooltip(node, options);
        },
        destroy() {
            if (tt) {
                tt.dispose();
            }
        }
    };
}