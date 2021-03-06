const { Schema, model } = require('mongoose');

const SubmittedForm = new Schema({
    form: [Map],
    formId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'forms'
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = model('submitted_forms', SubmittedForm);