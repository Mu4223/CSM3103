//Task 3 – JavaScript Object and Prototype

//1
var product = {
  productName: "Adidas",
  quantity: 1,
  price: 150.00
};

console.log(product.productName); // Output: Adidas
console.log(product.quantity); // Output: 1
console.log(product.price); // Output: 150.00

//2
function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
  
  Book.prototype.price = 29.90;
  
  var book = new Book("Hello World", "Muaz Zainal");
  
  console.log(book.bookName); // Output: Hello World
  console.log(book.authorName); // Output: Muaz Zainal
  console.log(book.price); // Output: 29.90

//3
function Employee(employeeName, employeeId, salary) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.salary = salary;
  }
  
  function Manager(managerName, branch) {
    this.managerName = managerName;
    this.branch = branch;
  }
  
  Manager.prototype = new Employee();
  
  var manager = new Manager("Muaz Zainal", "New York");
  
  console.log(manager.employeeName); // Output: undefined
  console.log(manager.employeeId); // Output: undefined
  console.log(manager.salary); // Output: undefined
  console.log(manager.managerName); // Output: Muaz Zainal
  console.log(manager.branch); // Output: New York
  
  