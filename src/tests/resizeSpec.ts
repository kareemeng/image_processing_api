import resize from '../middlewares/resize';
import fs from 'fs';
import path from 'path';

describe('resize function test', () => {

    it('should resize the given image and save it in thump folder',async () => {
        await resize('fjord.jpg',500,500);
        const check = fs.existsSync(`src/public/thump/500500fjord.jpg`)
        expect(check).toBe(true);
    });
    
});
