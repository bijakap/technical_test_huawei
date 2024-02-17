# Techincal Test Huawei - Bijak Algifan Putra

- `/frontend` - Tugas 1
- `/backend` - Tugas 2
- `/testing` - Tugas 3

## Instalasi dan Menjalankan Proyek

### Install All

Pastikan Anda telah menginstal paket concurrently sebelumnya dengan menjalankan perintah:
```bash
npm install concurrently --save-dev
```

Untuk menginstal dependensi pada semua proyek (backend, frontend, dan testing) secara bersamaan, Anda dapat menggunakan perintah berikut:

```bash
npm run install-all
```

### 1. Start All
Untuk menjalankan semua proyek (backend, frontend, dan testing) secara bersamaan, gunakan perintah:

```bash
npm run start-all
```

Perintah di atas akan menjalankan backend dan frontend secara bersamaan menggunakan concurrently. Setelah keduanya berjalan, testing akan dimulai.

### 2. Menjalankan Satu-Satu

Jika Anda ingin menjalankan proyek satu per satu, Anda dapat menggunakan perintah berikut:

#### Start Backend

Untuk menjalankan backend:

```bash
npm run start-backend
```

#### Start frontend

Untuk menjalankan frontend:

```bash
npm run start-frontend
```

#### Start testing

Untuk menjalankan testing setelah backend dan frontend berjalan:

```bash
npm run start-testing
```
