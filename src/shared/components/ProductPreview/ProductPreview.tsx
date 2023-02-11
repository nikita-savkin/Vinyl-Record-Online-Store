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

const ProductPreview = ({ id, author, albumName, price, storageImgUrl }: ProductFull) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (storageImgUrl?.length) {
      const fetchData = async () => {
        const data = await getStorageFileUrl(storageImgUrl);
        setImageUrl(data);
      };

      fetchData().catch((e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <ProductPreviewWrapper to={`/product/${id}`}>
      <ImageWrapper>
        <ImageTemplate src='/img/vinyl-template.png' alt='vinyl-template' />
        <ImageCover src={imageUrl} alt='vinyl-cover' />
      </ImageWrapper>
      <ProductName>
        {author} - {albumName}
      </ProductName>
      <ProductPrice>&#8364;{price}</ProductPrice>
    </ProductPreviewWrapper>
  );
};

ProductPreview.defaultProps = {
  id: null,
  author: 'Product Title',
  price: 0,
  storageImgUrl: '',
};

export default ProductPreview;
