import express from 'express';
import sharp from 'sharp';
import path from 'path';
import resize from '../middlewares/resize'
const Path = path.resolve('./src/public');

const imageResize = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  try { 
    let name= `${req.params.name}`;
    let width= parseInt(req.params.width);
    let  height= parseInt(req.params.height);
    //resizing the image and store it with the new name in the thump file
    await resize(name,width,height);
    //send the image to browser after resizing it and return with status of 200
    res.status(200).sendFile(path.join(Path,`/thump/${width}${height}${name}`));
  } catch (error) {
    console.log(error);
  }
};
const fullImage = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  res.status(200).sendFile(path.join(Path, `/images/${req.params.name}`));
};

export { fullImage, imageResize };
