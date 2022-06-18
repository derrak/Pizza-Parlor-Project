// Business Logic for OrderBook ---------
//OrderBook objects contain a single property: An empty object called orders. 
//This is where we'll store entries in our OrderBook. 
//Each entry will be an Order object.
function OrderBook() {
  this.orders = {};
  this.currentId = 0; //instantiate new OrderBooks with a currentId property
                     //Now each time a new OrderBook is created, it will have a currentId property that begins at 0.
                     //I shouldn't need to do this for price
};

OrderBook.prototype.addPizzaToOrder = function(pizza){ //adds pizzas to our mock database.
  pizza.id = this.assignId();  //creates new key 'id' and assigns value to pizza object that was passed into addPizzaToOrder

  this.orders[pizza.id] = pizza; 
    //We're using a Pizza's new id property as a key when we add the pizza to OrderBook
    // In this line of code, this refers to the OrderBook we've created. Our instance of OrderBook has an orders property which itself contains an object that stores the key-value pairs of all our ?Pizzas?. In the line of code above, we are creating a key in the orders object which corresponds to the new Pizza ID. The value associated with the key is the Pizza object itself.



  pizza.price = this.priceCalc(pizza.id);
};

OrderBook.prototype.assignId = function () { //This new method will increment the this.currentId property on the AddressBook object 
  this.currentId += 1;                       // by 1 and return the updated value.
  return this.currentId;
};

OrderBook.prototype.priceCalc = function(id) {
  const size = this.orders[id].size;
  const price = 88;
  if (size === "Small"){
    return 10;}
  else if (size === "Medium"){
    return 15;}
  else if (size === "Large"){
    return 20;}
}

OrderBook.prototype.findPizza = function(id) {
  if (this.orders[id] != undefined) {
    return this.orders[id];
  }
  return false;
}

// Business Logic for Pizza ---------
function Pizza (size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

// User Interface Logic ---------
let orderDatabase = new OrderBook();

function displayOrderDetails(orderToDisplay){
  let orderListForDisplay = $("ul#orders");
  let htmlForOrderToDisplay = "";
  Object.keys(orderToDisplay.orders).forEach (function(key){
    const order = orderToDisplay.findPizza(key);
    htmlForOrderToDisplay += "<li id=" + order.id + ">" + order.size + ": " + order.toppings + "<br>" + "$" + order.price + "</li>";
  });
  orderListForDisplay.html(htmlForOrderToDisplay);
}

$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();
    const inputtedPizzaSize = $("input#sizeRadio:checked").val();
    const inputtedToppings = [];
    $('input[name="toppingsCheck"]:checked').each(function(){
      inputtedToppings.push($(this).val());
    });
  
    let newPizza = new Pizza(inputtedPizzaSize,inputtedToppings);
    orderDatabase.addPizzaToOrder(newPizza);
 
    $(".orderSummary").show();
    displayOrderDetails(orderDatabase);
  });
});
