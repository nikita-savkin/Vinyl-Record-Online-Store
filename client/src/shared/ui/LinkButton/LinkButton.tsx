import ArrowLongSvg from '@shared/assets/icons/ArrowLongSvg';
import { LinkButtonWrapper } from '@shared/ui/LinkButton/LinkButton.styles';

interface LinkButtonType {
  title?: string;
  link?: string;
}

const LinkButton = ({ title, link = '' }: LinkButtonType) => {
  return (
    <LinkButtonWrapper to={link}>
      <span>{title}</span>
      <ArrowLongSvg />
    </LinkButtonWrapper>
  );
};

LinkButton.defaultProps = {
  title: 'Button Title',
  link: '',
};

export default LinkButton;
