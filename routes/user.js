const router = require('express').Router();
const Form = require('../modals/Form');


router.get('/forms', (req, res) => {
    Form.find()
        .then(forms => res.status(200).json(forms))
        .catch(err => res.status(501).json({ err: err.errors, message: err.message }))
})


module.exports = router;