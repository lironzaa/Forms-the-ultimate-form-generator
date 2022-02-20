const router = require('express').Router();
const Form = require('../modals/Form');


router.get('/forms', (req, res) => {
    Form.find()
        .then(forms => res.status(200).json(forms))
        .catch(err => res.status(501).json({ err: err.errors, message: err.message }))
})

router.get('/form/:formID', (req, res) => {
    const formID = req.params.formID;
    Form.findById(formID)
        .then(form => {
            if(form) return res.status(200).json(form);
            res.status(404).json({message: 'Form not found!'})
        })
        .catch(err => res.status(501).json({ err: err.errors, message: err.message }))
})


module.exports = router;