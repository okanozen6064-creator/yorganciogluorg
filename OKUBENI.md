# 🪑 Yorgancıoğlu - Lüks Mobilya Vitrini

Next.js 14, Tailwind CSS, Framer Motion ve Sanity.io CMS ile geliştirilmiş lüks mobilya vitrin websitesi.

## 🌟 Özellikler

✨ **Modern & Animasyonlu Arayüz**
- Tam ekran hero slider otomatik geçişlerle
- Framer Motion ile etkileyici animasyonlar
- Yatay kaydırmalı video reels (9:16)
- Nabız animasyonlu sabitlenmiş WhatsApp butonu
- %10 indirim popup'ı (5 saniye sonra)

🛠 **Güçlü CMS Yönetimi**
- Sanity.io headless CMS
- Ürünleri kolayca ekle/düzenle/sil
- Görsel yükleme ve yönetimi
- Koleksiyon kategorileri
- Taslak/Yayınla iş akışı

📱 **Tam Responsive Tasarım**
- Mobil, tablet ve masaüstü uyumlu
- Hamburger menü (mobil)
- Touch-friendly arayüz
- Optimize edilmiş görseller

💼 **İş Özellikl eri**
- WhatsApp entegrasyonu (4 farklı noktada)
- Güven rozetleri (2 Yıl Garanti, Ücretsiz Kurulum, Özel Tasarım)
- Dinamik ürün sayfaları (SEO optimize)
- Müşteri adayı yaratma (popup, CTA'lar)

## 🚀 Hızlı Başlangıç

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Sanity Kurulumu

Sanity hesabı oluşturun ve `.env.local` dosyası ekleyin:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="proje_id_niz"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-12-17"
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

**Ana Sayfa:** http://localhost:3000  
**Sanity Studio:** http://localhost:3000/studio

## 📂 Proje Yapısı

```
yorgancioglu/
├── app/                     # Next.js sayfaları
│   ├── layout.tsx          # Ana  layout (Navbar + WhatsApp)
│   ├── page.tsx            # Ana sayfa
│   ├── product/[slug]/     # Dinamik ürün sayfaları
│   └── studio/             # Sanity CMS admin
├── components/              # React bileşenleri
│   ├── Navbar.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── HeroSlider.tsx
│   ├── TrustSignals.tsx
│   ├── FeaturedProducts.tsx
│   ├── ReelsSection.tsx
│   └── DiscountPopup.tsx
├── sanity/                  # CMS yapılandırması
│   ├── schemas/
│   │   ├── product.ts      # Ürün şeması
│   │   └── collection.ts   # Koleksiyon şeması
│   └── lib/client.ts
├── public/                  # Statik dosyalar
│   ├── gerceklogo.png
│   ├── hero/               # Hero slider görselleri
│   └── videos/             # Reel videoları
└── ...
```

## 🎨 Teknik Yığın

| Teknoloji | Sürüm | Amaç |
|-----------|-------|------|
| **Next.js** | 14.2.18 | React framework |
| **React** | 18.3.1 | UI kütüphanesi |
| **TypeScript** | 5.x | Tip güvenliği |
| **Tailwind CSS** | 3.4.1 | Stil |
| **Framer Motion** | 11.11.17 | Animasyonlar |
| **Sanity.io** | 3.62.2 | Headless CMS |
| **Lucide React** | 0.462.0 | İkonlar |

## 📋 Sanity CMS Ürün Şeması

```typescript
{
  title: string (gerekli)
  slug: slug (otomatik oluşturulur)
  images: array of images (min 1 gerekli)
  description: text
  category: reference to collection
  dimensions: {
    width: number (cm)
    height: number (cm)
    depth: number (cm)
  }
  fabricType: select (kadife, keten, deri, süet, pamuklu...)
  material: select (ceviz, meşe, kayın, metal, mermer...)
  featured: boolean (ana sayfada göster)
}
```

## 🎯 Ana Sayfa Bölümleri

1. **Hero Slider** - Tam ekran, animasyonlu slider (3 slide)
2. **Güven Sinyalleri** - 3 sütunlu güven rozetleri
3. **Öne Çıkan Ürünler** - CMS'den çekilen ürün grid'i
4. **Reels Bölümü** - 9:16 dikey videolar
5. **İndirim Popup'ı** - 5 saniye sonra görünür

## 📞 WhatsApp Entegrasyonu

WhatsApp butonu şu konumlarda:
- ✅ Navbar ("Randevu Al" CTA)
- ✅ Sağ alt köşe (sabitlenmiş buton)
- ✅ Ürün sayfaları ("WhatsApp'tan Fiyat Al")
- ✅ İndirim popup'ı ("Fırsatı Kaçırmayın")

**Telefon numarasını güncelleyin:** `905XXXXXXXXX` değerini arayın ve değiştirin

## 📱 Medya Dosyaları

### Hero Görselleri
```
public/hero/hero1.jpg  (1920x1080, yatay)
public/hero/hero2.jpg
public/hero/hero3.jpg
```

### Video Reels
```
public/videos/reel1.mp4  (9:16 dikey)
public/videos/reel2.mp4
public/videos/reel3.mp4
```

### Logo
```
public/gerceklogo.png  (şeffaf arka plan)
```

## 🚀 Deployment

### Vercel'e Deploy

1. Kodunuzu GitHub'a yükleyin
2. Vercel'e bağlayın
3. Environment variable'ları ekleyin:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy!

## 📚 Dokümantasyon

Detaylı dokümantasyon için:
- **BASLANGIC_REHBERI.md** - İLK OKUYUN!
- **KURULUM.md** - Adım adım kurulum
- **DOCUMENTATION.md** - Teknik dokümantasyon (İngilizce)
- **ASSETS_GUIDE .md** - Dosya yerleştirme rehberi (İngilizce)

## 🎨 Marka Renkleri

```css
--brand-gold: #D4AF37        /* Birincil altın */
--brand-darkGold: #B8941E    /* Hover durumları */
--brand-cream: #F5F5DC       /* Arka planlar */
--brand-brown: #5C4033       /* Vurgular */
--whatsapp-green: #25D366    /* WhatsApp rengi */
```

## ✅ Yapılacaklar Listesi

### Kurulum İçin:
- [ ] Sanity hesabı oluştur
- [ ] `.env.local` dosyası ekle
- [ ] WhatsApp numarasını güncelle
- [ ] 6+ ürün oluştur
- [ ] Ürünleri "öne çıkan" olarak işaretle

### Yayına Alma İçin:
- [ ] Tüm sayfaları test et
- [ ] WhatsApp linklerini doğrula
- [ ] Mobilde test et
- [ ] GitHub'a yükle
- [ ] Vercel'e deploy et

## 🆘 Sorun Giderme

**Ürünler görünmüyor mu?**
→ Sanity Studio'da ürün oluşturdunuz ve "Öne Çıkan Ürün" olarak işaretlediniz mi?

**Popup görünmüyor mu?**
→ Sayfa yüklendikten 5 saniye bekleyin. Oturum başına bir kez görünür.

**WhatsApp çalışmıyor mu?**
→ Telefon numarasını uluslararası formatta (905XXXXXXXXX) güncellediniz mi?

**Görseller yüklenmiyor mu?**
→ Dosya isimlerini kontrol edin (hero1.jpg, hero2.jpg, hero3.jpg)

## 📈 Performans Optimizasyonları

- ✅ Next.js Image component (otomatik optimizasyon)
- ✅ Lazy loading (görseller & bileşenler)
- ✅ Code splitting (otomatik)
- ✅ CDN'den görsel sunumu (Sanity)
- ✅ Server-side rendering (SSR)

## 🔐 Güvenlik

- ✅ API anahtarları client-side'da yok
- ✅ Environment variable'lar doğru yapılandırılmış
- ✅ .gitignore ile hassas dosyalar korunuyor

## 💡 Gelecek Geliştirmeler (Opsiyonel)

- 🔍 Arama fonksiyonu
- 🛒 Sepet sistemi
- 🌍 Çoklu dil desteği (Türkçe/İngilizce)
- 📧 E-posta bülteni
- 📊 Google Analytics
- 💬 Canlı destek widgeti

---

**Oluşturulma Tarihi:** 17 Aralık 2024  
**Framework:** Next.js 14.2.18  
**Durum:** ✅ Yayına Hazır  

**Mobilya işinizde başarılar! 🪑✨**

---

## 📞 Destek

İşte şu dosyalarda detaylı rehberler var:
- `BASLANGIC_REHBERI.md` - Türkçe başlangıç rehberi
- `KURULUM.md` - Türkçe kurulum adımları
- `DOCUMENTATION.md` - İngilizce teknik döküman

**Kod incelemesi için:** VSCode'da dosyaları açıp inceleyin. Tüm kodlar açıklamalı ve TypeScript tiplendirilmiş.
