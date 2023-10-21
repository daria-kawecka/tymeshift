import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Header } from 'components/Header';
import { Card } from 'components/Card/Card';
import { formatToCustomTime } from 'utils/date/formatToCustomTime';
import { Error } from 'components/Error';

import { useAllLocations } from './hook';
import { messages } from './messages';
import { Container } from './styles';

export const AllLocations: FC = () => {
  const { allLocationsData, isLoading, isError } = useAllLocations();

  return (
    <>
      <Header mainHeader={messages.mainHeader} subHeader={messages.subHeader} />
      <Container>
        {isLoading && (
          <RotatingLines
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        )}
        {isError && <Error />}
        {allLocationsData.map((locationData) => (
          <Card
            key={locationData.id}
            time={formatToCustomTime(locationData.createdAt)}
            title={locationData.name}
            description={locationData.description}
            usersNumber={locationData.userCount}
          />
        ))}
      </Container>
    </>
  );
};
