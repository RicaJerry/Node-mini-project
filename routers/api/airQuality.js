const AirVisual = require('../../layers/domain/services/AirVisual');

const router = require('express').Router();

router.get('/listContries', async (req, res, next) => {
  try {
    const list = await AirVisual.getListContries();
    res.status(200).send(list);
  } catch (error) {
    next(error);
  }
});

router.get('/byLongLat', async (req, res, next) => {
  try {
    const lon = req.query['lon'];
    const lat = req.query['lat'];
    if(!lat) {
      res.status(400).send({msg: "missing latitude params 'lat' "});
      return;
    }

    if(!lon) {
      res.status(400).send({msg: "missing longitute params 'lon' "});
      return;
    }
    const polu = await AirVisual.airQualitypPramLongLat(lon, lat);
    res.status(200).send(polu);

  } catch (error) {
    next(error);
  }
});


// Air polué 
router.get('/dirty', async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
})

module.exports = router;