export const calcNewPrice = (price, sale) => {
    return Math.floor(price * (100 - sale) / 100)
}

export const formatNumb = numb => {
    return Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(numb);
};