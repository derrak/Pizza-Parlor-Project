function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
Pizza.prototype.basePrice = function() {
  let basePrice = 0;
  if (this.size === "small"){
    basePrice = 10;
  }
  else if (this.size === "meduim"){
    basePrice = 15;
  }
  else if (this.size === "large"){
    basePrice = 20;
  }
  console.log("Pizza's base price is:" + basePrice);
  return basePrice;
}

const myPizza = new Pizza("large", ["anchovies", "pineapple"]);
myPizza.basePrice();