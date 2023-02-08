import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { Product } from '@shared/context/products-context/types/types';

interface CartState {
  showCart: boolean;
  selectedProducts: Product[] | [];
}

export interface CartContext {
  state: CartState;
  dispatch: Dispatch<{ type: string; payload: any }>;
}

export const CartContext = createContext<CartContext>({
  state: {
    showCart: false,
    selectedProducts: [],
  },
  dispatch: () => {},
});

const actions = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_PRODUCT: 'ADD_PRODUCT',
};

const initialState = {
  showCart: false,
  selectedProducts: [],
};

const reducer = (state: CartState, action: any) => {
  switch (action.type) {
    case actions.TOGGLE_CART:
      return {
        ...state,
        showCart: action.payload,
      };
    case actions.ADD_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
