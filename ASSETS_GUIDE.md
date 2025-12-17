# 📂 Asset Placement Guide

## Where to Put Your Files - Visual Guide

```
📁 yorgancioglu/
│
├── 📁 public/                           ← ALL STATIC ASSETS GO HERE
│   │
│   ├── 🖼️ gerceklogo.png               ✅ DONE - Your company logo
│   │
│   ├── 📁 hero/                         ⚠️  ADD 3 HERO IMAGES HERE
│   │   ├── hero1.jpg                   ← Homepage hero slide 1
│   │   ├── hero2.jpg                   ← Homepage hero slide 2
│   │   └── hero3.jpg                   ← Homepage hero slide 3
│   │
│   ├── 📁 videos/                       ✅ DONE - Your reels
│   │   ├── reel1.mp4                   ← Vertical video 1 (9:16)
│   │   ├── reel2.mp4                   ← Vertical video 2 (9:16)
│   │   └── reel3.mp4                   ← Vertical video 3 (9:16)
│   │
│   └── 📁 images/                       ✅ DONE (Optional extra images)
│
└── [All your code files...]

```

---

## 📋 File Requirements

### Hero Images (Homepage Slider)
**Location:** `public/hero/`  
**Naming:** `hero1.jpg`, `hero2.jpg`, `hero3.jpg`

| Specification | Requirement |
|---------------|-------------|
| **Format** | JPG or PNG |
| **Dimensions** | Minimum 1920x1080px (Full HD) |
| **Aspect Ratio** | 16:9 (Landscape) |
| **Orientation** | Horizontal |
| **File Size** | Under 500KB (optimized for web) |
| **Content** | Best furniture showcase photos |

**Tips:**
- ✅ Use high-quality, professional photos
- ✅ Bright, well-lit images
- ✅ Show your best/newest furniture
- ✅ Ensure faces aren't the focus
- ❌ Avoid blurry or dark images

---

### Video Reels (Showcase Section)
**Location:** `public/videos/`  
**Naming:** `reel1.mp4`, `reel2.mp4`, `reel3.mp4`

| Specification | Requirement |
|---------------|-------------|
| **Format** | MP4 (H.264 codec) |
| **Aspect Ratio** | 9:16 (Vertical/Portrait) |
| **Dimensions** | Recommended: 1080x1920px |
| **Duration** | 10-30 seconds each |
| **File Size** | Under 10MB each |
| **Audio** | Optional (plays muted with autoplay) |

**Tips:**
- ✅ Show furniture from multiple angles
- ✅ Demonstrate features (e.g., reclining sofa)
- ✅ Use smooth camera movements
- ✅ Good lighting is crucial
- ❌ Avoid shaky footage

---

### Company Logo
**Location:** `public/gerceklogo.png`  
**Status:** ✅ Already in place!

| Specification | Current |
|---------------|---------|
| **Format** | PNG (with transparency) |
| **Background** | Transparent |
| **Usage** | Navbar (auto-resized) |

---

## 🎨 Product Images (Managed via Sanity CMS)

**You DO NOT put product images in `/public/`!**

Product images are uploaded directly through Sanity Studio:

1. Go to `http://localhost:3000/studio`
2. Create/Edit a product
3. Upload images via the "Ürün Görselleri" field
4. Sanity handles hosting & CDN delivery

**Product Image Requirements:**

| Specification | Recommendation |
|---------------|----------------|
| **Format** | JPG or PNG |
| **Dimensions** | Minimum 800x800px (Square) |
| **Aspect Ratio** | 1:1 preferred (Square) |
| **Background** | White or neutral |
| **Quantity** | 3-5 per product |
| **File Size** | Under 2MB each |

**Tips:**
- ✅ First image is the main thumbnail
- ✅ Show product from multiple angles
- ✅ Include close-ups of details
- ✅ Consistent lighting across all images

---

## 🗂️ Current `/public/` Contents

```
public/
├── gerceklogo.png          ✅ Company logo (present)
├── hero/                   ⚠️  Need 3 images
│   ├── hero1.jpg          ← Add this
│   ├── hero2.jpg          ← Add this
│   └── hero3.jpg          ← Add this
├── videos/                 ✅ Videos (present)
│   ├── reel1.mp4
│   ├── reel2.mp4
│   └── reel3.mp4
└── images/                 ✅ Extra images (present)
```

---

## 📝 Quick Checklist

### Before Running `npm run dev`:
- [x] Logo in `public/gerceklogo.png`
- [ ] Hero images in `public/hero/` (3 files)
- [x] Videos in `public/videos/` (3 files)
- [ ] `.env.local` created with Sanity credentials
- [ ] Phone number updated in code

### Before Going Live:
- [ ] All hero images optimized for web
- [ ] Videos compressed (under 10MB each)
- [ ] At least 6 products created in Sanity
- [ ] All products have multiple images
- [ ] WhatsApp number verified
- [ ] Test on mobile devices

---

## 🖼️ Image Optimization Tips

### For Hero Images (JPG):
```bash
# Use online tools:
- TinyPNG.com
- Squoosh.app
- Compressor.io

# Or ImageMagick command line:
magick convert hero1.jpg -quality 85 -resize 1920x1080 hero1.jpg
```

### For Videos (MP4):
```bash
# Use online tools:
- Cloudconvert.com
- Online-convert.com

# Or FFmpeg command line:
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M output.mp4
```

---

## 🚨 Common Mistakes to Avoid

❌ **Wrong file names**
```
❌ Hero1.jpg  (capital H)
✅ hero1.jpg  (lowercase)
```

❌ **Wrong file extensions**
```
❌ hero1.jpeg
✅ hero1.jpg
```

❌ **Wrong location**
```
❌ /public/hero1.jpg  (directly in public)
✅ /public/hero/hero1.jpg  (in hero folder)
```

❌ **Non-standard aspect ratios**
```
❌ hero1.jpg (portrait, 1080x1920)
✅ hero1.jpg (landscape, 1920x1080)
```

---

## 📞 Need Help?

If images/videos aren't showing:
1. Check file names (case-sensitive!)
2. Check file paths (correct folder?)
3. Restart dev server (`npm run dev`)
4. Clear browser cache (Ctrl+Shift+R)
5. Check browser console for errors (F12)

---

**Summary:**
- **Hero images** → `/public/hero/` (3 landscape JPGs)
- **Videos** → `/public/videos/` ✅ Already done
- **Logo** → `/public/gerceklogo.png` ✅ Already done
- **Product images** → Upload via Sanity Studio (not in `/public/`)

---

**Ready to add your assets? Follow this guide and you're all set! 🚀**
