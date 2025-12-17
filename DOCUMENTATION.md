# 📋 Comprehensive Project Overview - Yorgancıoğlu

## 🎯 Project Summary

**Yorgancıoğlu** is a luxury furniture showcase website built with modern web technologies. It serves as a digital catalog with a powerful CMS backend for easy product management.

---

## 📦 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2.18 | React framework with App Router |
| **React** | 18.3.1 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.1 | Utility-first styling |
| **Framer Motion** | 11.11.17 | Animations & transitions |
| **Sanity.io** | 3.62.2 | Headless CMS |
| **Lucide React** | 0.462.0 | Icon library |

---

## 🏗️ Project Architecture

### Directory Structure
```
yorgancioglu/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar, WhatsApp)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + Tailwind
│   ├── product/[slug]/           # Dynamic product routes
│   │   └── page.tsx              # Product detail page
│   └── studio/[[...index]]/      # Sanity Studio route
│       └── page.tsx
│
├── components/                    # React Components
│   ├── Navbar.tsx                # Sticky navigation bar
│   ├── FloatingWhatsApp.tsx      # Fixed WhatsApp button
│   ├── HeroSlider.tsx            # Full-screen hero carousel
│   ├── TrustSignals.tsx          # Trust badges (3-column)
│   ├── FeaturedProducts.tsx      # Product grid from CMS
│   ├── ReelsSection.tsx          # Video showcase
│   └── DiscountPopup.tsx         # Promotional modal
│
├── sanity/                        # Sanity CMS Configuration
│   ├── lib/
│   │   └── client.ts             # Sanity client + image builder
│   ├── schemas/
│   │   ├── product.ts            # Product schema (main)
│   │   └── collection.ts         # Collection/category schema
│   ├── schema.ts                 # Schema index
│   └── env.ts                    # Env config
│
├── public/                        # Static Assets
│   ├── gerceklogo.png            # Company logo
│   ├── hero/                     # Hero slider images
│   │   ├── hero1.jpg             # Slide 1
│   │   ├── hero2.jpg             # Slide 2
│   │   └── hero3.jpg             # Slide 3
│   ├── videos/                   # Video reels (9:16)
│   │   ├── reel1.mp4
│   │   ├── reel2.mp4
│   │   └── reel3.mp4
│   └── images/                   # Other images
│
├── Configuration Files
├── package.json                   # Dependencies
├── next.config.js                # Next.js config (image domains)
├── tailwind.config.ts            # Tailwind theme & colors
├── tsconfig.json                 # TypeScript config
├── sanity.config.ts              # Sanity Studio config
├── postcss.config.js             # PostCSS for Tailwind
├── .env.example                  # Environment template
└── .gitignore                    # Git ignore rules
```

---

## 🎨 Key Components Explained

### 1. **Navbar.tsx**
- **Location**: Sticky top
- **Features**:
  - Logo (clickable, links to home)
  - Navigation links (Koleksiyonlar, Hakkımızda, İletişim)
  - CTA button ("Randevu Al" → WhatsApp)
  - Mobile responsive with hamburger menu
- **Animations**: Framer Motion slide-down on mobile

