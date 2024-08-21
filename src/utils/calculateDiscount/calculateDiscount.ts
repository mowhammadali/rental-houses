export const calculateDiscount = (discount: number, price: string): string => {
    const numbericPrice: number = +price;
    const newPrice = (numbericPrice - (numbericPrice * (discount / 100))).toString();
    
    return newPrice;
}