type TooltipOptions = { title: string, placement?: string, boundary?: string, customClass?: string, trigger?: string, };

const defaultOptions = { title: '', placement: 'bottom', trigger: 'hover focus' };

const initTooltip = (node, options: TooltipOptions) => {
    options = { ...defaultOptions, ...options };
    if (bootstrap?.Tooltip) {
        return new bootstrap.Tooltip(node, options)
    }
    return undefined;
}

export function tooltip(node, options: TooltipOptions) {
    let tt = initTooltip(node, options);

    return {
        update(options: TooltipOptions) {
            if (tt) {
                tt.hide();
            }
            tt = initTooltip(node, options);
        },
        destroy() {
            if (tt?.tip?.parentNode) {
                tt.dispose();
            }
        }
    };
}