# Prime Number AR Project

## Projenin Amacı / Purpose of the Project

### Türkçe
Bu proje, 0-7 yaş arası çocukların asal sayılar hakkında temel bilgiler edinmelerini ve öğrenme süreçlerini eğlenceli bir şekilde desteklemeyi amaçlamaktadır. Proje, görsel ve interaktif içerikler sunarak çocukların matematiksel kavramları daha kolay anlamalarına yardımcı olur. Ayrıca, oyunlarla çocukların öğrenme sürecini keyifli hale getirir.

### English
This project aims to provide basic knowledge about prime numbers to children aged 0-7 and support their learning process in an enjoyable way. By offering visual and interactive content, the project helps children understand mathematical concepts more easily. Additionally, games make the learning process fun and engaging for children.

---

## Proje Linki / Project Link
**Live URL:** [Prime Number AR](https://prime-number-ar.vercel.app/)
## Test User Giriş Bilgileri
user email = test@example.com
password = testPassword
---

## Proje Dokümanları ve Dosyalar / Project Documents and Files

Bu projede kullanılan kaynaklara ve dosyalara aşağıdaki bağlantılardan ulaşabilirsiniz.

### APK Dosyaları / APK Files
- [PrimeNumberTouchAndroidAPKV1.apk](public/apk/PrimeNumberTouchAndroidAPKV1.apk)

### Dokümanlar / Documents
- [Gantt Şeması](public/documents/gant.png)
- [Ders Planı (Excel)](public/documents/lessons_1_20241113210805.xlsx)
- [SAAS Analizi](public/documents/SAAS%20Analizi.pdf)
- [SWOT Analizi](public/documents/SWOT.pdf)
- [Teknoloji Hazırlık Seviyesi (THS) 7 Belgesi](public/documents/Teknoloji%20Hazırlık%20Seviyesi%20(THS)%207%20Belgesi.pdf)
- [Trello Görev Listesi](public/documents/trello%20task%20listesi.pdf)
- [Use Case Diagramı](public/documents/usecase.png)

### Görseller / Images
- [Asal Sayılar (JPG)](public/images/asalsss.jpg)

---

## Proje Kurulumu ve Test Kullanıcı Bilgileri / Project Setup and Test User Information

### Proje Kurulum Adımları / Project Setup Steps
1. **Gereksinimler / Requirements:**
   - Node.js (v16 veya üzeri / v16 or above)
   - MongoDB bağlantısı (lokal veya bulut tabanlı / local or cloud-based)

2. **Ortam Değişkenleri / Environment Variables:**
   - `.env` dosyasına aşağıdaki gibi bir yapı ekleyin:
     ```
     MONGO_URI=mongodb+srv://<kullanıcı>:<şifre>@<cluster>.mongodb.net/<veritabanı>?retryWrites=true&w=majority
     ```

3. **Bağımlılıkları yükleyin / Install dependencies:**
   ```bash
   npm install
