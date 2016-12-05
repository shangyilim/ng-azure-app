export interface Product {
    id: number;
    name: string;
    image: string;
    price: {
        amount: number;
        currency: string;
    }
}