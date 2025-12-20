
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafaf9] px-4 text-center">
            <h1 className="font-serif text-9xl text-[#D4AF37] font-bold mb-4">404</h1>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 font-medium">
                Sayfa Bulunamadı
            </h2>
            <p className="font-sans text-stone-600 max-w-md mb-10 text-lg leading-relaxed">
                Aradığınız sayfa taşınmış veya silinmiş olabilir.
                Lütfen ana sayfaya dönerek koleksiyonlarımızı keşfetmeye devam edin.
            </p>
            <Link
                href="/"
                className="inline-block bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors duration-300"
            >
                Ana Sayfaya Dön
            </Link>
        </div>
    )
}
