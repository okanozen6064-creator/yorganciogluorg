
const { createClient } = require('@sanity/client')
const path = require('path')
const fs = require('fs')

function loadEnv() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const env = {};
        envContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
            }
        });
        return env;
    } catch (e) {
        return {};
    }
}

const env = loadEnv();

// API Token kontrol
const token = env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN;

if (!token) {
    console.error("\n❌ HATA: Sanity API Token (SANITY_API_TOKEN) bulunamadı.");
    console.error("Lütfen .env.local dosyasına 'SANITY_API_TOKEN' ekleyin.\n");
    process.exit(1);
}

const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    token: token,
    useCdn: false,
    apiVersion: '2023-05-03',
})

const heroSlides = [
    {
        title: 'Zarafet ve Konfor',
        subtitle: 'Evinize değer katan mobilyalar',
        imagePath: '/images/slide1.jpg',
        order: 1
    },
    {
        title: 'Özel Tasarım Koleksiyonlar',
        subtitle: 'Size özel mobilya çözümleri',
        imagePath: '/images/slider2.jpg',
        order: 2
    },
    {
        title: 'Kaliteli Yaşam Alanları',
        subtitle: 'Hayalinizdeki evde yaşayın',
        imagePath: '/images/slide3.jpg',
        order: 3
    },
    {
        title: 'Lüks ve Şıklık',
        subtitle: 'Her detayda mükemmellik',
        imagePath: '/images/slide4.jpg',
        order: 4
    }
];

const blogPosts = [
    {
        _id: 'demo-1',
        title: 'Lüksün Yeni Tanımı: "Sessiz Lüks" Ev Dekorasyonuna Nasıl Uyarlanır?',
        slug: { current: 'sessiz-luks' },
        mainImage: '/blog/quiet-luxury.png',
        publishedAt: '2025-01-15T00:00:00.000Z',
        category: 'Trendler',
        excerpt: 'Moda dünyasında podyumları ele geçiren, logoların gürültüsünü susturup kalitenin fısıltısını ön plana çıkaran o asil akım, şimdi yaşam alanlarımızın ruhuna sızıyor: Quiet Luxury.',
        body: [
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Moda dünyasında podyumları ele geçiren, logoların gürültüsünü susturup kalitenin fısıltısını ön plana çıkaran o asil akım, şimdi yaşam alanlarımızın ruhuna sızıyor: Quiet Luxury (Sessiz Lüks). Yorgancıoğlu Mobilya olarak, Antalya\'nın zamansız ışığıyla harmanladığımız estetik anlayışımızı, bu yeni nesil "gösterişsiz ihtişam" felsefesiyle birleştiriyoruz. Peki, bir evi sadece "pahalı" değil, "değerli" kılan bu akımı dekorasyona nasıl uyarlarsınız? İşte sofistike bir yaşam alanının kodları...' }] },
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: '1. "Bağıran" Tasarımlardan "Konuşan" Dokulara' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sessiz lüksün ilk kuralı, ilk bakışta dikkati üzerine çekmek için çabalamayan ama dokunulduğunda hikayesini anlatan parçalar seçmektir. Dev logolar veya aşırı süslemeler yerine; ham mermerin soğuk asaletine, masif meşenin sıcak dokusuna ve ketenin doğal kırışıklığına odaklanın.' }] },
            { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'Unutmayın; gerçek lüks, bir eşyanın fiyat etiketinde değil, parmak uçlarınızda hissettiğiniz o kusursuz işçilikte saklıdır.' }] },
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: '5. Işığın ve Mekanın Mimari Uyumu' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Antalya\'nın o meşhur, yumuşak gün ışığını evin içine nasıl davet ettiğiniz çok önemlidir.' }] }
        ]
    },
    {
        _id: 'demo-4',
        title: 'Koltuk Kumaşı Seçerken Bilmeniz Gereken 5 Altın Kural',
        slug: { current: 'koltuk-kumasi-secimi' },
        mainImage: '/blog/fabric-texture.png',
        publishedAt: '2025-01-12T00:00:00.000Z',
        category: 'Rehber',
        excerpt: 'Bir koltuk seçmek sadece formla ilgili değildir; o formun üzerine giydirdiğiniz "elbise", yani kumaş, mobilyanın ruhunu belirler.',
        body: [
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Bir koltuk seçmek sadece formla ilgili değildir; o formun üzerine giydirdiğiniz "elbise", yani kumaş, mobilyanın ruhunu belirler. Tıpkı bir Haute Couture tasarımda doğru kumaşın kesimi göstermesi gibi, doğru döşeme de evinizin lüks algısını zirveye taşır.' }] },
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: '1. Martindale Testi: Dayanıklılığın Matematiksel Şıklığı' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Lüks, sadece görünüş değil, aynı zamanda kalıcılıktır. Bir kumaşın ne kadar dayanıklı olduğunu anlamak için "Martindale" değerine bakın.' }] }
        ]
    },
    {
        _id: 'demo-5',
        title: 'Evinizin İmza Parçası: Köşe Takımları ile Konfor Alanları Yaratmak',
        slug: { current: 'kose-takimlari-konfor' },
        mainImage: '/blog/corner-sofa.png',
        publishedAt: '2025-01-10T00:00:00.000Z',
        category: 'Dekorasyon',
        excerpt: 'Eskiden salonlar birer "misafir odası" olarak tasarlanırdı; şimdilerde ise salonlar bizim "yaşam sahnemiz." Bu sahnenin en karizmatik ve dominant oyuncusu ise hiç şüphesiz köşe takımları.',
        body: [
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Eskiden salonlar birer "misafir odası" olarak tasarlanırdı; şimdilerde ise salonlar bizim "yaşam sahnemiz."' }] }
        ]
    },
    {
        _id: 'demo-6',
        title: 'Yatak Odasında Feng Shui: Huzurlu Bir Uyku İçin Enerji Dengesi',
        slug: { current: 'yatak-odasi-feng-shui' },
        mainImage: '/blog/feng-shui-bedroom.png',
        publishedAt: '2025-01-08T00:00:00.000Z',
        category: 'Wellbeing',
        excerpt: 'Yatak odası sadece uyuduğumuz bir alan değil; ruhumuzun dinlendiği, günün yorgunluğunu dışarıda bıraktığımız gizli bir sığınaktır. Feng Shui ile bu özel alandaki enerjiyi dengeleyin.',
        body: [
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Yatak odası sadece uyuduğumuz bir alan değil; ruhumuzun dinlendiği, günün yorgunluğunu dışarıda bıraktığımız gizli bir sığınaktır.' }] }
        ]
    },
    {
        _id: 'demo-10',
        title: 'Aydınlatma Sanatı: Mobilyalarınızı Doğru Işıkla Nasıl Ön Plana Çıkarırsınız?',
        slug: { current: 'aydinlatma-sanati' },
        mainImage: '/blog/lighting-design.png',
        publishedAt: '2024-12-28T00:00:00.000Z',
        category: 'Dekorasyon',
        excerpt: 'Işık, dekorasyonun gizli yönetmenidir. En muazzam mobilya bile, yanlış bir ışık altında ruhunu kaybedebilir.',
        body: [
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Işık, dekorasyonun gizli yönetmenidir. En muazzam mobilya bile, yanlış bir ışık altında ruhunu kaybedebilir. Aydınlatma sanatı, mobilyalarınızı sadece görünür kılmak değil, onlara dramatik bir derinlik ve karakter kazandırmaktır.' }] }
        ]
    }
];

