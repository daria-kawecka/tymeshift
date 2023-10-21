import { FC } from 'react';

import { Icon } from 'components/Icon';

import { CardContentContainer, CardContentText } from './styles';
import { IconWithTextProps } from './types';

export const IconWithText: FC<IconWithTextProps> = ({
  icon,
  text,
  nameOfTheIcon,
}) => {
  return (
    <CardContentContainer>
      <Icon icon={icon} nameOfIcon={`${nameOfTheIcon}-icon`} />
      <CardContentText>{text}</CardContentText>
    </CardContentContainer>
  );
};
