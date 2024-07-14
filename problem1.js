// Problem 1: Custom FizzBuzz

const readline = require("readline");

// tạo giao diện dòng lệnh tương tác người dùng
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// hàm in ra bội và bội chung của x, y từ 1 đến 100
const customFizzBuzz = (x, y) => {
  for (let i = 1; i <= 100; i++) {
    if (i % x === 0 && i % y === 0) {
      // nếu là bội của cả x, y
      console.log("FooBar");
    } else if (i % x === 0) {
      // là bội của x
      console.log("Foo");
    } else if (i % y === 0) {
      // là bội của y
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
};

// Yêu cầu người dùng nhập vào giá trị x,y sau đó gọi hàm customFizzBuzz
rl.question("Nhập vào giá trị x: ", (x) => {
  rl.question("Nhập vào giá trị y: ", (y) => {
    customFizzBuzz(parseInt(x), parseInt(y));
    rl.close();
  });
});
