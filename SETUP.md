# 🚀 Quick Setup Guide - Yorgancıoğlu

## ✅ Completed Steps

1. ✅ Next.js 14 project structure created
2. ✅ All dependencies installed
3. ✅ Sanity CMS schemas created
4. ✅ All components built
5. ✅ Floating WhatsApp button implemented
6. ✅ Dynamic product pages ready

## 🎯 What You Need to Do Now

### Step 1: Add Hero Images

Copy 3 high-quality furniture images to the `public/hero/` folder:
```
public/hero/hero1.jpg
public/hero/hero2.jpg
public/hero/hero3.jpg
```

**Recommended specs:**
- Format: JPG
- Size: 1920x1080px or higher
- Orientation: Landscape
- Showcase your best furniture pieces!

### Step 2: Verify Video Files

Make sure you have 3 videos in `public/videos/`:
```
✅ public/videos/reel1.mp4
✅ public/videos/reel2.mp4
✅ public/videos/reel3.mp4
```

These should be **9:16 vertical videos** (Instagram/TikTok style).

### Step 3: Update WhatsApp Phone Number

Search and replace `905XXXXXXXXX` with your actual WhatsApp number in these files:
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`
- `app/layout.tsx`
- `app/product/[slug]/page.tsx`

**Format:** Use international format without + or spaces (e.g., `905551234567`)

### Step 4: Set Up Sanity CMS

1. **Create a Sanity account** at https://www.sanity.io/
2. **Create a new project** (choose "Create new project")
3. Copy your **Project ID**
4. Create `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-12-17"
```

### Step 5: Run the Development Server

```bash
npm run dev
```

Open: http://localhost:3000

### Step 6: Access Sanity Studio

Navigate to: http://localhost:3000/studio

**First time setup:**
- You'll be asked to log in with your Sanity account
- Grant permissions
- Start creating products!

### Step 7: Create Your First Product

1. Go to `/studio`
2. Click **"Ürünler"** (Products)
3. Click **"Create"**
4. Fill in the form:
   - **Ürün Adı**: e.g., "Chester Koltuk Takımı"
   - **Slug**: Click "Generate"
   - **Ürün Görselleri**: Upload 3-5 product images
   - **Kısa Açıklama**: Brief description
   - **Ölçüler**: Width, Height, Depth in cm
   - **Kumaş Türü**: Select fabric type
   - **Malzeme**: Select material (Ceviz, Meşe, etc.)
   - **Öne Çıkan Ürün**: ✅ Check this to show on homepage
5. Click **"Publish"**

### Step 8: Create Collections (Optional)

1. In Studio, click **"Koleksiyonlar"** (Collections)
2. Create categories like:
   - "Koltuk Takımları"
   - "Yatak Odası"
   - "Yemek Odası"
   - "Oturma Grupları"

## 📁 File Organization Summary

```
public/
├── gerceklogo.png          ✅ Already present
├── hero/                   ⚠️  Add 3 images here
│   ├── hero1.jpg
│   ├── hero2.jpg
│   └── hero3.jpg
└── videos/                 ✅ Already present
    ├── reel1.mp4
    ├── reel2.mp4
    └── reel3.mp4
```

## 🎨 Key Features Overview

### Homepage Includes:
- ✅ Full-screen hero slider (autoplay every 5 seconds)
- ✅ Trust signals (2 Yıl Garanti, Ücretsiz Kurulum, Özel Tasarım)
- ✅ Featured products from CMS (shows products marked as "featured")
- ✅ Horizontal scrolling video reels
- ✅ Discount popup (appears after 5 seconds, shows once per session)

### Floating WhatsApp Button:
- ✅ Fixed at bottom-right corner
- ✅ Green (#25D366) with pulse animation
- ✅ Opens WhatsApp with pre-filled message
- ✅ Tooltip on hover

### Dynamic Product Pages:
- ✅ Split layout: Images left, Details right
- ✅ Image gallery with thumbnails
- ✅ Specifications table (dimensions, fabric, material)
- ✅ WhatsApp CTA button (product-specific message)
- ✅ SEO-optimized with metadata

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-12-17
   ```
6. Click "Deploy"
7. Done! Your site will be live at yourproject.vercel.app

## 🆘 Troubleshooting

### "Cannot find module" errors?
→ Run `npm install` again

### Hero images not showing?
→ Make sure images are named exactly: `hero1.jpg`, `hero2.jpg`, `hero3.jpg`

### Videos not playing?
→ Videos must be MP4 format and properly named

### Sanity Studio won't load?
→ Check `.env.local` has correct Project ID

### Products not appearing?
→ Make sure you've created products in Studio and marked them as "Featured"

## 📞 Contact

WhatsApp integration is ready! Just update the phone number and you're good to go.

---

**Your Next.js 14 luxury furniture website is ready to launch! 🎉**
