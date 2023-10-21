import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 30px;
`;

export const MainHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
`;

export const SubHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  opacity: 0.3;
  font-weight: 700;
`;
