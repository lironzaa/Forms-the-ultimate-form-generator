const router = require('express').Router();
const Form = require('../modals/Form');
const SubmittedForm = require('../modals/SubmittedForm');

router.post('/save-form', (req, res) => {
    Form.create(req.body)
        .then(form => res.status(201).json(form))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

router.get('/submitted-forms', (req, res) => {
    SubmittedForm.find().sort('email')
        .then(forms => res.status(200).json(forms))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

module.exports = router;