# Result-Entrance-Test

Đây là bài làm bài test đầu vào của Modelty Strategy & Consulting Co Ltd.

## Hướng dẫn cài đặt

Để có thể chạy chương trình cần cài đặt trước `Node.js` và `Visual Studio Code` (hoặc các trình soạn thảo khác).

1. Tải repo này về hoặc clone bằng giao diện dòng lệnh(yêu cầu tải trước `Git`).

```bash
   git clone https://github.com/Noahvnp/Result_Entrance_Test.git
```

2. Mở terminal với địa chỉ thư mục hiện tại là folder vừa tải về `Result_Entrance_Test`
3. Chạy dòng lệnh sau để tải các gói cần thiết để chạy chương trình

```bash
   npm install
```

4. Có 6 bài tập, mỗi bài được đặt tên theo số thứ tự bài tập đưa ra.
   Để chạy chương trình, chạy dòng lệnh như sau:

```bash
   node tenbaitap.js
```

## PART 1: PROGRAMMING FUNDAMENTALS

#### Problem 1: Custom FizzBuzz

`Mô tả:` Chương trình này in ra các số từ 1 đến 100. Tuy nhiên, đối với
các bội số của một số nhất định `x`, in "Foo" thay vì in ra số đó, và
đối với các bội số của một số khác `y`, in "Bar".
Đối với các số là bội số của cả `x` và `y`, in "FooBar".
Các giá trị của `x` và `y` được nhập bởi người dùng.

`Lưu ý:` Bài tập này nhận 2 giá trị x, y từ người dùng nhập vào.
Sau khi chạy chương trình, ở cửa số giao diện dòng lệnh
hiện lên yêu cầu nhập vào 2 giá trị x, y này.

## Problem 2: Advanced Palindrome Check

`Mô tả:` Hàm này kiểm tra xem một chuỗi có phải là palindrome hay không,
chỉ xét các ký tự chữ và số và bỏ qua các ký tự khác và không phân biệt chữ hoa chữ thường.
Và cũng phải xử lý các ký tự Unicode.

## PART 2: DATA STRUCTURES

#### Problem 3: Anagram Groups

`Mô tả:` Hàm này nhóm một danh sách các chuỗi thành các anagram. Mỗi nhóm chứa các chuỗi là anagram của nhau.

Độ phức tạp thời gian của bài toán là O(n⋅m) và độ phức tạp không gian cũng là O(n⋅m),
trong đó n là số lượng chuỗi và m là chiều dài trung bình của các chuỗi.

#### Problem 4: Sparse Array Rotation

`Mô tả:` Hàm này xoay một mảng sparse (một mảng có số lượng lớn các giá trị mặc định, chẳng hạn như `None`)
sang phải bởi một số bước nhất định. Đảm bảo các giá trị mặc định được giữ nguyên vị trí tương đối của chúng.

## PART 3: BASIC WEB DEVELOPMENT

#### Problem 5: Dynamic HTML Page

`Mô tả:` Tạo một trang HTML đơn giản với một biểu mẫu bao gồm:

- Một ô nhập liệu cho tên người dùng
- Một ô nhập số cho tuổi của người dùng
- Một ô chọn màu yêu thích của người dùng (với ít nhất ba tùy chọn)
- Một nút gửi
  Khi biểu mẫu được gửi, hiển thị các giá trị đầu vào trên cùng một trang mà không làm mới trang.
  Ngoài ra, thay đổi màu nền của trang thành màu yêu thích đã chọn.

`Lưu ý:` Chạy bằng cách mở tệp `problem5.html` trong trình duyệt của bạn để kiểm tra.

## PART 4: BONUS (OPTIONAL)

#### Problem 6: Custom API Request

`Mô tả:` Viết một script bằng JavaScript nào để thực hiện một yêu cầu GET
tới một API công khai (ở đây sử dụng [OpenWeatherMap](https://openweathermap.org/))
và xử lý phản hồi bằng cách in ra dữ liệu thời tiết và in ra tóm tắt về điều kiện thời tiết hiện tại.
