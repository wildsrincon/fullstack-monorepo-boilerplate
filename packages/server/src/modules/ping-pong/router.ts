import { Router } from 'express';
import { returnPong, postPong } from './controller';

const pingRouter = (router = Router()) => {
  router.get('/ping', returnPong);
  router.post('/ping', postPong);
  return router;
};

export default pingRouter;
