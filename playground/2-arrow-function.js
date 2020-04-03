/*const square = function(x) {
  return x * x;
};*/

/*const square = (x) => {
  return x * x;
};*/

/*const square = x => x * x;
console.log(square(3));*/

/*const event = {
  name: 'Birthday Party',
  printGuestList: function() {
    console.log('Guest list for ' + this.name);
  }
};*/

// this won't work as this standar arrow
//function don't bind to this object
/*const event = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log('Guest list for ' + this.name);
  }
};*/

/*const event = {
  name: 'Birthday Party',
  printGuestList() {
    console.log('Guest list for ' + this.name);
  }
};*/
/* this will print attending to undefined,
becuase the function inside the foreach bind to itself 
instead we have to use an arrow function*/
/*const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach(function(guest) {
      console.log(guest + 'is attending ' + this.name);
    });
  }
};*/

// the arrow function don't bind to themself(don't bind the  own this value),
//their in the context in which they were created
// this code will work
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  // inside an object you must use the es6 method function
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + 'is attending ' + this.name);
    });
  }
};
event.printGuestList();
