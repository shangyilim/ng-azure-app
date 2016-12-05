export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    productId: number;
    productName: string;
    productImage: string;
    unitPrice: {
        amount: number;
        currency: string;
    }
    quantity: number;
}