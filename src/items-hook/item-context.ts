import { createContext, useContext } from "react";


export interface ShoppingItem {
    id: number;
    name: string;
    desc: string;
    imageUrl: string;
    price: number;
}

interface Context {
    items: ShoppingItem[];
    addItem(item: ShoppingItem): void;
    removeItem(item: ShoppingItem): void;
}

export const ItemContext = createContext<Context>({
    items: [],
    addItem: (item: ShoppingItem) => { console.log(item) },
    removeItem: (item: ShoppingItem) => { console.log(item) }
});

export function useItems() {
    return useContext(ItemContext);
}