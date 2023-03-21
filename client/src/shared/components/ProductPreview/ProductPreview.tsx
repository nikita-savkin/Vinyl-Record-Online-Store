import { FC } from 'react';
import { useEffect, useState } from 'react';
import { getStorageFileUrl } from '@shared/firebase/utils/get-storage-file-url';
import { ProductFull } from '@shared/types/common-types';
import {
  ProductPreviewWrapper,
  ImageWrapper,
  ImageTemplate,
  ImageCover,
  ProductName,
  ProductPrice,
} from './ProductPreview.styles';
import capitalizeString from '@shared/utils/capitalize-string';
import { Spin } from 'antd';

interface ProductPreviewProps {
  product: ProductFull;
}

const ProductPreview: FC<ProductPreviewProps> = ({ product }: ProductPreviewProps) => {
  const { _id, artist, album, price, storageImgUrl } = product;
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (storageImgUrl?.length) {
      setImageLoading(true);

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
  }, []);

  return (
    <ProductPreviewWrapper to={`/product/${_id}`}>
      <ImageWrapper>
        {imageLoading ? (
          <Spin size='large' />
        ) : (
          <>
            <ImageTemplate src='/img/vinyl-template.png' alt='vinyl-template' />
            <ImageCover src={imageUrl} alt='vinyl-cover' />
          </>
        )}
      </ImageWrapper>
      <ProductName>
        <div>
          <h4>{capitalizeString(artist)}</h4>
          <h5>{capitalizeString(album)}</h5>
        </div>
        <ProductPrice>&#8364;{price}</ProductPrice>
      </ProductName>
    </ProductPreviewWrapper>
  );
};

ProductPreview.defaultProps = {
  product: {
    _id: '',
    artist: '',
    album: '',
    label: '',
    storageImgUrl: '',
    price: 0,
    genre: [],
    year: '',
  },
};

export default ProductPreview;
