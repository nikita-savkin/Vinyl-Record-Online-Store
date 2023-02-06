import { Button } from 'antd';
import { ProductCardWrapper, Cover, Description, ButtonsWrapper } from '@pages/ProductCard/ProductCard.styles';

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <Cover>
        <img src='/img/vinyl-template.png' alt='product-cover' />
      </Cover>
      <Description>
        <h1>
          <span>title</span>
          <br />
          <span>subtitle</span>
          <br />
          <span>some</span>
        </h1>
        <span>100</span>
        <p>some text</p>
        <ButtonsWrapper>
          <Button type='primary'>Add To Cart</Button>
          <Button type='primary'>Wishlist</Button>
        </ButtonsWrapper>
      </Description>
    </ProductCardWrapper>
  );
};

export default ProductCard;
