import { FC } from 'react';

import { HeaderProps } from './types';
import { HeaderContainer, MainHeader, SubHeader } from './styles';

export const Header: FC<HeaderProps> = ({ mainHeader, subHeader }) => {
  return (
    <HeaderContainer>
      {subHeader && <SubHeader>{subHeader}</SubHeader>}
      {mainHeader && <MainHeader>{mainHeader}</MainHeader>}
    </HeaderContainer>
  );
};
