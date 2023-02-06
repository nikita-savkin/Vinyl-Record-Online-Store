import {
  CartProductItemWrapper,
  Description,
  PoductImage,
  DescrTop,
} from '@widgets/Cart/components/CartProductItem/CartProductItem.styles';

const CartProductItem = () => {
  return (
    <CartProductItemWrapper>
      <PoductImage>
        <img src='/img/vinyl-template.png' alt='product-cover' />
      </PoductImage>
      <Description>
        <DescrTop>
          <div>
            <span>author - album</span>
            <br />
            <span>label</span>
          </div>
          <div>Remove</div>
        </DescrTop>
        <div>price</div>
      </Description>
    </CartProductItemWrapper>
  );
};

export default CartProductItem;
