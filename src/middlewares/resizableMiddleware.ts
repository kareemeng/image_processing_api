import express from 'express';
import fs from 'fs';
//function to validate the user input
const resizable = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const info = {
    //new name will be stored in thumbnails file
    name: `${req.params.width}${req.params.height}${req.params.name}`,
    width: req.params.width,
    height: req.params.height,
  };
  const check: boolean = fs.existsSync(`src/public/images/${req.params.name}`);
  if (req.params.name == '') {
    //if name is null
    res.status(400).send('pleas send the photo name');
  } else if (!check) {
    //if name incorrect
    res.status(400).send('pleas enter valid photo name');
  } else if (isNaN(+info.width) || isNaN(+info.height)) {
    //if size is not a number
    res.status(400).send('pleas enter valid number in width and height');
  } else if (+info.width <= 0 || +info.height <= 0) {
    //if size is invalid
    res.status(400).send('pleas send valid numbers in width and height');
  } else {
    next();
  }
};

export default resizable;
