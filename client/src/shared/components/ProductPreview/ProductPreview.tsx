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

interface ProductPreviewProps {
  product: ProductFull;
}

const ProductPreview: FC<ProductPreviewProps> = ({ product }: ProductPreviewProps) => {
  const { uid, artist, album, price, storageImgUrl } = product;
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
    <ProductPreviewWrapper to={`/product/${uid}`}>
      <ImageWrapper>
        <ImageTemplate src='/img/vinyl-template.png' alt='vinyl-template' />
        <ImageCover src={imageUrl} alt='vinyl-cover' />
      </ImageWrapper>
      <ProductName>
        {artist} - {album}
      </ProductName>
      <ProductPrice>&#8364;{price}</ProductPrice>
    </ProductPreviewWrapper>
  );
};

ProductPreview.defaultProps = {
  product: {
    uid: '',
    artist: 'Joy Division',
    album: 'Unknown Pleasures',
    label: 'Mofi',
    storageImgUrl: 'covers/unknown-pleasures.jpeg',
    price: 50,
    genre: ['Punk', 'Rock'],
    year: '60',
  },
};

export default ProductPreview;
