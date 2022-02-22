const router = require('express').Router();
const Form = require('../modals/Form');
const SubmittedForm = require('../modals/SubmittedForm');

router.post('/save-form', (req, res) => {
    Form.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

router.get('/submitted-forms', (req, res) => {
    SubmittedForm.find().sort('email')
        .then(docs => res.status(200).json(docs))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

module.exports = router;