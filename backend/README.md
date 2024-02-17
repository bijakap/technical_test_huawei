# Pengembangan Backend

**Tugas:**
Bangun sebuah server sederhana menggunakan Node.js atau framework Express. Buatlah endpoint API yang dapat menerima data formulir dari frontend pada Hari 1 dan menyimpannya ke dalam sebuah penyimpanan data sederhana, misalnya dalam
bentuk array di dalam server. Pastikan bahwa server dapat mengembalikan data yang telah disimpan ketika diminta oleh frontend.

## Menjalankan Proyek

1. **Instal Dependencies:**

   - Instal dependencies menggunakan npm:
     ```
     npm install
     ```

2. **Jalankan Server:**

   - Gunakan perintah berikut untuk menjalankan server Express:
     ```
     npm start
     ```
   - Server akan berjalan di `http://localhost:3000`

3. **Endpoints API:**
   - Deskripsi singkat tentang endpoint-endpoint
     - /forms (GET) : get all forms
     - /froms/submit (POST) : submit forms
       ```
       {
          "nama" : "Bijak",
          "email" : "bijak.algifan.p@gmail.com",
          "nomor_telepon" : "+6287737771211"
       }
       ```
     - /froms/{id} (GET) : get forms by id
