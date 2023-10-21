import styled from 'styled-components';

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardContentText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  line-height: 24px;
  opacity: 0.8;
`;
