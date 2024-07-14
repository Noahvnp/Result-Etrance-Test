//Problem 2: Advanced Palindrome Check

// Hàm kiểm tra chuỗi có phải là palindrome không
const isPalindrome = (str) => {
  // Chuẩn hóa chuỗi để loại bỏ dấu
  const cleanedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Chuẩn hóa Unicode và chuyển thành chữ thường, loại bỏ ký tự không phải chữ cái và số
  const normalizedStr = cleanedStr.toLowerCase().replace(/[\W_]/g, "");

  // Đảo ngược chuỗi để so sánh với chuỗi đã chuẩn hóa
  const reversedStr = normalizedStr.split("").reverse().join("");

  // So sánh chuỗi đã chuẩn hóa với chuỗi đã đảo ngược
  return normalizedStr === reversedStr;
};

// Ví dụ
const inputStr1 = "A man, a plan, a canal, Panamá";
const inputStr2 = "Hello, world!";
console.log("Kiểm tra có phải là chuỗi Palindrome:");
console.log(`Chuỗi "${inputStr1}" :`, isPalindrome(inputStr1)); // Output: true
console.log(`Chuỗi "${inputStr2}" :`, isPalindrome(inputStr2)); // Output: false
