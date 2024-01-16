const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Wilfried:hPjUhY51BK2Jk6VH@provider.sgkoypu.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Connection at MongoDB successfull"))
.catch(() => console.log("Connection at MongoDB failed"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;