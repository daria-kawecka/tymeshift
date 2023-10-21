import { FC } from 'react';

import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
