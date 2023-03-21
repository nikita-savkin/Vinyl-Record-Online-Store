import { MouseEventHandler } from 'react';
import { ButtonStyled } from '@shared/ui/CommonButton/CommonButton.styles.js';

interface CommonButtonType {
  children: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

const CommonButton = ({ children, onClick, disabled = false }: CommonButtonType) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default CommonButton;
