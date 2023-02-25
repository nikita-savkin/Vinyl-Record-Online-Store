import StartedBanner from '@pages/Home/components/StartedBanner/StartedBanner';
import PageSection from '@shared/components/PageSection/PageSection';
import ProductPreview from '@shared/components/ProductPreview/ProductPreview';

const Home = () => {
  return (
    <main>
      <StartedBanner />
      <PageSection sectionTop={{ title: 'Popular Vinyl', btnTitle: 'Show More' }}>
        <div className='popular-products'>
          <ProductPreview />
        </div>
      </PageSection>
    </main>
  );
};

export default Home;
