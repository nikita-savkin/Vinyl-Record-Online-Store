import {
  ProductCardWrapper,
  Cover,
  Description,
  ButtonsWrapper,
  GenreItem,
} from '@pages/ProductCard/ProductCard.styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStorageFileUrl } from '@shared/firebase/utils/get-storage-file-url';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';
import { addProduct } from '@widgets/Cart/reducer/cart-reducer';
import { getFetchProduct } from '@pages/ProductCard/reducer/product-card-reducer';
import CommonButton from '@shared/ui/CommonButton/CommonButton';
import capitalizeString from '@shared/utils/capitalize-string';
import { Spin } from 'antd/lib';

const ProductCard = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productCard.product);
  const { artist, album, price, storageImgUrl, label, genre, desc } = product;
  const [imageUrl, setImageUrl] = useState('/img/vinyl-template.png');
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (params.id) dispatch(getFetchProduct(params.id));
  }, []);

  useEffect(() => {
    setImageLoading(true);
    if (storageImgUrl?.length) {
      const fetchData = async () => {
        const data = await getStorageFileUrl(storageImgUrl);
        setImageUrl(data);
        setTimeout(() => {
          setImageLoading(false);
        }, 1000);
      };

      fetchData().catch((e) => {
        console.error(e);
      });
    }
  }, [storageImgUrl]);

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <ProductCardWrapper>
      <Cover>{imageLoading ? <Spin size='large' /> : <img src={imageUrl} alt='product-cover' />}</Cover>
      <Description>
        <h1>
          <span>{artist}</span>
          <br />
          <span>{album}</span>
        </h1>
        <h2>Label: {label.toUpperCase()}</h2>
        <span>{price}&#8364;</span>
        <p>{desc}</p>
        <div className='genre-block'>
          {genre?.map((item: string, idx: number) => (
            <GenreItem key={idx}>{capitalizeString(item)}</GenreItem>
          ))}
        </div>
        <ButtonsWrapper>
          <CommonButton onClick={addProductToCart}>Add To Cart</CommonButton>
        </ButtonsWrapper>
      </Description>
    </ProductCardWrapper>
  );
};

export default ProductCard;
