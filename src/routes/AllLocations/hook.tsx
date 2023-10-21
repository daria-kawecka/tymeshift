import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { AllLocationsData } from './types';

export const useAllLocations = () => {
  const [allLocationsData, setAllLocationsData] = useState<AllLocationsData[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const apiUrl = 'https://6033c4d8843b15001793194e.mockapi.io/api/locations';

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(apiUrl)
      .then((response: AxiosResponse<AllLocationsData[]>) => {
        setIsLoading(false);
        setIsError(false);
        setAllLocationsData(response.data);
      })
      .catch((error: AxiosError) => {
        setIsError(true);
      });
  }, []);

  return { allLocationsData, isLoading, isError };
};
