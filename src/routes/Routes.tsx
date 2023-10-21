import { FC } from 'react';
import {
  Routes as ReactRoutes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { Home } from './Home';
import { routesMap } from './routesMap';
import { AllLocations } from './AllLocations';

export const Routes: FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path={routesMap.home} element={<Home />} />
        <Route path={routesMap.allLocations} element={<AllLocations />} />
      </ReactRoutes>
    </Router>
  );
};
