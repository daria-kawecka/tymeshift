import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  padding: 15px 25px;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.alphaWhite};
  width: 340px;
  height: 139px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.alphaWhite};
    border-color: ${({ theme }) => theme.colors.darkAlpha};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
`;

export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xMedium};
  font-weight: 700;
  margin-bottom: 5px;
  opacity: 0.8;
  line-height: 32px;
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
    margin-right: 0;
  }
`;

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
