import { FC } from 'react';

import { IconProps } from './types';
import { StyledIcon } from './styles';

export const Icon: FC<IconProps> = ({
  icon,
  width = 14,
  height = 14,
  nameOfIcon,
}) => {
  return (
    <StyledIcon
      src={icon}
      alt={`${nameOfIcon}-icon`}
      width={width}
      height={height}
    />
  );
};
