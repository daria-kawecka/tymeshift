import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { routesMap } from 'routes/routesMap';

export const Home: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routesMap.allLocations);
  };

  return (
    <>
      <Header mainHeader='Home' />
      <Button onClick={handleNavigate} text='Go to all locations' />
    </>
  );
};
