# Sanity Studio'da Kategori (Koleksiyon) Oluşturma Rehberi

Ürün eklerken "Kategori" kısmının boş gelmesinin sebebi, sistemde henüz tanımlanmış bir Koleksiyon (Kategori) bulunmamasıdır. Sanity sisteminde kategoriler de birer içerik türüdür ve önce oluşturulmaları gerekir.

Aşağıdaki adımları takip ederek kategorilerinizi oluşturabilirsiniz:

## 1. Studio'ya Giriş Yapın
Tarayıcınızda `/studio` adresine gidin (örneğin: `http://localhost:3000/studio` veya `https://yorganciogluorg.vercel.app/studio`).

## 2. Koleksiyonlar Sekmesine Gidin
Sol menüde **"Koleksiyonlar"** (Collections) başlığını göreceksiniz. Buna tıklayın.

## 3. Yeni Kategori Oluşturun
1. Üstteki **kalem ikonu**na (Create new list item) tıklayın.
2. Açılan formda şu bilgileri girin:
   - **Koleksiyon Adı:** Örneğin `Yatak Odası`
   - **Slug:** `Generate` butonuna basın (Otomatik olarak `yatak-odasi` yapacaktır). *Bu kısım çok önemlidir, kodun çalışması için slug doğru olmalıdır.*
   - **Görsel:** İsterseniz kategoriye ait bir kapak görseli yükleyin.
3. Sağ alttaki **Publish** (Yayınla) butonuna basarak kaydedin.

## 4. Gerekli Tüm Kategorileri Oluşturun
Sitenin doğru çalışması için aşağıdaki kategorileri tek tek oluşturmalısınız:

| Koleksiyon Adı | Slug (Generate butonuna basınca çıkmalı) |
|---|---|
| Yatak Odası | `yatak-odasi` |
| Yemek Odası | `yemek-odasi` |
| Koltuk Takımları | `koltuk-takimlari` |
| Oturma Grupları | `oturma-gruplari` |
| Özel Tasarım | `ozel-tasarim` |

## 5. Ürünlere Kategori Atayın
1. Sol menüden **"Ürünler"** sekmesine gidin.
2. Mevcut bir ürüne tıklayın veya yeni ürün oluşturun.
3. **"Kategori"** alanına tıkladığınızda artık yukarıda oluşturduğunuz kategoriler listede görünecektir.
4. İlgili kategoriyi seçip **Publish** butonuna basın.

Artık sitenizde ilgili kategori sayfasına (örn: `/collections/yatak-odasi`) girdiğinizde sadece o kategoriye ait ürünler görünecektir.
