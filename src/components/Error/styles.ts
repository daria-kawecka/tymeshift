import { styled } from 'styled-components';

export const StyledError = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  width: 100%;
  text-align: center;
`;
