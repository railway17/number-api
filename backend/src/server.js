const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const addRouter = require('./routes/addRouter');
const checkRouter = require('./routes/checkRouter');
const nodeEnv = process.env
const envfile = nodeEnv.NODE_ENV ? './.env' : './.env.test'
dotenv.config({path: envfile});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/add', addRouter);
app.use('/check', checkRouter);

console.log(nodeEnv)

const connectionUri = `mongodb://${nodeEnv.DB_HOST}:${nodeEnv.DB_PORT}`;
// const connectionUri = `mongodb://localhost:${nodeEnv.DB_PORT}`;
mongoose.connect(connectionUri, {
    user: nodeEnv.DB_USER,
    pass: nodeEnv.DB_PASS,
    dbName: nodeEnv.DB_NAME,
    authSource: 'admin'
}).then(()=> {
    console.log('db connected');
}).catch(()=> {
    console.error('db connection error');
})

module.exports = {
    server: app,
    port: nodeEnv.BACKEND_PORT
}