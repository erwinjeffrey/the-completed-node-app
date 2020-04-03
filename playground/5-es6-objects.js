// Object property shortand

const name = 'Andrew';
const userAge = 27;

const user = {
  //name:name,
  name, //because the variable has the same name as the key
  age: userAge,
  location: 'Philadelphia'
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label
// const stock = product.stock

const { label: productLabel, stock, rating = 5 } = product;
//console.log(label); won't work cause I rename the variable
// rating = 5 create a rating label with a default value if the object contains a rating the default value won't work
console.log(stock);
console.log(productLabel);
console.log(rating);

// destructuring function parameters
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
transaction('order', product);

// default destructuring parameter {} in case value does not provide

const transaction2 = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};
transaction2('order');
