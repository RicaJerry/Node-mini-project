const mongoose = require('mongoose');
const AirQuality = require('../../layers/dataAccess/models/AirQuality');
const mongoDB = process.env.MONGO_URL_TEST;
mongoose.connect(mongoDB);
jest.setTimeout(10000);

describe('Test AirQuality model and his connection to the DB so we can mock after', () => {
  beforeAll(async () => { // On vide avant chaques tests 
    await AirQuality.remove({});
  });

  afterEach(async () => {  // On vide après chaques tests 
    await AirQuality.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should has a model', () => {
    expect(AirQuality).toBeDefined();
  });

  const mockData = {
    "city": "Antananarivo",
    "state": "Analamanga",
    "country": "Madagascar",
    "location": {
      "type": "Point",
      "coordinates": [
        47.53613,
        -18.91368
      ]
    },
    "data": {
      "ts": "2022-02-14T20:00:00.000Z",
      "aqius": 33,
      "mainus": "p2",
      "aqicn": 11,
      "maincn": "p2"
    },
    createdAt: new Date(),
  }
  describe('GET data', () => {
    test('get an data', async () => {
      const air = new AirQuality(mockData);
      await air.save();
      const foundAir = await AirQuality.findOne({ city: mockData.city });
      const expected = "Antananarivo";
      expect(foundAir.city).toBe(expected);
    });
  });

  describe('Save data', () => {
    test('save an data ', async () => {
      const air = new AirQuality(mockData);
      const saveAir = await air.save();
      const expected = "Antananarivo";
      expect(saveAir.city).toBe(expected);
    })
  });
})