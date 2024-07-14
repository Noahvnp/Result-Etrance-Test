// Problem 3: Anagram Groups

const groupAnagrams = (strs) => {
  // tạo object lữu trữ anagrams group
  const anagramGroups = {};
  //   Mảng các số nguyên tố để tính toán giá trị băm
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  // Hàm tính toán giá trị băm cho mỗi chuỗi, dùng làm key cho anagrams group
  function calculateHash(str) {
    let hash = 1;
    for (let char of str) {
      hash *= primeNumbers[char.charCodeAt(0) - "a".charCodeAt(0)];
    }
    return hash;
  }

  for (let str of strs) {
    // Tính toán giá trị băm cho chuỗi hiện tại
    const hash = calculateHash(str);
    // Kiểm tra nhóm đã tồn tại chưa
    if (anagramGroups[hash]) {
      anagramGroups[hash].push(str);
    } else {
      anagramGroups[hash] = [str];
    }
  }
  // trả về value mảng các chuỗi anagrams
  return Object.values(anagramGroups);
};

// Ví dụ
const input = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];
const result = groupAnagrams(input);
console.log(result);
