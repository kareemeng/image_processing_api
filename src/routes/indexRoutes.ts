import express from 'express';
import imagesRoutes from './api/imageRoutes';

const routes = express.Router();
routes.use('/images', imagesRoutes);

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'to resize image ( images/resize/photoName/width/height ) - to view the original image ( images/photoName )'
  );
});

export default routes;
