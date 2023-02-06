import CartProductItem from '@widgets/Cart/components/CartProductItem/CartProductItem';
import { CartWrapper, CartTop } from '@widgets/Cart/Cart.styles';

const Cart = ({ showCart, toggleCart }: { showCart: boolean; toggleCart: CallableFunction }) => {
  const onCloseHandle = () => {
    toggleCart(false);
  };

  return (
    <CartWrapper>
      <CartTop>
        <div>Your cart</div>
        <div onClick={onCloseHandle}>Close</div>
      </CartTop>
      <div>
        <CartProductItem />
      </div>
    </CartWrapper>
  );
};

export default Cart;
