import express from 'express';
import fs from 'fs';
import path from 'path';
const Path = path.resolve('./src/public');

//function to check if image is processed .
const cashed = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  if (!fs.existsSync(`src/public/thump`)) {
    await fs.mkdir(`src/public/thump`, (err) => {
      if (err) console.log(err);
      else console.log('directory created');
    });
  } else {
    console.log('directory allredy exisist');
  }
  const mykey = `${req.params.width}${req.params.height}${req.params.name}`;
  //loking for the image in thump file
  await fs.readdir(path.join(Path, `/thump`), async (err, files) => {
    await files.forEach((file) => {
      if (mykey == file) {
        //if the image exists already send the image and dont proceess further
        res.status(300).sendFile(path.join(Path, `/thump/${mykey}`));
      }
    });
    if (err) console.log(err);
  });
  //else continue to process the image and place it in the thump folder
  next();
};

export default cashed;
