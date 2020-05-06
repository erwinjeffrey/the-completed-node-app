const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRoouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parse json
app.use(userRouter);
app.use(taskRoouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = 'Red12345!';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('red12345!', hashedPassword);
  console.log(isMatch);
};

myFunction();
