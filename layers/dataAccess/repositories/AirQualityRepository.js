const BaseRepository = require("../BaseRepository");
const AirQuality = require("../models/AirQuality");

class AirQualityRepository extends BaseRepository {
  constructor() {
    super(AirQuality);
  }

  // Change model for test purpose 
  changeModelForTest(newModel) {
    this._modelType = newModel;
    return this;
  }
}

module.exports = new AirQualityRepository();