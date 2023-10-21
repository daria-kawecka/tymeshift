import styled from 'styled-components';

export const ModalBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  width: 440px;
  height: 350px;
  box-shadow: 0 8px 16px -4px ${({ theme }) => theme.colors.darkAlpha};
  padding: 16px 25px;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const ModalTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 31px;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const DescriptionHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 24px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 24px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
`;

export const BottomContainer = styled.div`
  margin-top: auto;
  align-self: flex-end;
`;
