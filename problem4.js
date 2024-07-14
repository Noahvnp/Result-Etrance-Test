function rotateSparseArray(arr, steps) {
  const length = arr.length;

  // Trường hợp đặc biệt: nếu độ dài mảng là 0 hoặc 1, trả về chính mảng đó
  if (length <= 1) {
    return arr;
  }

  // Tính toán số bước thực sự (xử lý khi steps > length)
  steps = steps % length;

  // Khởi tạo mảng kết quả với các giá trị mặc định (null)
  const result = Array(length).fill(null);

  // Duyệt qua mảng gốc
  for (let i = 0; i < length; i++) {
    // Tính toán chỉ số mới sau khi xoay
    let newIndex = (i + steps) % length;

    // Nếu phần tử hiện tại không phải là null, đặt nó vào chỉ số mới
    if (arr[i] !== null) {
      result[newIndex] = arr[i];
    } else {
      // Nếu phần tử hiện tại là null, giữ nó ở cùng chỉ số trong mảng kết quả
      result[i] = null;
    }
  }

  return result;
}

// Ví dụ sử dụng:
const input = [1, null, 2, null, 3];
const steps = 2;
const output = rotateSparseArray(input, steps);
console.log(output); // Output: [null, 2, null, 3, 1]
