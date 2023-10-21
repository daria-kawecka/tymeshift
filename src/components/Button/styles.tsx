import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 16px;
  padding: 4px 15px;
  cursor: pointer;
`;
