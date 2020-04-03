require('../src/db/mongoose');
const Task = require('../src/models/task');

/*Task.findByIdAndDelete('5e820bff40fe9518e0bd65a2')
  .then(taks => {
    console.log(taks);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });*/

// convert to async, await
const deleteTaskAndCount = async id => {
  task = await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5e820c2816352018e649503d')
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
