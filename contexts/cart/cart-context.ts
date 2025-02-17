import { createContext, useContext } from 'react';

interface CartContextType {
	cart: string[];
	addToCart: (gameId: string) => void;
	removeFromCart: (gameId: string) => void;
}

const cartContextDefaultValue: CartContextType = {
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
};

export const cartContext = createContext<CartContextType>(
	cartContextDefaultValue,
);
export const useCartContext = () => useContext(cartContext);
