import express from 'express';
import path from 'path';
import resize from '../middlewares/resize';
const Path = path.resolve('./src/public');

const imageResize = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const name = `${req.params.name}`,
      width = parseInt(req.params.width),
      height = parseInt(req.params.height);
    //resizing the image and store it with the new name in the thumbnails file
    await resize(name, width, height);
    //send the image to browser after resizing it and return with status of 200
    res
      .status(200)
      .sendFile(path.join(Path, `/thumbnails/${width}${height}${name}`));
  } catch (error) {
    console.log(error);
  }
};
const fullImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  res.status(200).sendFile(path.join(Path, `/images/${req.params.name}`));
};

export { fullImage, imageResize };
