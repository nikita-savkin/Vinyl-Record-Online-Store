import { Button } from 'antd';
import { ProductCardWrapper, Cover, Description, ButtonsWrapper } from '@pages/ProductCard/ProductCard.styles';
import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '@shared/context/cart-context/cart-context';
import { ProductsContext } from '@shared/context/products-context/products-context';
import { Product } from '@shared/context/products-context/types/types';
import { getStorageFileUrl } from '@shared/firebase/utils/get-storage-file-url';

const productDefault = {
  id: null,
  author: '',
  albumName: '',
  label: '',
  genre: [],
  format: '',
  storageImgUrl: '',
  price: null,
};

const ProductCard = () => {
  const params = useParams();
  const { dispatch } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const [product, setProduct] = useState<Product>(productDefault);
  const [imageUrl, setImageUrl] = useState('');

  const { author, albumName, format, price } = product;

  useEffect(() => {
    if (params.id) {
      const currentProductId = Number(params.id);
      const currentProduct = products.find((product) => product.id === currentProductId);

      if (currentProduct) setProduct(currentProduct);

      if (currentProduct?.storageImgUrl?.length) {
        const fetchData = async () => {
          const data = await getStorageFileUrl(currentProduct.storageImgUrl);
          setImageUrl(data);
        };

        fetchData().catch((e) => {
          console.error(e);
        });
      }
    }
  }, [products]);

  const addProductToCart = () => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  return (
    <ProductCardWrapper>
      <Cover>
        <img src={imageUrl} alt='product-cover' />
      </Cover>
      <Description>
        <h1>
          <span>{author}</span>
          <br />
          <span>{albumName}</span>
          <br />
          <span>{format}</span>
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
