const { Schema, model } = require('mongoose');

const Input = new Schema({
    name: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true,
        enum: ['input', 'textarea']
    },
    type: {
        type: String,
        required: true,
        enum: ['text', 'number'],
    }
})

const Form = new Schema({
    form: {
        type: [Input],
        required: true,
        minlength: 1,
    }
})

module.exports = model('forms', Form);