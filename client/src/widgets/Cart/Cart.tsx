import CartProductItem from '@widgets/Cart/components/CartProductItem/CartProductItem';
import { CartWrapper, CartTop } from '@widgets/Cart/Cart.styles';
import { toggleCart } from '@widgets/Cart/reducer/cart-reducer';
import { useAppSelector, useAppDispatch } from '@shared/hooks/dispatch-selector';

const Cart = () => {
  const showCart = useAppSelector((state) => state.cart.showCart);
  const selectedProducts = useAppSelector((state) => state.cart.selectedProducts);
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(toggleCart(false));
  };

  return (
    <CartWrapper showCart={showCart}>
      <CartTop>
        <div>Your cart</div>
        <div onClick={onCloseHandle}>Close</div>
      </CartTop>
      <div>
        {selectedProducts.map((product) => {
          return <CartProductItem id={product.id} />;
        })}
      </div>
    </CartWrapper>
  );
};

export default Cart;
