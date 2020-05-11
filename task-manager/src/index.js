const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRoouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

//example of files uploading
const multer = require('multer');
const upload = multer({
  dest: 'images'
});

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
});

app.use(express.json()); // parse json
app.use(userRouter);
app.use(taskRoouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
