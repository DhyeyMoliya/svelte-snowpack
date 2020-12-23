type TooltipOptions = {
    title: string,
    placement?: string,
    boundary?: string,
    customClass?: string,
    trigger?: string,
};

const defaultOptions = {
    title: '',
    placement: 'bottom',
    trigger: 'hover focus'
};

const initTooltip = (node, options: TooltipOptions) => {
    return bootstrap?.Tooltip ? new bootstrap.Tooltip(node, options) : undefined;
}

export function tooltip(node, options: TooltipOptions) {
    options = { ...defaultOptions, ...options };
    initTooltip(node, options);

    return {
        update(options: TooltipOptions) {
            if (bootstrap?.Tooltip) {
                const tt = bootstrap?.Tooltip?.getInstance(node);
                if (tt) {
                    tt.hide();
                }
            }
            options = { ...defaultOptions, ...options };
            initTooltip(node, options);
        },
        destroy() {
            if (bootstrap?.Tooltip) {
                const tt = bootstrap?.Tooltip?.getInstance(node);
                if (tt?.tip?.parentNode) {
                    tt.dispose();
                }
            }
        }
    };
}