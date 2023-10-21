import { styled } from 'styled-components';

export const StyledIcon = styled.img<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : '14px')};
  margin-right: 8px;
  opacity: 0.3;
`;
