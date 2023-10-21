import { FC, useState } from 'react';

import Timezone from 'assets/Timezone.svg';
import Users from 'assets/Users.svg';
import Views from 'assets/Views.svg';
import Edit from 'assets/Edit.svg';
import { useHover } from 'hooks/useHover';
import { useModal } from 'components/Modal/hook';
import { Modal } from 'components/Modal';
import { IconWithText } from 'components/IconWithText';
import { ICONS } from 'assets/icons';
import { Icon } from 'components/Icon';

import { CardProps } from './types';
import {
  CardContainer,
  CardTitle,
  IconContainer,
  TitleContainer,
} from './styles';

export const Card: FC<CardProps> = ({
  title,
  usersNumber,
  time,
  description,
}) => {
  const [numberOfViews, setNumberOfViews] = useState(0);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const { isHover, handleMouseLeave, handleMouseOver } = useHover();

  const handleClickOnCard = () => {
    handleOpenModal();
    setNumberOfViews((prevNumber) => prevNumber + 1);
  };

  const CARD_ICONS = [
    { icon: ICONS.users.icon, name: ICONS.users.name, value: usersNumber },
    {
      icon: ICONS.timezone.icon,
      name: ICONS.timezone.name,
      value: time,
    },
    {
      icon: ICONS.views.icon,
      name: ICONS.views.name,
      value: numberOfViews,
    },
  ];

  return (
    <>
      {isModalOpen && (
        <Modal
          title={title}
          usersNumber={usersNumber}
          time={time}
          views={numberOfViews}
          description={description}
          closeModal={handleCloseModal}
        />
      )}
      <CardContainer
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickOnCard}
      >
        <TitleContainer>
          <CardTitle>{title}</CardTitle>
          {isHover && (
            <IconContainer>
              <Icon icon={ICONS.edit.icon} nameOfIcon={ICONS.edit.name} />
            </IconContainer>
          )}
        </TitleContainer>
        {CARD_ICONS.map((cardIcon) => (
          <IconWithText
            icon={cardIcon.icon}
            nameOfTheIcon={cardIcon.name}
            text={cardIcon.value}
          />
        ))}
      </CardContainer>
    </>
  );
};
