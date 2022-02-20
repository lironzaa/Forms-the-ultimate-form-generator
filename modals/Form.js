const { Schema, model } = require('mongoose');

const Form = new Schema({
    form: [Map]
})

module.exports = model('forms', Form);