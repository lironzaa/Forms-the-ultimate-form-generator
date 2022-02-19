const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const cors = require('cors');


app.use(cors(), express.json(), express.urlencoded({ extended: true }));


app.use('/admin', adminRoutes);






const PORT = process.env.PORT || 3001;


mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}!`)))
    .catch(err => console.log(err));