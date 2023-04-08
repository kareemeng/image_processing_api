import sharp from 'sharp';
import path from 'path';
const Path = path.resolve('./src/public');
const resize = async (
  name: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(path.join(Path, `/images/${name}`))
    .resize(width, height)
    .toFile(path.join(Path, `/thumbnails/${width}${height}${name}`));
};
export default resize;
