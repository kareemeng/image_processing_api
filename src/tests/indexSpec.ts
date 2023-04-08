import { app } from '../index';
import supertest from 'supertest';
const request = supertest(app);

describe('server ( get / )', () => {
  it(' should return 200 status', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should send a full_image and return 200 status ', async () => {
    const response = await request.get('/images/encenadaport.jpg');
    expect(response.status).toBe(200);
  });

  it('should send a resized_image and return 200 status if the image was not processed note that the test will fail if the image was processed before', async () => {
    const response = await request.get(
      '/images/resize/encenadaport.jpg/100/100'
    );
    expect(response.status).toBe(200);
  });

  it(' should send a resized_image and return 300 status in case image already processed', async () => {
    const response = await request.get(
      '/images/resize/encenadaport.jpg/100/100'
    );
    expect(response.status).toBe(300);
  });

  describe('size and photos name check', () => {
    it(' should return 400 status the size is incorrect ', async () => {
      const response = await request.get(
        '/images/resize/encenadaport.jpg/100/-100'
      );
      expect(response.status).toBe(400);
    });

    it(' should return 400 status invalid size', async () => {
      const response = await request.get('/images/resize/encenadaport.jpg/b/a');
      expect(response.status).toBe(400);
    });

    it(' should return 400 status invalid size', async () => {
      const response = await request.get(
        '/images/resize/encenadaport.jpg/44b/44a'
      );
      expect(response.status).toBe(400);
    });

    it(' should return 400 status the photo name is incorrect ', async () => {
      const response = await request.get('/images/resize/sss.jpg/100/100');
      expect(response.status).toBe(400);
    });
  });
});
