const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	img: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Card', cardSchema);
