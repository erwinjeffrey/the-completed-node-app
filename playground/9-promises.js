// single synchronous operation(no chaining)
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 2)
  .then(sum => {
    console.log(sum);
  })
  .catch(e => {
    console.log(e);
  });

// multiple synchronous operation(chaining) but bad
/*add(1, 2)
  .then(sum => {
    console.log(sum);

    add(sum, 5)
      .then(sum2 => {
        console.log(sum2);
      })
      .catch(e => {
        console.log(e);
      });
  })
  .catch(e => {
    console.log(e);
  });*/

// nice way to chain promises
add(1, 1)
  .then(sum => {
    console.log(sum);
    return add(sum, 4);
  })
  .then(sum2 => {
    console.log(sum2);
  })
  .catch(e => {
    console.log(e);
  });
