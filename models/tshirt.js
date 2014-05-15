var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});
 
var Tshirt = new Schema({
  
  images:    [Images],
  style:    { type: String, 
              enum:  ['Casual', 'Vintage', 'Alternative'],
              required: true 
            },
  size:     { type: Number, 
              enum: [36, 38, 40, 42, 44, 46],
              required: true 
            },
  colour:   { type: String },
  price :   { type: Number, required: true },
  summary:  { type: String },
  modified: { type: Date, default: Date.now },
  model:    { type: String, required: true }  
});
 
Tshirt.path('model').validate(function (v) {
    return ((v != "") && (v != null));
});
 
module.exports = mongoose.model('Tshirt', Tshirt);