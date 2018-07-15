var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "bamazon_DB"
});

var quantity = 0;

var id = 0;

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  getStarted();
});

function getStarted() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Item ID \t Product \t\t Department \t Price \t Quantity");
    console.log("----------------------------------------------------------------------------\n")
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " \t\t " + res[i].product_name + " \t\t " + res[i].department_name + " \t " + res[i].price + "\t\t" + res[i].stock_quantity + "\n ----------------------------------------------------------------------------")
    }

    inquirer
      .prompt([{
        name: "whatBuy",
        type: "input",
        message: "What is the ID of the product you'd like to purchase?"
      },
      {
        name: "howMany",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }]).then(function (answer) {
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].item_name === answer.whatBuy) {
            chosenItem = res[i];
          }
        }
        if (chosenItem.stock_quantity <= res[i].stock_quantity) {
          connection.query(
            "UPDATE products SET ? WHERE ?"
            [
            {
              stock_quantity: answer.howMany
            },
            {
              id: chosenItem.item_id
            }
            ],
            function (err) {
              if (err) throw err;
              if (err) throw err;
              console.log("Your total is: " + ((res.price) * quantity).toFixed(2))
            })
        } else {
          console.log("Opps, we only have" + stock_quantity + "of item number" + id);
        }
        connection.end();

      }
      )
  })



} 