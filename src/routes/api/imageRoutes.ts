import express from 'express';
import sharp from 'sharp';
import resizeable from '../../middlewares/resizeableMiddleware';
import cashed from '../../middlewares/cachingMiddleware';
import path from 'path';
import { imageResize, fullImage } from '../../controllers/imagesController';
const Path = path.resolve('./src/public');
const image = express.Router();
// console.log(Path)
/// the get request pass by two middlewares
//1- resizeable validate the size and name
//2- cashed check the image if it was processed
//before with the same size or it is new
image.get('/resize/:name/:width/:height', resizeable, cashed, imageResize);
image.get('/:name', fullImage);

export default image;
