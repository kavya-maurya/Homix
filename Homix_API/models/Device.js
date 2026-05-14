const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['ON', 'OFF'],
        default: 'OFF'
    }
});

module.exports = mongoose.model('Device', deviceSchema);