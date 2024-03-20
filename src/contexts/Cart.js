import { createContext, useContext } from "react";

export const CartContext = createContext({
  selectedCourse: [],
  setSelectedCourses: () => {},
});

export const CartProvider = CartContext.Provider;

export default function useCart() {
  return useContext(CartContext);
}