### 2. **FloatingWhatsApp.tsx**
- **Location**: Fixed bottom-right (z-index: 50)
- **Features**:
  - Green (#25D366) circular button
  - WhatsApp icon (MessageCircle from Lucide)
  - Continuous pulse animation
  - Tooltip on hover
  - Opens WhatsApp in new tab with pre-filled message
- **Props**:
  - `phoneNumber`: WhatsApp number (905XXXXXXXXX)
  - `message`: Default greeting message

### 3. **HeroSlider.tsx**
- **Type**: Full-screen carousel
- **Features**:
  - Auto-advances every 5 seconds
  - Manual navigation (arrows + dots)
  - Fade transitions
  - Text overlay with title & subtitle
  - CTA button ("Koleksiyonları Keşfet")
- **Images Source**: `/public/hero/hero1.jpg`, etc.

### 4. **TrustSignals.tsx**
- **Layout**: 3-column grid
- **Badges**:
  1. 🛡️ **2 Yıl Garanti**
  2. 🚚 **Ücretsiz Kurulum & Nakliye**
  3. 📐 **Özel Tasarım Desteği**
- **Animations**: Stagger fade-in on scroll

### 5. **FeaturedProducts.tsx**
- **Data Source**: Sanity CMS (fetches where `featured == true`)
- **Layout**: Responsive grid (1/2/3 columns)
- **Features**:
  - Product images from Sanity CDN
  - Hover effects (image zoom, overlay)
  - Links to `/product/[slug]`
  - Lazy loading images

### 6. **ReelsSection.tsx**
- **Layout**: Horizontal scroll container
- **Features**:
  - Displays 3 vertical videos (9:16 aspect ratio)
  - Autoplay, muted, loop
  - Snap scrolling
  - Videos from `/public/videos/`

### 7. **DiscountPopup.tsx**
- **Trigger**: Appears 5 seconds after page load
- **Behavior**: Shows once per session (sessionStorage)
- **Design**:
  - Backdrop blur
  - Animated modal
  - "%10 İNDİRİM" badge
  - CTA button → WhatsApp
- **Close**: X button or click outside

### 8. **Dynamic Product Page** (`app/product/[slug]/page.tsx`)
- **Layout**: Split screen
  - **Left**: Image gallery (main image + thumbnails)
  - **Right**: Product details
- **Sections**:
  - Product title & description
  - Specifications table:
    - Ölçüler (Width × Height × Depth)
    - Kumaş Türü (Fabric Type)
    - Malzeme (Material)
  - Trust badges (mini version)
  - WhatsApp CTA button (product-specific message)
- **SEO**: Dynamic metadata generation

---

## 🗄️ Sanity CMS Schemas

### Product Schema (`product.ts`)

```typescript
{
  name: 'product',
  title: 'Ürünler',
  fields: [
    title: string (required)
    slug: slug (auto-generated, required)
    images: array of images (min 1, required)
    description: text (optional)
    category: reference to collection (optional)
    dimensions: object {
      width: number (cm)
      height: number (cm)
      depth: number (cm)
    }
    fabricType: select [kadife, keten, deri, süet, pamuklu, diğer]
    material: select [ceviz, meşe, kayın, metal, mermer, mdf, diğer]
    featured: boolean (shows on homepage if true)
  ]
}
```

### Collection Schema (`collection.ts`)

```typescript
{
  name: 'collection',
  title: 'Koleksiyonlar',
  fields: [
    name: string (required)
    slug: slug (required)
    description: text
    image: image
  ]
}
```

---

## 🎨 Design System

### Color Palette
```css
Brand Colors:
--brand-gold: #D4AF37        /* Primary gold */
--brand-darkGold: #B8941E    /* Hover states */
--brand-cream: #F5F5DC       /* Backgrounds */
--brand-brown: #5C4033       /* Text accents */
--brand-darkBrown: #3E2723   /* Dark text */

WhatsApp Green: #25D366
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Imported via**: Google Fonts

### Spacing & Layout
- Container max-width: `7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`
- Sections: `py-16` vertical spacing

---

## 🔧 Configuration Files

### `.env.local` (You need to create this)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-12-17"
```

### `next.config.js`
- Allows images from `cdn.sanity.io`

### `tailwind.config.ts`
- Custom colors (brand palette)
- Font families
- Extends default Tailwind theme

---

## 📱 Responsive Design

All components are mobile-first:
- **Mobile** (`< 768px`): Single column, hamburger menu
- **Tablet** (`768px - 1024px`): 2-column grids
- **Desktop** (`> 1024px`): 3-column grids, full navigation

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```
→ Opens at http://localhost:3000

### Sanity Studio
→ Access at http://localhost:3000/studio

### Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment Checklist

### Pre-Deployment
- [ ] Replace `905XXXXXXXXX` with actual WhatsApp number
- [ ] Add `.env.local` to `.gitignore` (already done)
- [ ] Create production environment variables on Vercel
- [ ] Test all pages locally
- [ ] Create at least 3 products in Sanity (marked as featured)

### Vercel Deployment
1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy!

---

## 📞 WhatsApp Integration

**Where it's used:**
1. Navbar CTA ("Randevu Al")
2. Floating button (bottom-right)
3. Product page CTA
4. Discount popup CTA

**Message Templates:**
- Generic: "Merhaba, ürünleriniz hakkında bilgi almak istiyorum."
- Product-specific: "Merhaba, [Product Name] ürünü hakkında bilgi almak istiyorum."

**Format**: International (e.g., `905551234567`)

---

## 🎯 User Journey

1. **Landing** → Hero slider grabs attention
2. **Scroll** → Trust signals build credibility
3. **Browse** → Featured products showcase
4. **Watch** → Reels provide visual proof
5. **Popup** → Discount offer creates urgency
6. **Click Product** → Detailed product page
7. **WhatsApp CTA** → Direct contact for purchase

---

## 🔐 Security & Best Practices

- ✅ No API keys in client-side code
- ✅ Environment variables properly configured
- ✅ Images optimized with Next.js Image component
- ✅ SEO metadata on all pages
- ✅ Responsive design
- ✅ Accessibility (semantic HTML)
- ✅ TypeScript for type safety

---

## 📊 Performance Optimizations

- **Images**: Next.js Image component (lazy loading, optimization)
- **Fonts**: Google Fonts with `font-display: swap`
- **Code Splitting**: Automatic with Next.js
- **CDN**: Sanity images served from global CDN
- **SSR**: Server-side rendering for SEO

---

## 🆘 Common Issues & Solutions

### Issue: "Module not found"
**Solution**: Run `npm install`

### Issue: "Sanity client error"
**Solution**: Check `.env.local` has correct Project ID

### Issue: "Images not loading"
**Solution**: Verify image paths in `/public/`

### Issue: "WhatsApp not opening"
**Solution**: Update phone number format (no spaces, no +)

---

## 📈 Future Enhancements (Optional)

- 🔍 Search functionality
- 🛒 Shopping cart (if selling online)
- 🌍 Multi-language support (Turkish/English)
- 📧 Email newsletter integration
- 📊 Google Analytics
- 💬 Live chat widget
- 🎨 Color/fabric customizer for products
- 📱 Progressive Web App (PWA)

---

## 📝 Content Management Workflow

### Adding a New Product:
1. Go to `/studio`
2. Click "Ürünler" → "Create"
3. Upload images (3-5 recommended)
4. Fill in details
5. Check "Öne Çıkan Ürün" to feature on homepage
6. Publish → Auto-appears on website

### Editing Products:
1. Find product in Studio
2. Make changes
3. Click "Publish"
4. Changes reflect immediately (with revalidation)

---

## 🎓 Learning Resources

- **Next.js 14 Docs**: https://nextjs.org/docs
- **Sanity.io Docs**: https://www.sanity.io/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

**Built with ❤️ for Yorgancıoğlu Furniture**

*Last Updated: December 17, 2024*
