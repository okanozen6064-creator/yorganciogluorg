"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const categories = ["Tasarım Trendleri", "Usta Hikayeleri", "Malzeme Çalışmaları", "İç Mekan İlhamı"]

const featuredArticle = {
  title: "Minimal Yaşamın Sanatı",
  category: "Tasarım Trendleri",
  date: "15 Mart 2024",
  image: "/minimalist-luxury-interior-with-natural-light.jpg",
  excerpt: "Ustalık ve sadeliğin kesişiminin nefes alan mekanları nasıl yarattığını keşfedin.",
}

const articles = [
  {
    id: 1,
    title: "Heykeli Andıran Oturma Elemanları",
    category: "Usta Hikayeleri",
    date: "12 Mart 2024",
    image: "/sculptural-modern-chair-against-white-wall.jpg",
    excerpt: "Her eğri, titiz işçiliğin ve zamansız tasarım felsefesinin hikayesini anlatır.",
    layout: "tall",
  },
  {
    id: 2,
    title: "Çağdaş Mekanlarda Doğal Malzeme Kullanımı",
    category: "Malzeme Çalışmaları",
    date: "10 Mart 2024",
    image: "/natural-wood-texture-and-stone-materials.jpg",
    excerpt: "Ham malzemelerin rafine teknikle buluşması.",
    layout: "wide",
  },
  {
    id: 3,
    title: "Işık ve Gölge: Tasarımcının Tuvali",
    category: "İç Mekan İlhamı",
    date: "8 Mart 2024",
    image: "/dramatic-lighting-in-luxury-interior.jpg",
    excerpt: "Doğal aydınlatmanın mimari formu nasıl yaşayan sanata dönüştürdüğü.",
    layout: "tall",
  },
  {
    id: 4,
    title: "El Yapımı Mobilyanın Rönesansı",
    category: "Usta Hikayeleri",
    date: "5 Mart 2024",
    image: "/artisan-crafting-wooden-furniture.jpg",
    excerpt: "Seri üretim çağında geleneksel tekniklere geri dönüş.",
    layout: "standard",
  },
  {
    id: 5,
    title: "Monokromatik Zarafet",
    category: "Tasarım Trendleri",
    date: "3 Mart 2024",
    image: "/monochrome-luxury-living-room.jpg",
    excerpt: "Renk paleti seçiminde sadeliğin gücü.",
    layout: "standard",
  },
  {
    id: 6,
    title: "Yeniden Yorumlanan Tekstil Gelenekleri",
    category: "Malzeme Çalışmaları",
    date: "1 Mart 2024",
    image: "/luxury-textile-fabric-detail.jpg",
    excerpt: "Antik dokuma teknikleri çağdaş estetiğe buluşuyor.",
    layout: "tall",
  },
]

export default function BlogIndex() {
  const [email, setEmail] = useState("")
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 100)
    })
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Sticky Social Bar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : -20 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
      >
        <div className="flex flex-col gap-6 text-xs tracking-[0.2em] uppercase text-[#999999]">
          <button className="hover:text-[#2A2A2A] transition-colors rotate-180 [writing-mode:vertical-lr]">
            Instagram
          </button>
          <button className="hover:text-[#2A2A2A] transition-colors rotate-180 [writing-mode:vertical-lr]">
            Pinterest
          </button>
          <button className="hover:text-[#2A2A2A] transition-colors rotate-180 [writing-mode:vertical-lr]">
            Twitter
          </button>
        </div>
      </motion.div>

      <section className="max-w-[1600px] mx-auto px-6 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[85vh] group cursor-pointer overflow-hidden"
        >
          <motion.img
            src={featuredArticle.image}
            alt={featuredArticle.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 text-white">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
                {featuredArticle.category} · {featuredArticle.date}
              </p>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] text-balance">
                {featuredArticle.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#2A2A2A] transition-all duration-300 px-8 py-6 text-sm tracking-[0.2em] uppercase"
              >
                Hikayeyi Oku
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Asymmetrical Masonry Grid */}
      <section className="max-w-[1600px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                article.layout === "tall" ? "md:row-span-2" : article.layout === "wide" ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden mb-6 border border-[#E5E5E5]">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-[#999999]">
                  {article.category} · {article.date}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-[#2A2A2A] leading-tight group-hover:opacity-70 transition-opacity duration-300 text-balance">
                  <span className="relative inline-block">
                    {article.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2A2A2A] group-hover:w-full transition-all duration-500" />
                  </span>
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  <span className="float-left font-serif text-7xl leading-[0.8] mr-3 mt-2 text-[#2A2A2A]">
                    {article.excerpt.charAt(0)}
                  </span>
                  {article.excerpt.slice(1)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center border-t border-b border-[#E5E5E5] py-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#2A2A2A] text-balance">Topluluğa Katılın</h2>
          <p className="text-lg text-[#666666] mb-12 tracking-wide leading-relaxed">
            Tasarım, ustalık ve iyi yaşam sanatı üzerine özenle seçilmiş hikayeler.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#E5E5E5] border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-[#2A2A2A] transition-colors bg-transparent text-[#2A2A2A] placeholder:text-[#999999]"
            />
            <Button className="bg-[#2A2A2A] text-white hover:bg-[#444444] transition-colors px-8 whitespace-nowrap text-sm tracking-[0.2em] uppercase">
              Abone Ol
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
