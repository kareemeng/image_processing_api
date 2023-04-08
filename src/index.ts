import express from 'express';
import indexRoutes from './routes/indexRoutes';
const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.log(`listening on port ${port}`);
});

app.use(indexRoutes);

export { app };
