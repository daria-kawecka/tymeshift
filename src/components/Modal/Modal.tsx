import { FC } from 'react';

import { IconWithText } from 'components/IconWithText';
import { ICONS } from 'assets/icons';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';

import {
  BottomContainer,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
  IconContainer,
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalTitleContainer,
} from './styles';
import { ModalProps } from './types';
import { messages } from './messages';

export const Modal: FC<ModalProps> = ({
  title,
  usersNumber,
  time,
  views,
  description,
  closeModal,
}) => {
  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalTitleContainer>
          <ModalTitle>{title}</ModalTitle>
          <IconContainer onClick={closeModal}>
            <Icon
              icon={ICONS.close.icon}
              nameOfIcon={ICONS.close.name}
              width={16}
              height={16}
            />
          </IconContainer>
        </ModalTitleContainer>
        <IconWithText
          icon={ICONS.users.icon}
          nameOfTheIcon={ICONS.users.name}
          text={usersNumber}
        />
        <IconWithText
          icon={ICONS.timezone.icon}
          nameOfTheIcon={ICONS.timezone.name}
          text={time}
        />
        <IconWithText
          icon={ICONS.views.icon}
          nameOfTheIcon={ICONS.views.name}
          text={views}
        />
        <DescriptionContainer>
          <DescriptionHeader>{messages.description}</DescriptionHeader>
          <DescriptionText> {description}</DescriptionText>
        </DescriptionContainer>
        <BottomContainer>
          <Button onClick={closeModal} text={messages.doneButton} />
        </BottomContainer>
      </ModalContainer>
    </>
  );
};
