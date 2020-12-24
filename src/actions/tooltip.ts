const defaultOptions = { title: '', placement: 'bottom', trigger: 'hover focus' };

const initTooltip = (node, options: bootstrap.TooltipOptions) => {
    options = { ...defaultOptions, ...options };
    if (bootstrap.Tooltip) {
        return new bootstrap.Tooltip(node, options)
    }
    return undefined;
}

export function tooltip(node, options: bootstrap.TooltipOptions) {
    let tt = initTooltip(node, options);

    return {
        update(options: bootstrap.TooltipOptions) {
            console.log('Tooltip Updated');
            if (tt) { tt.hide(); }
            tt = initTooltip(node, options);
        },
        destroy() {
            if (tt?.tip?.parentNode) { tt.dispose(); }
        }
    };
}