import {
  CartProductItemWrapper,
  Description,
  PoductImage,
  DescrTop,
} from '@widgets/Cart/components/CartProductItem/CartProductItem.styles';
import { useAppDispatch } from '@shared/hooks/dispatch-selector';
import { removeProduct } from '@widgets/Cart/reducer/cart-reducer';

const CartProductItem = ({ id }: { id: number | null }) => {
  const dispatch = useAppDispatch();

  const removeHandle = () => {
    dispatch(removeProduct(id));
  };

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
          <div onClick={removeHandle}>Remove</div>
        </DescrTop>
        <div>price</div>
      </Description>
    </CartProductItemWrapper>
  );
};

export default CartProductItem;
