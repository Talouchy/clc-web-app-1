const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

// create Class schema and model
const classSchema = new Schema({
  type: {
    type: String,
    enum: [
      'lecture',
      'tutorial',
      'workshop',
      'hidden_class',
      'practical',
      'res_school',
      'presentation',
      'laboratory'
    ],
    default: 'other',
    required: [true, 'Class Type is required']
  },
  staff: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Class staff is required'],
    default: 'staff not assigned'
  },
  location: {
    type: String,
    trim: true,
    required: [true, 'Class location is required']
  },
  day: {
    type: String,
    trim:true,
    lowercase: true,
    required: [true, 'Class day is required']
  },
  time: {
    type: String,
    trim: true,
    required: [true, 'Class time is required']
  },
  startDate: {
    type: String,
    trim: true,
    required: [true, 'Class start date is required']
  },
  endDate: {
    type: String,
    trim: true,
    required: [true, 'Class end date is required']
  }
});

// create Unit Schema and model
const UnitSchema = new Schema({
    code: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, 'Unit Code is required']
    },
    name: {
        type: String,
        required: [true, "Unit Name is required"]
    },
    classes: [classSchema]
})

UnitSchema.plugin(uniqueValidator, { message: 'This {PATH} is already taken.' })

const Unit = mongoose.model('unit', UnitSchema)

module.exports = {Unit, UnitSchema}