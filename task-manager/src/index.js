const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRoouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

//example of files uploading
const multer = require('multer');
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a Word document'));
    }

    cb(undefined, true);
  }
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
