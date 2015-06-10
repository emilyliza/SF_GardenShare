'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Garden Schema
 */
var GardenSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please provide a Garden title',
		trim: true
	},

	content: {
		type: String,
		default: '',
		required: 'Please provide a description of your garden',
		trim: true
	},
	
	address: {
        type: String,
        default: ''
    },
   
    lat:{
        type: Number,
        default: 0,
        trim: true
    },
    
    lon:{
        type: Number,
        default: 0,
        trim: true
    },

    created: {
		type: Date,
		default: Date.now
	},
    
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Garden', GardenSchema);