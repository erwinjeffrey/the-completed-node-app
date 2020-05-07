const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRoouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;
//middleware
/*app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.send('GET requests are disabled');
  } else {
    next();
  }
});

app.use((req, res, next) => {
  res.status(503).send('Site is currently down. Check back soon!');
});*/

app.use(express.json()); // parse json
app.use(userRouter);
app.use(taskRoouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('5eb4553a2cd1131816d367bd');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);

  const user = await User.findById('5eb453ef3137391807a91305');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
