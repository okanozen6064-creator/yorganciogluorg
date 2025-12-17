# 🚀 Hızlı Kurulum Rehberi - Yorgancıoğlu

## ✅ Tamamlanan Adımlar

1. ✅ Next.js 14 proje yapısı oluşturuldu
2. ✅ Tüm bağımlılıklar yüklendi
3. ✅ Sanity CMS şemaları hazırlandı
4. ✅ Tüm bileşenler kodlandı
5. ✅ Sabitlenmiş WhatsApp butonu uygulandı
6. ✅ Dinamik ürün sayfaları hazır

## 🎯 Şimdi Yapmanız Gerekenler

### Adım 1: Hero Görsellerini Ekleyin

3 adet yüksek kaliteli mobilya görseli `public/hero/` klasörüne kopyalayın:
```
public/hero/hero1.jpg
public/hero/hero2.jpg
public/hero/hero3.jpg
```

**Önerilen özellikler:**
- Format: JPG
- Boyut: 1920x1080px veya daha yüksek
- Oran: 16:9 (Yatay)
- Yönlendirme: Yatay
- Dosya boyutu: 500KB'ın altında (web için optimize edilmiş)
- İçerik: En iyi mobilya vitrin fotoğrafları

**İpuçları:**
- ✅ Yüksek kaliteli, profesyonel fotoğraflar kullanın
- ✅ Parlak, iyi ışıklandırılmış görseller tercih edin
- ✅ En iyi/en yeni mobilyalarınızı gösterin
- ❌ Bulanık veya karanlık görseller kullanmayın

### Adım 2: Video Dosyalarını Doğrulayın

`public/videos/` klasöründe 3 videonun olduğundan emin olun:
```
✅ public/videos/reel1.mp4
✅ public/videos/reel2.mp4
✅ public/videos/reel3.mp4
```

Bunlar **9:16 dikey videolar** (Instagram/TikTok formatı) olmalıdır.

### Adım 3: WhatsApp Telefon Numarasını Güncelleyin

`905XXXXXXXXX` ifadesini aratıp gerçek WhatsApp numaranızla değiştirin:
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`
- `app/layout.tsx`
- `app/product/[slug]/page.tsx`

**Format:** Uluslararası format + ve boşluk olmadan (örnek: `905551234567`)

### Adım 4: Sanity CMS Kurulumu

1. **Sanity hesabı oluşturun:** https://www.sanity.io/
2. **Yeni proje oluşturun** ("Create new project" seçeneği)
3. **Proje ID'nizi** kopyalayın
4. Kök dizinde `.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="proje_id_nizi_buraya"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-12-17"
```

### Adım 5: Geliştirme Sunucusunu Çalıştırın

```bash
npm run dev
```

Açın: http://localhost:3000

### Adım 6: Sanity Studio'ya Erişin

Gidin: http://localhost:3000/studio

**İlk seferinde:**
- Sanity hesabınızla giriş yapmanız istenecek
- İzinleri onaylayın
- Ürün oluşturmaya başlayın!

### Adım 7: İlk Ürününüzü Oluşturun

1. `/studio` adresine gidin
2. **"Ürünler"** bölümüne tıklayın
3. **"Oluştur"** butonuna basın
4. Formu doldurun:
   - **Ürün Adı**: örn: "Chester Koltuk Takımı"
   - **Slug**: "Oluştur" butonuna tıklayın
   - **Ürün Görselleri**: 3-5 ürün görseli yükleyin
   - **Kısa Açıklama**: Kısa bir açıklama yazın
   - **Ölçüler**: Genişlik, Yükseklik, Derinlik (cm olarak)
   - **Kumaş Türü**: Kumaş türünü seçin
   - **Malzeme**: Malzeme seçin (Ceviz, Meşe, vb.)
   - **Öne Çıkan Ürün**: ✅ Ana sayfada gösterilmesi için işaretleyin
5. **"Yayınla"** butonuna tıklayın

### Adım 8: Koleksiyonlar Oluşturun (İsteğe Bağlı)

1. Studio'da **"Koleksiyonlar"** bölümüne tıklayın
2. Şu kategorileri oluşturun:
   - "Koltuk Takımları"
   - "Yatak Odası"
   - "Yemek Odası"
   - "Oturma Grupları"

## 📁 Dosya Organizasyonu Özeti

```
public/
├── gerceklogo.png          ✅ Zaten mevcut
├── hero/                   ⚠️  Buraya 3 görsel ekleyin
│   ├── hero1.jpg
│   ├── hero2.jpg
│   └── hero3.jpg
└── videos/                 ✅ Zaten mevcut
    ├── reel1.mp4
    ├── reel2.mp4
    └── reel3.mp4
```

## 🎨 Öne Çıkan Özellikler

### Ana Sayfa İçeriği:
- ✅ Tam ekran hero slider (her 5 saniyede bir otomatik geçiş)
- ✅ Güven sinyalleri (2 Yıl Garanti, Ücretsiz Kurulum, Özel Tasarım)
- ✅ CMS'den öne çıkan ürünler ("öne çıkan" olarak işaretlenmiş)
- ✅ Yatay kaydırmalı video reels
- ✅ İndirim popup'ı (5 saniye sonra görünür, oturum başına bir kez)

### Sabitlenmiş WhatsApp Butonu:
- ✅ Sağ alt köşede sabitlenmiş
- ✅ Yeşil (#25D366) nabız animasyonlu
- ✅ WhatsApp'ı önceden doldurulmuş mesajla açar
- ✅ Üzerine gelindiğinde ipucu gösterir

### Dinamik Ürün Sayfaları:
- ✅ Bölünmüş düzen: Solda görseller, sağda detaylar
- ✅ Küçük resimlerle görsel galerisi
- ✅ Özellikler tablosu (ölçüler, kumaş, malzeme)
- ✅ WhatsApp CTA butonu (ürüne özel mesaj)
- ✅ SEO için metadata optimize edilmiş

## 🚀 Vercel'e Deployment

1. Kodunuzu GitHub'a gönderin
2. https://vercel.com adresine gidin ve giriş yapın
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi içe aktarın
5. Environment variable'ları ekleyin:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=proje_id_niz
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-12-17
   ```
6. "Deploy" butonuna tıklayın
7. Bitti! Siteniz yourproject.vercel.app adresinde yayında olacak

## 🆘 Sorun Giderme

### "Cannot find module" hataları mı alıyorsunuz?
→ `npm install` komutunu tekrar çalıştırın

### Hero görselleri görünmüyor mu?
→ Görsellerin tam olarak şöyle adlandırıldığından emin olun: `hero1.jpg`, `hero2.jpg`, `hero3.jpg`

### Videolar oynatılmıyor mu?
→ Videoların MP4 formatında ve doğru adlandırıldığından emin olun

### Sanity Studio yüklenmiyor mu?
→ `.env.local` dosyasının doğru Proje ID'sine sahip olduğunu kontrol edin

### Ürünler görünmüyor mu?
→ Studio'da ürün oluşturduğunuzdan ve bunları "Öne Çıkan" olarak işaretlediğinizden emin olun

## 📞 İletişim

WhatsApp entegrasyonu hazır! Sadece telefon numarasını güncelleyin ve kullanıma hazır.

---

**Next.js 14 lüks mobilya websiteniz yayına hazır! 🎉**
