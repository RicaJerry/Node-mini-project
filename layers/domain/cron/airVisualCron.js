const { CronJob } = require('cron');
const AirQualityService = require('../services/AirQualityService');
const AirVisual = require('../services/AirVisual');

const parisCoordo = {
  lat: 48.856613,
  long: 2.352222
}

module.exports = new CronJob('* * * * *', async () => {
  try {
    const paris = await AirVisual.getInfoByLongLat(parisCoordo.long, parisCoordo.lat); // Prendre les infos par min 
    const data = { 
      city: paris.data.city,
      location: paris.data.location,
      data: paris.data.current.pollution,
      originalRecord: JSON.stringify(paris)
    }
    console.log("🚀 ~ file: AirVisualCron.js ~ line 19 ~ module.exports=newCronJob ~ data", data)
    await AirQualityService.create(data); // Insertion dans la base des infos sur la qualité 
  } catch (error) {
    console.error(error);
  }
})