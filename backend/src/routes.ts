import express from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = express.Router();

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);

export default routes;
