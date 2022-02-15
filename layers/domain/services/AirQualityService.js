const AirQualityRepository = require("../../dataAccess/repositories/AirQualityRepository");
const BaseService = require("./BaseService");

class AirQualityService extends BaseService {
  constructor() {
    super(AirQualityRepository, 'AirQualityService');
  }
}

module.exports = new AirQualityService();