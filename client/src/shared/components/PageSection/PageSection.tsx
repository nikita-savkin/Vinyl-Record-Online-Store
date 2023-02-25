import LinkButton from '@shared/ui/LinkButton/LinkButton';

import { PageSectionWrapper, Top } from './PageSection.styles';

interface PageSectionPropsType {
  sectionTop?: {
    title: string;
    btnTitle?: string;
    btnLink?: string;
  };
  children?: JSX.Element;
}

const PageSectionDefaultProps: PageSectionPropsType = {
  sectionTop: {
    title: 'Section Title',
  },
};

const PageSection = ({ sectionTop, children }: PageSectionPropsType) => {
  const { title, btnTitle, btnLink } = sectionTop;

  return (
    <PageSectionWrapper>
      <Top className='page-section__top'>
        <h3 className='page-section__section-title'>{title}</h3>
        {btnTitle && <LinkButton title={btnTitle} link={btnLink} />}
      </Top>
      {children}
    </PageSectionWrapper>
  );
};

PageSection.defaultProps = PageSectionDefaultProps;

export default PageSection;