async function uploadImage(imagePath) {
    const fullPath = path.join(process.cwd(), 'public', imagePath.startsWith('/') ? imagePath.slice(1) : imagePath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`Uyarı: Resim bulunamadı: ${fullPath} - Resimsiz devam ediliyor.`);
        return null;
    }
    try {
        const stream = fs.createReadStream(fullPath);
        const asset = await client.assets.upload('image', stream, {
            filename: path.basename(imagePath)
        });
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        };
    } catch (err) {
        console.error(`Resim yükleme hatası (${imagePath}):`, err.message);
        return null;
    }
}

async function seedHeroSlides() {
    console.log("--- Hero Slider Verileri Yükleniyor ---");
    for (const slide of heroSlides) {
        const imageAsset = await uploadImage(slide.imagePath);

        const doc = {
            _type: 'heroSlide',
            title: slide.title,
            subtitle: slide.subtitle,
            order: slide.order,
            image: imageAsset
        };

        if (!imageAsset) delete doc.image;

        try {
            await client.create(doc);
            console.log(`✅ Slide oluşturuldu: ${slide.title}`);
        } catch (err) {
            console.error(`❌ Slide oluşturulamadı: ${slide.title}`, err.message);
        }
    }
}

async function seedBlogPosts() {
    console.log("--- Blog Verileri Yükleniyor ---");
    for (const post of blogPosts) {
        let imageAsset = null;
        if (post.mainImage) {
            imageAsset = await uploadImage(post.mainImage);
        }

        const doc = {
            _id: post._id,
            _type: 'post',
            title: post.title,
            slug: { _type: 'slug', current: post.slug.current },
            publishedAt: post.publishedAt,
            excerpt: post.excerpt,
            mainImage: imageAsset,
            body: post.body,
            // Schema'da category olmadığı için eklemiyorum veya varsa ekleriz.
        };

        if (!imageAsset) delete doc.mainImage;

        try {
            await client.createOrReplace(doc);
            console.log(`✅ Post oluşturuldu/güncellendi: ${post.title}`);
        } catch (err) {
            console.error(`❌ Post oluşturulamadı: ${post.title}`, err.message);
        }
    }
}

async function seed() {
    await seedHeroSlides();
    await seedBlogPosts();
    console.log("--- İşlem Tamamlandı ---");
}

seed();
