const server = require('./index');
const request = require('supertest');

test('/ endpoint', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ running: true });
});

test('/users endpoint', async () => {
    const response = await request(server).get('/users');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ users: [] });
});

afterAll(() => {
    server.close();
});
