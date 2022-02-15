/**
 * Integration test for app
 */
 const app = require('../createServer');
 const request = require('supertest');
 const mongoose = require('mongoose');
 const mongoDB = process.env.MONGO_URL_TEST;
 mongoose.connect(mongoDB);
 
 jest.setTimeout(20000); // We have connexion to database so I set 20s as a timeout 
 
 describe('Integration test for app', () => {
   test('Should exist', () => {
     expect(app).toBeDefined();
   });
 
   let server; // Create server
 
   beforeAll(() => {
     server = app.listen(3000);
   });
 
   afterAll((done) => {
     mongoose.connection.close();
     server.close(done);
   });
 
   describe("Air Quality route test", () => {
     describe("GET data", () => {
       test('Can GET list contries', async () => {
         await request(server).get('/api/air/listContries').expect(200);
       });
   
       test('Get info by long and lat ', async () => {
         await request(server).get('/api/air/byLongLat?lon=-50.20&lat=48.2').expect(200);
       });

       test('fail because missing lon', async () => {
        await request(server).get('/api/air/byLongLat?lon=&lat=48.2').expect(400);
       });
 
       test('fail because missing lat', async () => {
        await request(server).get('/api/air/byLongLat?lon=-50.20&lat=').expect(400);
      });
     });
   })
 
 })