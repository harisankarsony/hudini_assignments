// Problem 1
console.log("\nProblem 1");

function extractProperty() {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const extractedValues = users.map((user) => user.name);

  console.log(extractedValues);
}
extractProperty();

// Problem 2
console.log("\nProblem 2");

function getEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const filteredNumbers = numbers.filter((number) => number % 2 === 0);

  console.log(filteredNumbers);
}
getEvenNumbers();

// Problem 3
console.log("\nProblem 3");

function filterAndFormat() {
  const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    {
      name: "Charlie",
      age: 16,
    },
    { name: "David", age: 20 },
  ];

  const above18 = users
    .filter((user) => user.age > 18)
    .map((user) => `${user.name} is ${user.age} years old`);

  console.log(above18);
}
filterAndFormat();

// Problem 4
console.log("\nProblem 4");

function filterAndFormat2() {
  const products = [
    { name: "Laptop", price: 999, category: "electronics" },
    { name: "Phone", price: 699, category: "electronics" },
    { name: "Keyboard", price: 49, category: "electronics" },
    { name: "Mouse", price: 19, category: "electronics" },
    { name: "Pen", price: 2, category: "stationery" },
    { name: "Notebook", price: 52, category: "stationery" },
  ];

  const moreThan20 = products
    .filter(
      (product) => product.price > 20 && product.category === "electronics"
    )
    .map((product) => `${product.name}: $${product.price}`);

  console.log(moreThan20);
}
filterAndFormat2();

// Problem 5
console.log("\nProblem 5");

function getTotalRevenue() {
  const orders = [
    { id: 1, amount: 100, status: "completed" },
    { id: 2, amount: 200, status: "pending" },
    { id: 3, amount: 150, status: "completed" },
    { id: 4, amount: 250, status: "completed" },
    { id: 5, amount: 300, status: "canceled" },
  ];

  const completedOrders = orders
    .filter((order) => order.status === "completed")
    .reduce((accumulator, current) => accumulator + current.amount, 0);

  console.log(completedOrders);
  console.log("\n");
}
getTotalRevenue();
