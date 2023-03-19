import { MouseEventHandler } from 'react';
import { ButtonStyled } from '@shared/ui/CommonButton/CommonButton.styles.js';

const CommonButton = ({ children, onClick }: { children: string; onClick: MouseEventHandler }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default CommonButton;
