import express from 'express';
import fs from 'fs';
import path from 'path';
const Path = path.resolve('./src/public');

//function to check if image is processed .
const cashed = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  if (!fs.existsSync(`src/public/thumbnails`)) {
    await fs.mkdir(`src/public/thumbnails`, (err) => {
      if (err) console.log(err);
      else console.log('directory created');
    });
  } else {
    console.log('directory already exists');
  }
  const myKey = `${req.params.width}${req.params.height}${req.params.name}`;
  //loking for the image in thumbnails file
  await fs.readdir(path.join(Path, `/thumbnails`), async (err, files) => {
    await files.forEach((file) => {
      if (myKey == file) {
        //if the image exists already send the image and dont proceess further
        res.status(300).sendFile(path.join(Path, `/thumbnails/${myKey}`));
      }
    });
    if (err) console.log(err);
  });
  //else continue to process the image and place it in the thumbnails folder
  next();
};

export default cashed;
