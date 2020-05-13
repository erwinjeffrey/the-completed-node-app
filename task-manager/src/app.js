const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRoouter = require('./routes/task');

const app = express();

app.use(express.json()); // parse json
app.use(userRouter);
app.use(taskRoouter);

module.exports = app;
