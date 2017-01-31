var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function(data) {
        return (data.length > 0 && data.toLocaleLowerCase() != 'none')
    }, 'Please select member name.'
];

var requiredStringValidator = [
    function(data) {
        var testData = data.trim();
        return (testData.length > 0);
    }, '{PATH} cannot be empty'
]; 

var standupSchema = new Schema({
    memberName: { 
        type: String,
        required: true,
        validate: memberNameValidator
    },
    project: { 
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    workYesterday: { 
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    workToday: { 
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    impediment: { 
        type: String,
        required: true,
        default: 'none'
    },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Standup', standupSchema);