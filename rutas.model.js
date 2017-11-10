/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const rutasSchema = new mongoose.Schema({
    
    codcolonia: {
        type: Number,
        required: true
    },
    camion:[{type:Schema.ObjectId, ref:'Camiones'}]


});

const userModel = mongoose.model('User', userSchema, 'users');

module.exports = userModel;