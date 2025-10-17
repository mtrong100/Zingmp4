# Zingmp4

**Zingmp4** — bản “fake clone” của Zing, dự án front-end đơn giản để giả lập giao diện nghe nhạc.  
Dự án được phát triển trên HTML / CSS / JavaScript để học tập & trình diễn.

## 📸 Screenshot
![Screenshot](https://i.postimg.cc/rw1HnVHv/Screenshot-2025-10-17-153951.png)

## 📁 Cấu trúc thư mục

```
Zingmp4/
│
├── img/                  ← ảnh, biểu tượng, các tài nguyên hình ảnh
├── songs/                ← thư mục chứa file nhạc (ví dụ mp3)
├── index.html
├── script.js
├── songs.js
├── style.css
├── responsive.css
├── responsive.scss
└── style.scss
```

## 🚀 Cách chạy & sử dụng

1. Clone hoặc tải file ZIP của repo:

   ```bash
   git clone https://github.com/mtrong100/Zingmp4.git
   ```

   hoặc tải “Download ZIP” trên GitHub.

2. Vào thư mục dự án:

   ```bash
   cd Zingmp4
   ```

3. Mở file `index.html` trong trình duyệt (Chrome, Firefox, v.v):

   - Kích đúp mở file, hoặc  
   - Dùng Live Server trong VSCode để chạy (nếu bạn muốn hot‑reload).

4. Giao diện sẽ hiển thị trang nghe nhạc với các bài hát (nếu có file nhạc trong `songs/`) và các nút điều khiển (play, pause, next, prev…).

## ⚙️ Cấu hình & tuỳ chỉnh

- Bạn có thể thêm file nhạc (định dạng `.mp3` hoặc tương thích) vào thư mục `songs/`.
- Mở `songs.js` để khai báo danh sách bài hát, bao gồm tên file, tên bài, ca sĩ, ảnh minh hoạ.
- Trong `style.scss` / `responsive.scss`, bạn có thể tuỳ biến giao diện (màu sắc, bố cục responsive).
- `script.js` chứa logic điều khiển phát nhạc, chuyển bài, xử lý UI.

## 💡 Tính năng (có / chưa có)

| Tính năng                 | Trạng thái     |
|---------------------------|----------------|
| Phát / Tạm dừng nhạc      | ✔ Có           |
| Chuyển bài (Next / Prev)  | ✔ Có           |
| Hiển thị ảnh minh hoạ     | ✔ Có (nếu có file ảnh) |
| Responsive (cho mobile)   | ✔ Có (CSS/SCSS) |
| Tìm kiếm bài hát          | ❌ Chưa        |
| Playlist, Shuffle, Repeat | ❌ Chưa        |
| Streaming server backend  | ❌ Chưa        |

## 📂 Tải về & Phân phối

- Vì đây là dự án front-end thuần, bạn chỉ cần tải hoặc clone repo là có thể chạy được.
- Bạn có thể đóng gói dự án (ZIP, tarball…) để phân phối cho người khác.
- Đảm bảo giữ nguyên cấu trúc thư mục `songs/`, `img/` để các file được tham chiếu đúng đường dẫn.

## 🛠 Môi trường phát triển & công cụ đề xuất

- VSCode (với extension Live Server để dễ xem)
- Trình duyệt hiện đại (Chrome, Firefox, Edge)
- Node.js (không bắt buộc nếu bạn chỉ dùng front-end, nhưng có thể dùng nếu bạn thêm phần backend hoặc build tool)
- SASS compiler (nếu bạn muốn compile từ `.scss` thành `.css` nếu bạn chỉnh sửa file `.scss`)

## 📜 Giấy phép

Bạn có thể thêm phần giấy phép (license) nếu muốn cho phép người dùng sử dụng, sửa đổi, phân phối dự án này. Ví dụ: MIT, GPL-3.0, v.v.

---

**Cảm ơn bạn đã sử dụng Zingmp4!**  
Nếu bạn có ý định phát triển thêm (ví dụ backend API, streaming, quản lý playlist…), tôi có thể hỗ trợ thêm khi bạn muốn mở rộng.
