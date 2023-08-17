import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
    id: number;
    title: string;
    price: number;
    lists: string[];
};

interface CartState {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
}


export const useCartStore = create(
    persist<CartState>(
        (set) => ({

            cart: [],
            addToCart: (item) => set((state) => {
                if (state.cart.some((existingItem) => existingItem.id === item.id)) {
                    return state; // Item already exists, don't modify the state
                }
                return { cart: [...state.cart, item] }
            }),
            removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))
        }),
        {
            name: 'cart',
        }
    )
)

