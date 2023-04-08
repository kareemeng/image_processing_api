import express from 'express';
import resizable from '../../middlewares/resizableMiddleware';
import cashed from '../../middlewares/cachingMiddleware';
import { imageResize, fullImage } from '../../controllers/imagesController';
const image = express.Router();
// console.log(Path)
/// the get request pass through middlewares
//1- resizable validate the size and name
//2- cashed check the image if it was processed before with the same size or it is new
image.get('/resize/:name/:width/:height', resizable, cashed, imageResize);
image.get('/:name', fullImage);

export default image;
