import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        mainImage,
        publishedAt,
        body
    }`
    return await client.fetch(query, { slug })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    if (!post) {
        // Fallback for demo purposes if the slug matches our new article
        if (params.slug === 'sessiz-luks') {
            const demoPost = {
                title: 'Lüksün Yeni Tanımı: "Sessiz Lüks" Ev Dekorasyonuna Nasıl Uyarlanır?',
                publishedAt: new Date().toISOString(),
                // Using a placeholder image or null if none available, logic below handles null mainImage gracefully
                mainImage: null,
                body: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Moda dünyasında podyumları ele geçiren, logoların gürültüsünü susturup kalitenin fısıltısını ön plana çıkaran o asil akım, şimdi yaşam alanlarımızın ruhuna sızıyor: Quiet Luxury (Sessiz Lüks). Yorgancıoğlu Mobilya olarak, Antalya’nın zamansız ışığıyla harmanladığımız estetik anlayışımızı, bu yeni nesil "gösterişsiz ihtişam" felsefesiyle birleştiriyoruz. Peki, bir evi sadece "pahalı" değil, "değerli" kılan bu akımı dekorasyona nasıl uyarlarsınız? İşte sofistike bir yaşam alanının kodları...' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: '1. "Bağıran" Tasarımlardan "Konuşan" Dokulara' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Sessiz lüksün ilk kuralı, ilk bakışta dikkati üzerine çekmek için çabalamayan ama dokunulduğunda hikayesini anlatan parçalar seçmektir. Dev logolar veya aşırı süslemeler yerine; ham mermerin soğuk asaletine, masif meşenin sıcak dokusuna ve ketenin doğal kırışıklığına odaklanın.' }]
                    },
                    {
                        _type: 'block',
                        style: 'blockquote',
                        children: [{ _type: 'span', text: 'Unutmayın; gerçek lüks, bir eşyanın fiyat etiketinde değil, parmak uçlarınızda hissettiğiniz o kusursuz işçilikte saklıdır.' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: '2. Zamansız Bir Renk Paleti: "Grej" ve Ötesi' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Sessiz lüks, gözü yormayan renklerin hakimiyetidir. Bej ve gri arasındaki o büyülü geçiş olan "grej", kum tonları, fildişi ve adaçayı yeşili bu stilin temel taşlarıdır. Renklerin bu sakin dansı, mobilyaların formunu ve malzeme kalitesini daha görünür kılar. Yorgancıoğlu koleksiyonlarında sıkça göreceğiniz toprak tonları, mekanın sadece bir "oda" değil, bir "sığınak" olmasını sağlar.' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: '3. Az ama "Hero" (Kahraman) Parçalar' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Evinizi eşyayla doldurmak yerine, her biri bir sanat eseri niteliğinde olan birkaç ana parça seçin. Bu, kusursuz bir kavisle inen el yapımı bir yemek masası veya İtalyan deri işçiliğiyle bezenmiş bir kanepe olabilir. Sessiz lüks, nicelikten ziyade niteliğin zaferidir. Mekanda boşluk bırakmaktan korkmayın; çünkü o boşluk, seçtiğiniz özel parçanın karakterini vurgulayan bir çerçevedir.' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: '4. Miras ve Zanaatın Gücü' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Sessiz lüks akımı, aslında bir "Old Money" (köklü zenginlik) estetiğidir. Bu estetiğin temelinde ise nesilden nesile aktarılabilecek kadar dayanıklı ve kaliteli üretim yatar. Bir mobilyanın arkasındaki zanaat ne kadar derinse, evinizdeki ağırlığı o kadar hissedilir olur. Seri üretim kusurlarından uzak, her detayı titizlikle düşünülmüş mobilyalar, evinize yaşanmışlık ve asalet katar.' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: '5. Işığın ve Mekanın Mimari Uyumu' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Antalya’nın o meşhur, yumuşak gün ışığını evin içine nasıl davet ettiğiniz çok önemlidir. Sessiz lüks, sadece mobilya değildir; o mobilyanın içinde nefes aldığı atmosferdir. Ağır perdeler yerine uçuşan ipekler, yapay parlaklıklar yerine pirinç detayların mat ışıltısı... Işık, seçtiğiniz kaliteli malzemelerin üzerindeki gölge oyunlarını ortaya çıkarmalıdır.' }]
                    },
                    {
                        _type: 'block',
                        style: 'h3',
                        children: [{ _type: 'span', text: 'Yorgancıoğlu Dokunuşuyla Sessiz Lüks' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Lüksü yeniden tanımlarken, bizler sadece mobilya üretmiyoruz; yaşam stilinize bir "karakter" kazandırıyoruz. Yorgancıoğlu Mobilya olarak, Antalya’daki showroomumuzda sunduğumuz tasarımlarla, sizi kelimelerin ötesinde bir şıklığa davet ediyoruz.' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Evine girdiğinizde sizi karşılayan şey markalar değil, bir huzur ve kalite hissiyse; işte o zaman Sessiz Lüksü başarmışsınız demektir.' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Evinizde bu asil dönüşümü başlatmak için tasarım ekibimizle iletişime geçebilir, zamansız koleksiyonlarımızı keşfedebilirsiniz.' }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'Sizce evinizde sessiz lüksün en güçlü temsilcisi hangi parça olmalı? Keten bir kanepe mi, yoksa ham bir mermer sehpa mı?' }]
                    }
                ]
            }

            return (
                <article className="min-h-screen pt-24 pb-24 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 text-sm font-medium tracking-wide uppercase"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Ana Sayfaya Dön
                        </Link>

                        <header className="mb-12 text-center">
                            <div className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">
                                {new Date(demoPost.publishedAt).toLocaleDateString('tr-TR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-8">
                                {demoPost.title}
                            </h1>
                        </header>

                        {/* No image for demo post to keep it simple, or add a placeholder if needed */}

                        <div className="prose prose-stone prose-lg mx-auto font-sans focus:outline-none">
                            <PortableText value={demoPost.body} />
                        </div>
                    </div>
                </article>
            )
        }

        // Fallback for demo purposes if the slug matches one of our dummy items
        if (params.slug === '#') {
            return (
                <div className="min-h-screen pt-32 pb-24 bg-white flex flex-col items-center justify-center text-center px-4">
                    <h1 className="font-serif text-4xl mb-4">Demo İçerik</h1>
                    <p className="text-stone-500 mb-8">Bu bir örnek blog yazısıdır. Sanity paneline giderek kendi yazılarınızı ekleyebilirsiniz.</p>
                    <Link href="/" className="text-stone-900 underline">Ana Sayfaya Dön</Link>
                </div>
            )
        }
        return notFound()
    }

    return (
        <article className="min-h-screen pt-24 pb-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 text-sm font-medium tracking-wide uppercase"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Ana Sayfaya Dön
                </Link>

                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-8">
                        {post.title}
                    </h1>
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="relative aspect-[16/9] w-full mb-12 rounded-sm overflow-hidden bg-stone-100">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-stone prose-lg mx-auto font-sans focus:outline-none">
                    <PortableText value={post.body} />
                </div>
            </div>
        </article>
    )
}
