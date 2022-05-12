import express from 'express';
import imagesRoutes from './api/imageRoutes';

const routes = express.Router();
routes.use('/images', imagesRoutes);

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'to resize image put ( images/resize/photoname/width/height ) - to viwe the original put ( images/photoname )'
  );
});

export default routes;
