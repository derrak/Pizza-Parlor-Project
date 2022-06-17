// Business Logic for OrderBook ---------
//OrderBook objects contain a single property: An empty object called orders. 
//This is where we'll store entries in our OrderBook. 
//Each entry will be a Order object.

function Order() {
  this.order = {};
  this.currentId = 0;
};

Order.prototype.addOrder = function(pizza){
  pizza.id = this.assignId();
  this.order[pizza.id] = pizza;
};

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Pizza ---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

let orders = new Order();
let orderedPizza = new Pizza("small","[cheese, peperoni]");
let orderedPizza2 = new Pizza("large","[cheese, peperoni]");
orders.addOrder(orderedPizza);
orders.addOrder(orderedPizza2);


// User Interface Logic ---------
let order = new Order();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});
