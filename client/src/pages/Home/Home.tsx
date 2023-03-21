import StartedBanner from '@pages/Home/components/StartedBanner/StartedBanner';
import PageSection from '@shared/components/PageSection/PageSection';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { getFetchProducts } from '@pages/Products/reducer/products-reducer';
import { useAppDispatch, useAppSelector } from '@shared/hooks/dispatch-selector';

import 'swiper/css';

const Home = () => {
  const dispatch = useAppDispatch();
  const { allProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    const params = {
      page: 2,
      limit: 12,
      sorting: {
        sortBy: '_id',
        direction: 'asc',
      },
    };

    dispatch(getFetchProducts({ params }));
  }, []);

  return (
    <main>
      <StartedBanner />
      <PageSection title={'Popular Vinyl'} btnTitle={'Show more'} btnLink={'/products'}>
        <div className='popular-products'>
          <Swiper style={{ padding: '20px' }} className='mySwiper' spaceBetween={60} slidesPerView='auto'>
            {allProducts?.map((product) => (
              <SwiperSlide style={{ width: '320px' }} key={product._id}>
                <ProductPreview product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </PageSection>
    </main>
  );
};

export default Home;
