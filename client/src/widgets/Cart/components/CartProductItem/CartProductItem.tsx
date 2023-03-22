import {
  CartProductItemWrapper,
  Description,
  PoductImage,
  DescrTop,
} from '@widgets/Cart/components/CartProductItem/CartProductItem.styles';
import { useAppDispatch } from '@shared/hooks/dispatch-selector';
import { removeProduct } from '@widgets/Cart/reducer/cart-reducer';
import { ProductFull } from '@shared/types/common-types';
import capitalizeString from '@shared/utils/capitalize-string';
import { CloseCircleOutlined } from '@ant-design/icons';

const CartProductItem = ({ product }: { product: ProductFull }) => {
  const dispatch = useAppDispatch();
  const { artist, album, storageImgUrl, price } = product;

  const removeHandle = () => {
    dispatch(removeProduct(product._id));
  };

  return (
    <CartProductItemWrapper>
      <PoductImage>
        <img src={storageImgUrl} alt='product-cover' />
      </PoductImage>
      <Description>
        <DescrTop>
          <div>
            <h6>{capitalizeString(artist)}</h6>
            <h6>{capitalizeString(album)}</h6>
          </div>
          <CloseCircleOutlined onClick={removeHandle} />
        </DescrTop>
        <span className='desc-price'>{price}&#8364;</span>
      </Description>
    </CartProductItemWrapper>
  );
};

export default CartProductItem;
