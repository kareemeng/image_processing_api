import resize from '../middlewares/resize';
import fs from 'fs';

describe('resize function test', () => {
  it('should resize the given image and save it in thumbnails folder', async () => {
    await resize('fjord.jpg', 500, 500);
    const check = fs.existsSync(`src/public/thumbnails/500500fjord.jpg`);
    expect(check).toBe(true);
  });
});
