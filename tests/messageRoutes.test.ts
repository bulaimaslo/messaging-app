import request from 'supertest';
import app from '../src/app';


describe('POST /api/messages', () => {
  it('should respond with 201 status', async () => {
    const response = await request(app)
      .post('/api/messages')
      .send({
        sender: 'Alice', 
        receiver: 'Bob',
        body: 'Hello, Bob!',
      });

    expect(response.status).toBe(201); 
  });

});
