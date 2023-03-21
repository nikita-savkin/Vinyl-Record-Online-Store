import CartProductItem from '@widgets/Cart/components/CartProductItem/CartProductItem';
import {
  CartWrapper,
  CartTop,
  CartBackground,
  EmptyCartMessage,
  ProductsCartList,
  CartTotalBlock,
} from '@widgets/Cart/Cart.styles';
import { toggleCart } from '@widgets/Cart/reducer/cart-reducer';
import { useAppSelector, useAppDispatch } from '@shared/hooks/dispatch-selector';
import { CloseOutlined } from '@ant-design/icons';
import type { ProductFull } from '@shared/types/common-types';
import { useEffect, useState } from 'react';
import CommonButton from '@shared/ui/CommonButton/CommonButton';
import StripeCheckout from 'react-stripe-checkout';

const stripePublicTestKey =
  'pk_test_51JFwctFl3tttYBPMOBc3Asvfge33IZlFuE8g90jnoQ48J284PDzFE5m298Og6ONWogjF1PFWprWOvJQHxW2CcjbY00P6DR9TNU';

const Cart = () => {
  const dispatch = useAppDispatch();
  const selectedProducts = useAppSelector((state) => state.cart.selectedProducts);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let fullPrice = 0;

    selectedProducts.forEach((product) => {
      if (product.price) fullPrice += product.price;
    });

    setTotalPrice(fullPrice);
  }, [selectedProducts]);

  const onCloseHandle = () => {
    dispatch(toggleCart(false));
  };

  const onToken = () => {
    window.location.reload();
  };

  return (
    <>
      <CartBackground onClick={onCloseHandle} />
      <CartWrapper>
        <CartTop>
          <div>Your cart</div>
          <CloseOutlined onClick={onCloseHandle} />
        </CartTop>
        <ProductsCartList>
          {selectedProducts?.length === 0 ? (
            <EmptyCartMessage>Yor Cart is Empty</EmptyCartMessage>
          ) : (
            selectedProducts.map((product: ProductFull) => <CartProductItem key={product._id} product={product} />)
          )}
        </ProductsCartList>
        <CartTotalBlock>
          <div>
            <div>Grand Total</div>
            <div>{totalPrice}&#8364;</div>
          </div>
          <StripeCheckout
            disabled={totalPrice === 0}
            currency='EUR'
            label='Pay Now'
            name='Vinyl Store'
            billingAddress={false}
            zipCode={false}
            shippingAddress
            description='Payment for vinyl'
            amount={totalPrice * 100}
            token={onToken}
            stripeKey={stripePublicTestKey}
          >
            <CommonButton disabled={totalPrice === 0}>CHECKOUT</CommonButton>
          </StripeCheckout>
        </CartTotalBlock>
      </CartWrapper>
    </>
  );
};

export default Cart;
