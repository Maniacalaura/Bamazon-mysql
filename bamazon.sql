DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT (10),
  stock_quantity INT (10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Cornballer", "Household", 149.99, 30000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tommy Fresh", "Fragrances", 49.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rochelle Rochelle", "Movies", 19.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kimmunicator", "Electronics", 749.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mr. Sparkle", "Household", 9.99, 1300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Buddy Bands", "Jewelry", 49.99, 50000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Slurm", "Grocery", 6.99, 110);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Malibu Stacy", "Toys", 19.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheesy Poofs", "Grocery", 3.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Duff Beer", "Grocery", 10.99, 8);
