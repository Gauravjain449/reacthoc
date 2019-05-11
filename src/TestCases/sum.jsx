export const sum = (a, b) => {
    return a + b;
}

export const total = (shipping, subtotal) => {
    return '$' + sum(shipping, subtotal);
}
