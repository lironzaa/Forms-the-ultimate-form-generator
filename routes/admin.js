const router = require('express').Router();
const Form = require('../modals/Form');

router.post('/save-form', (req, res) => {
    Form.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(501).json({ err: err.errors, message: err.message }))
})

module.exports = router;