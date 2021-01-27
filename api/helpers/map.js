const geolib = require('geolib');

const getDistance = (loc1, loc2) => {
  geolib.getPreciseDistance({
    latitude: loc1.latitude, longitude: loc1.longitude
  }, { latitude: loc2.latitude, longitude: loc2.longitude })
}

module.exports = { getDistance };