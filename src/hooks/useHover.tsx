import { useState } from 'react';

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return { isHover, handleMouseLeave, handleMouseOver };
};
