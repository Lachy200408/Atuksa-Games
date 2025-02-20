import { createContext, useContext } from 'react';

interface CartContextType {
	cart: string[];
	addToCart: (gameId: string) => void;
	removeFromCart: (gameId: string) => void;
	clearCart: () => void;
}

const cartContextDefaultValue: CartContextType = {
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {},
};

export const cartContext = createContext<CartContextType>(
	cartContextDefaultValue,
);
export const useCartContext = () => useContext(cartContext);
