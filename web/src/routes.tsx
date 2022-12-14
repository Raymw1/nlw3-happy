import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Landing />} />
        <Route path='/app' element={<OrphanagesMap />} />
        <Route path='/orphanages/create' element={<CreateOrphanage />} />
        <Route path='/orphanages/:id' element={<Orphanage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
