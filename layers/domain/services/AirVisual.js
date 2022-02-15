const fetch = require('node-fetch');
const { airVisualKey } = require('./../../../config');

class AirVisual {
  constructor() {
    this.uri = 'http://api.airvisual.com/v2'
  }

  async getListContries() {
    const response = await fetch(`${this.uri}/countries?key=${airVisualKey}`);
    return response.json();
  }

  /**
   * Filtrer les retours 
   */
  async airQualitypPramLongLat(lon, lat) {
    const response = await fetch(`${this.uri}/nearest_city?lat=${lat}&lon=${lon}&key=${airVisualKey}`);
    const data = await response.json(); // consume body 
    return data.status === 'success' ? {
      "result": {
        polution: data.data.current.pollution
      }
    } : data
  }

  /**
   * Prendre tous les info
   */
  async getInfoByLongLat(lon, lat) {
    const response = await fetch(`${this.uri}/nearest_city?lat=${lat}&lon=${lon}&key=${airVisualKey}`);
    const data = await response.json();
    return data;
  }
}

module.exports = new AirVisual();