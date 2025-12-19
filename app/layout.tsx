import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CustomCursor from '@/components/CustomCursor'
import LandingIntro from '@/components/LandingIntro'
import AiAssistant from '@/components/AiAssistant'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair'
})
const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Yorgancıoğlu | Lüks Mobilya ve Ev Dekorasyonu',
    description: 'Yorgancıoğlu, özel tasarım mobilyalar ve lüks ev dekorasyonu çözümleri sunmaktadır. 2 yıl garanti, ücretsiz kurulum ve nakliye.',
    keywords: 'mobilya, lüks mobilya, ev dekorasyonu, özel tasarım, koltuk takımı, yatak odası, yemek odası',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased`}>
                <LandingIntro />
                <CustomCursor />
                <Navbar />
                <main>{children}</main>
                <Footer />
                <AiAssistant />
                <FloatingWhatsApp phoneNumber="905449404910" />
            </body>
        </html>
    )
}
