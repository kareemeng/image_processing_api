import express from 'express';
import sharp from 'sharp';
import path from 'path';
const Path = path.resolve('./src/public');
const resize =async (name: string,width: number,height: number)=>{
   await sharp(path.join(Path, `/images/${name}`))
      .resize(width,height)
      .toFile(path.join(Path, `/thump/${width}${height}${name}`));
}
export default resize;