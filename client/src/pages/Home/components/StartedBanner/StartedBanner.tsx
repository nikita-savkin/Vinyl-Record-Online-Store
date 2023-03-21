import LinkButton from '@shared/ui/LinkButton/LinkButton';
import { StartedBannerWrapper, BannerLeft, BannerRight, Info } from './StartedBanner.styles';

const StartedBanner = () => {
  return (
    <StartedBannerWrapper>
      <BannerLeft>
        <img src='/img/started-banner-1.png' alt='started-banner-1' />
      </BannerLeft>
      <Info>
        <h1>HERE AT THE VINYL ADVENTURE...</h1>
        <p>
          We are passionate about sound quality, we stock the very best audiophile grade vinyl records and have probably
          the largest stockholding in the UK
        </p>
        <LinkButton link='/products' title='Show all' />
      </Info>
      <BannerRight>
        <img src='/img/started-banner-2.png' alt='started-banner-1' />
      </BannerRight>
    </StartedBannerWrapper>
  );
};

export default StartedBanner;
