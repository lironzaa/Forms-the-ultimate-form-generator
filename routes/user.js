const router = require('express').Router();
const Form = require('../modals/Form');
const SubmittedForm = require('../modals/SubmittedForm');

router.get('/forms', (req, res) => {
    Form.find()
        .then(forms => res.status(200).json(forms))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

router.get('/form/:formID', (req, res) => {
    const formID = req.params.formID;
    Form.findById(formID)
        .then(form => {
            if (form) return res.status(200).json(form);
            res.status(404).json({ message: 'Form not found!' })
        })
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})
router.post('/form/:formID', (req, res) => {
    const formID = req.params.formID;
    const email = req.body.email;
    SubmittedForm.findOne({ email, formID })
        .then(doc => {
            if (doc) {
                const error = new Error(`With this email ${email} form is already submitted!`)
                error.status = 409;
                throw error;
            }
            return SubmittedForm.create({ ...req.body, formID })
        })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(err.status || 501).json({ err: err.errors, message: err.message }))
})

module.exports = router;