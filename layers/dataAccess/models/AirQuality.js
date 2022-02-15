const mongoose = require('mongoose');
const { Schema } = mongoose;
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
}, { _id: false });
const AirQualitySchema = new Schema({
  city: { type: String },
  location: { type: pointSchema, required: true },
  data: { type: Object },
  createdAt: { type: Date, default: new Date()},
  originalRecord: { type: String }
});

module.exports = mongoose.model('AirQuality', AirQualitySchema, 'air-quality')