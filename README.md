# Yorgancıoğlu - Luxury Furniture Showcase Website

A high-end furniture showcase website built with Next.js 14, Tailwind CSS, Framer Motion, and Sanity.io CMS.

## 📁 Project Structure

```
yorgancioglu/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with navbar & WhatsApp
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── product/[slug]/          # Dynamic product pages
│       └── page.tsx
├── components/                   # React components
│   ├── Navbar.tsx               # Sticky navigation
│   ├── FloatingWhatsApp.tsx     # Floating WhatsApp button
│   ├── HeroSlider.tsx           # Full-screen hero slider
│   ├── TrustSignals.tsx         # Trust badges section
│   ├── FeaturedProducts.tsx     # Product grid from CMS
│   ├── ReelsSection.tsx         # Video reels section
│   └── DiscountPopup.tsx        # Promotional popup modal
├── sanity/                       # Sanity CMS configuration
│   ├── lib/
│   │   └── client.ts            # Sanity client setup
│   ├── schemas/
│   │   ├── product.ts           # Product schema
│   │   └── collection.ts        # Collection schema
│   ├── schema.ts                # Schema index
│   └── env.ts                   # Environment config
├── public/                       # Static assets
│   ├── gerceklogo.png           # Your logo (already present)
│   ├── hero/                    # Hero slider images
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   └── hero3.jpg
│   └── videos/                  # Reels videos (already present)
│       ├── reel1.mp4
│       ├── reel2.mp4
│       └── reel3.mp4
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity CMS

First, create a Sanity project:

```bash
npm install -g @sanity/cli
sanity init
```

Follow the prompts to create a new project. Then:

1. Copy your **Project ID** and **Dataset** name
2. Create `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-12-17"
```

### 3. Set Up Sanity Studio

Create a `sanity.config.ts` file in the root:

```typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema,
  basePath: '/studio',
})
```

### 4. Add Sanity Studio to Next.js

Create `app/studio/[[...index]]/page.tsx`:

```typescript
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

### 5. Update Phone Number

Search for `905XXXXXXXXX` in the codebase and replace with your actual WhatsApp number:
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`
- `app/layout.tsx`
- `app/product/[slug]/page.tsx`

### 6. Organize Your Assets

#### Hero Images
Create a `hero` folder inside `public/`:
```
public/
└── hero/
    ├── hero1.jpg
    ├── hero2.jpg
    └── hero3.jpg
```

These should be high-quality, landscape-oriented images showcasing your furniture.

#### Video Reels
Your videos are already in `public/videos/`. They should be:
- 9:16 aspect ratio (vertical, Instagram/TikTok style)
- MP4 format
- Named: `reel1.mp4`, `reel2.mp4`, `reel3.mp4`

### 7. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### 8. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS admin panel.

## 📝 Managing Content

### Creating Products

1. Go to `/studio`
2. Click "Ürünler" (Products)
3. Click "Create" and fill in:
   - **Ürün Adı**: Product name
   - **Slug**: Auto-generated URL (click "Generate")
   - **Ürün Görselleri**: Upload multiple images
   - **Kısa Açıklama**: Brief description
   - **Kategori**: Select a collection
   - **Ölçüler**: Width, Height, Depth in cm
   - **Kumaş Türü**: Fabric type
   - **Malzeme**: Material (wood type, metal, etc.)
   - **Öne Çıkan Ürün**: Check to feature on homepage

### Creating Collections

1. Go to `/studio`
2. Click "Koleksiyonlar" (Collections)
3. Create categories like "Koltuk Takımları", "Yatak Odası", "Yemek Odası"

## 🎨 Key Features Implemented

✅ **Sticky Navbar** with logo, links, and CTA  
✅ **Floating WhatsApp Button** with pulse animation (bottom-right, z-index: 50)  
✅ **Hero Slider** with fade-in animations  
✅ **Trust Signals** (Güven Bandı) - 3-column grid  
✅ **Featured Collections** - Dynamic from Sanity CMS  
✅ **Reels Section** - Horizontal scrolling vertical videos  
✅ **Pop-up Modal** - Appears after 5 seconds  
✅ **Dynamic Product Pages** with:
  - Split-screen layout
  - Image gallery with thumbnails
  - Specifications table
  - WhatsApp CTA button

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io
- **Icons**: Lucide React
- **Language**: TypeScript

## 📱 Where to Put Your Files

| File Type | Location | Notes |
|-----------|----------|-------|
| Logo | `public/gerceklogo.png` | ✅ Already present |
| Hero Images | `public/hero/hero1.jpg`, etc. | Add 3 landscape images |
| Video Reels | `public/videos/reel1.mp4`, etc. | ✅ Already present |
| Product Images | Upload via Sanity Studio | Managed in CMS |

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-12-17
   ```
5. Deploy!

## 📞 Contact Integration

All WhatsApp links are configured to:
- Open in new tab
- Pre-fill with Turkish greeting message
- Include product name on product pages

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up `.env.local` with Sanity credentials
3. ✅ Add hero images to `public/hero/`
4. ✅ Update phone number throughout codebase
5. ✅ Run `npm run dev`
6. ✅ Access Sanity Studio at `/studio`
7. ✅ Create collections and products
8. ✅ Deploy to Vercel

---

Built with ❤️ for Yorgancıoğlu
