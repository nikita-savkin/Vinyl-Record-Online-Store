import CartProductItem from '@widgets/Cart/components/CartProductItem/CartProductItem';
import { CartWrapper, CartTop } from '@widgets/Cart/Cart.styles';
import { useContext } from 'react';
import { CartContext } from '@shared/context/cart-context/cart-context';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const onCloseHandle = () => {
    dispatch({ type: 'TOGGLE_CART', payload: false });
  };

  console.log(state);

  return (
    <CartWrapper showCart={state.showCart}>
      <CartTop>
        <div>Your cart</div>
        <div onClick={onCloseHandle}>Close</div>
      </CartTop>
      <div>
        {state.selectedProducts.map(() => {
          return <CartProductItem />;
        })}
      </div>
    </CartWrapper>
  );
};

export default Cart;
