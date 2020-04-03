/* just to work with mongoose promises in a chaining sintax */
require('../src/db/mongoose');
const User = require('../src/models/user');

/*User.findByIdAndUpdate('5e83fcde93c9f120d3a94145', { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });*/

// convert to async, await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5e80126b1f502c0ad6176a5a', 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
