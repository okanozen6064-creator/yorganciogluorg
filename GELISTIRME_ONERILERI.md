# Yorgancıoğlu Web Sitesi Geliştirme ve İyileştirme Önerileri

Müşteriniz için hazırladığınız mobilya sitesini "modern, erişilebilir ve ultra-profesyonel" bir seviyeye taşımak için aşağıdaki teknik ve tasarımsal iyileştirmeleri öneriyorum. Bu öneriler, sitenin sadece bir katalog değil, müşteri kazandıran bir platform olmasını sağlayacaktır.

## 1. Müşteri Deneyimi (UX) ve Fonksiyonelite

### 🔍 Akıllı Arama (Smart Search)
Kullanıcıların aradıkları ürüne saniyeler içinde ulaşması çok önemlidir.
- **Öneri:** `cmdk` veya özel bir arama modalı ekleyerek kullanıcı "Koltuk" yazdığında anında resimli sonuçların listelenmesini sağlayabiliriz.
- **Kütüphane:** `cmdk` (Command Menu) veya `Algolia`.

### ❤️ Favorilerim / İstek Listesi
Müşteriler beğendikleri ürünleri kaybetmek istemezler.
- **Öneri:** Oturum açmaya gerek kalmadan (LocalStorage kullanarak) çalışan bir "Kalp" butonu ekleyelim. Beğendikleri ürünleri "Favorilerim" sayfasında toplu görebilsinler.
- **Teknik:** `Zustand` (State management) + `LocalStorage`.

### ⚡ Gelişmiş Filtreleme
Koleksiyon sayfalarında sadece listeleme yerine özelliklere göre daraltma imkanı sunulmalı.
- **Öneri:** Sol tarafa veya mobil için bir çekmeceye (drawer) filtreler ekleyelim:
  - *Renk:* (Kırmızı, Bej, Gri renk baloncukları)
  - *Materyal:* (Ahşap, Metal, Mermer)
  - *Fiyat Aralığı:* (Opsiyonel)

### 📅 Randevu ve Teklif Sistemi
Sadece WhatsApp'a yönlendirmek yerine, kurumsal bir form ile talep toplanabilir.
- **Öneri:** Ürün sayfasında "Fiyat Teklifi Al" veya "Mağaza Randevusu Oluştur" butonu. Bu buton şık bir form açar (Tarih/Saat seçimi ile) ve size e-posta/SMS olarak düşer.
- **Kütüphane:** `React Hook Form` + `Zod` (Validasyon için) + `Resend` (Mail gönderimi için).

## 2. Görsel Şölen ve "Wow" Efekti (UI)

### 🕶️ Artırılmış Gerçeklik (AR) - "Evimde Gör"
Mobilya sektöründe en büyük trend (IKEA gibi).
- **Öneri:** Eğer ürünlerin 3D modelleri varsa, kullanıcı telefondan siteye girdiğinde "Evimde Gör" diyerek kamerasıyla koltuğu salonuna yerleştirebilir.
- **Teknik:** `Google Model-Viewer` (Web tabanlı AR için çok basittir).

### 🧊 3D Hero Animasyonları
Anasayfa girişinde statik resim yerine interaktif 3D objeler.
- **Öneri:** Mouse hareketine duyarlı, dönen soyut mobilya parçaları veya ışık oyunları.
- **Kütüphane:** `Spline` (En kolayı ve performanslısı) veya `React Three Fiber` (Daha ileri seviye).

### 🎬 Sayfa Geçiş Animasyonları (Page Transitions)
Sayfalar arası geçişlerde ekranın beyazlayıp tekrar yüklenmesi yerine, sinematik geçişler.
- **Öneri:** Bir sayfadan diğerine geçerken fotoğrafların kayarak yerleşmesi veya yumuşak "fade" efektleri.
- **Kütüphane:** `Framer Motion` (Zaten kullanıyoruz, `template.tsx` dosyası ile site geneline yayabiliriz).

## 3. Yapay Zeka ve Otomasyon

### 🤖 Gerçek Bir AI Asistan (OpenAI Entegrasyonu)
Şu anki kural tabanlı asistanı gerçek bir yapay zekaya dönüştürebiliriz.
- **Öneri:** OpenAI Assistant API kullanarak, AI'a tüm ürün kataloğunu ve fiyatlarını öğretiriz. Müşteri "Salonum 20 metrekare, bej rengi ne önerirsin?" dediğinde AI, *gerçek ürünlerinizi linkleriyle birlikte* önerir.
- **Teknik:** `OpenAI API` + `Vercel AI SDK`.

## 4. Teknik ve SEO İyileştirmeleri

### 📈 Schema Markup (Yapısal Veri)
Google'ın ürünlerinizi "Ürün" olarak tanıması için.
- **Öneri:** Ürün detay sayfalarına JSON-LD formatında veri eklemek. Böylece Google aramalarında ürünün fiyatı, stok durumu ve yıldız puanı doğrudan görünür.

### 💨 Image Optimization (ileri seviye)
- **Öneri:** Sanity'nin sunduğu özellikleri kullanarak, kullanıcının internet hızına göre düşük/yüksek kaliteli görsel sunumu (LQIP - Low Quality Image Placeholders) ile sitenin açılışını anlık hale getirmek.

## Özet Yol Haritası (Sırasıyla Yapılması Gerekenler)

1.  **Hemen Yapılabilir:** Favorilerim (Wishlist) özelliği eklemek.
2.  **Hemen Yapılabilir:** Gelişmiş Filtreleme (Sanity tarafında veri girişi gerektirir).
3.  **Orta Vadeli:** 3D Deneyimler ve Spline entegrasyonu.
4.  **Uzun Vadeli:** Gerçek AI Asistan entegrasyonu.

Bu özelliklerden hangisi müşteriniz için öncelikliyse, bir sonraki adımda onu kodlamaya başlayabiliriz!
