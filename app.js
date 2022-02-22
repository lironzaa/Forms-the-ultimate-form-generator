const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const cors = require('cors');
const path = require('path');

app.use(cors(), express.json(), express.urlencoded({ extended: true }), express.static(path.join(__dirname, 'client', 'build')));

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.use((req, res) => {
    const htmlPath = path.join(__dirname, "client", "build", "index.html");
    res.status(200).sendFile(htmlPath);
})

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}!`)))
    .catch(err => console.log(err));