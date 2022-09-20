const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    //adds updated at and created at field automatically
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema);