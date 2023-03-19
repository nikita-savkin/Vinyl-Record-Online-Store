import { Button } from 'antd';
import { ProductCardWrapper, Cover, Description, ButtonsWrapper } from '@pages/ProductCard/ProductCard.styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStorageFileUrl } from '@shared/firebase/utils/get-storage-file-url';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { addProduct } from '@widgets/Cart/reducer/cart-reducer';
import { ProductFull } from '@shared/types/common-types';
import { getFetchProduct } from '@pages/ProductCard/reducer/product-card-reducer';

const productDefault = {
  _id: null,
  artist: '',
  album: '',
  label: '',
  genre: [],
  storageImgUrl: '',
  price: null,
  year: '',
};

const ProductCard = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { artist, album, price, storageImgUrl, label } = useAppSelector((state) => state.productCard.product);

  const [imageUrl, setImageUrl] = useState('');

  // const { artist, album, price, storageImgUrl, label } = product;

  useEffect(() => {
    if (params.id) dispatch(getFetchProduct(params.id));
  }, []);

  // useEffect(() => {
  //   if (params.id) {
  //     const currentProduct = products.find((product) => product._id === params.id);
  //
  //     if (currentProduct) setProduct(currentProduct);
  //
  //     if (currentProduct?.storageImgUrl?.length) {
  //       const fetchData = async () => {
  //         const data = await getStorageFileUrl(currentProduct.storageImgUrl);
  //         setImageUrl(data);
  //       };
  //
  //       fetchData().catch((e) => {
  //         console.error(e);
  //       });
  //     }
  //   }
  // }, [products]);

  const addProductToCart = () => {
    // dispatch(addProduct(product));
  };

  return (
    <ProductCardWrapper>
      <Cover>
        <img src={imageUrl} alt='product-cover' />
      </Cover>
      <Description>
        <h1>
          <span>{artist}</span>
          <br />
          <span>{album}</span>
          <br />
          <span>{label}</span>
        </h1>
        <span>{price}</span>
        <p>description</p>
        <ButtonsWrapper>
          <Button onClick={addProductToCart} type='primary'>
            Add To Cart
          </Button>
          <Button type='primary'>Wishlist</Button>
        </ButtonsWrapper>
      </Description>
    </ProductCardWrapper>
  );
};

export default ProductCard;
