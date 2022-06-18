# _Pizza Parlor_

#### By _**Derrak Richard**_

#### _This project was built as part of a independant project test at Epicodus_

## Technologies Used

* JavaScript
* jQuery
* Bootstrap
* HTML
* CSS

## Description

#### _This project was built to meet the following code challenge prompt and requirements_
* Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Specs
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: assignId()
Test: "It should assign a unique ID to each new pizza object"
Code: this.id = this.assignId();
Expected Output: Pizza {id: 1, size: 'large', toppings: Array(2)}

Describe: priceCalc()
Test: "It should return a price based on size of pizza"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
      myPizza.priceCalc();
Expected Output: "price: $20"



## Setup/Installation Requirements

* Clone this repository to your Desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* Clicking the ingredient check box lables check/unchecks the Red Sauce option

## License

MIT License

Copyright (c) 2022 Derrak Richard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


