import { app } from '../index';
import supertest from 'supertest';
const request = supertest(app);
describe('server ( get / )', () => {
  it(' should return 200 status', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    // done();
  });

  it('should send a full_image and return 200 status ', async () => {
    const response = await request.get('/images/encenadaport.jpg');
    expect(response.status).toBe(200);
    // done();
  });

  it('should send a resized_image and return 200 status if the image was not processed not that the test will fail if the image was processed befor', async () => {
    const response = await request.get(
      '/images/resize/encenadaport.jpg/100/100'
    );
    expect(response.status).toBe(200);
    // done();
  });

  //if it was processed befot
  it(' should send a resized_image and return 300 status in case image already processed', async () => {
    const response = await request.get(
      '/images/resize/encenadaport.jpg/100/100'
    );
    expect(response.status).toBe(300);
    // done();
  });
  //if we cale the same test as above it will fail because the
  //image is retrieved from the thump folder not the get request
  /*
   it(' should send a image and return 200 status', async () => {
    const response = await request.get('/images/resize/encenadaport.jpg/100/100');
    expect(response.status).toBe(200);
    // done();
  });*/
  describe('the size and photos name check', () => {
    it(' should return 400 status the size is incorrect ', async () => {
      const response = await request.get(
        '/images/resize/encenadaport.jpg/100/-100'
      );
      expect(response.status).toBe(400);
      // done();
    });
    it(' should return 400 status the size is not a number ', async () => {
      const response = await request.get('/images/resize/encenadaport.jpg/b/a');
      expect(response.status).toBe(400);
      // done();
    });
    it(' should return 400 status the size is numbers and string ', async () => {
      const response = await request.get(
        '/images/resize/encenadaport.jpg/44b/44a'
      );
      expect(response.status).toBe(400);
      // done();
    });
    it(' should return 400 status the photo name is incorrect ', async () => {
      const response = await request.get('/images/resize/sss.jpg/100/100');
      expect(response.status).toBe(400);
      // done();
    });
  });
});
