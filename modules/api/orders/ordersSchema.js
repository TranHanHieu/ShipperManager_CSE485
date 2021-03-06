const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ordersSchema = new Schema(
    {
       user : {type : ObjectId},
       order_name : {type : String, require : true, defaut : ""},
       from : {type : String, require : true, default : ""},
       to : {type : String, require : true, default : ""},
       price : {type : Number, require : true, default : 0},
       price_ship : {type : Number, require : true, default : 0},
       longtitude_from : {type : Number, require : true, default : 0},
       latitude_from : {type : Number, require : true, default : 0},
       longtitude_to : {type : Number, require : true, default : 0},
       latitude_to : {type : Number, require : true, default : 0},
       status : {type : Number, require : true, default : 0},
       createdAt : {type : Date, default : Date.now},
    }
);


module.exports = ordersSchema;