import express from 'express';
import fs from 'fs';
import path from 'path';
//function to validate the size and name of image
const resizeable = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  let widthisnum = /^\d+$/.test(req.params.width);
  let heightisnum = /^\d+$/.test(req.params.height);
  let info = {
    //new name will be stored in thump file
    name: `${req.params.width}${req.params.height}${req.params.name}`,
    width: parseInt(req.params.width),
    height: parseInt(req.params.height),
  };
  const check: boolean = fs.existsSync(`src/public/images/${req.params.name}`);
  // console.log("Check:",check);
  if (req.params.name == '') {
    //if name is null
    res.status(400).send('pleas send the photo name');
  } else if (!check) {
    //if name incorrect
    res.status(400).send('pleas enter valid photo name');
  } else if (!widthisnum || !heightisnum) {
    //if size is not a number
    res.status(400).send('pleas enter valid numbur in width and height');
  } else if (info.width <= 0 || info.height <= 0) {
    //if size is invaled
    res.status(400).send('pleas send valid numbers in width and height');
  } else {
    next();
  }
};

export default resizeable;
