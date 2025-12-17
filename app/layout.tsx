import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair'
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
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <Navbar />
                <main>{children}</main>
                <FloatingWhatsApp phoneNumber="905XXXXXXXXX" />
            </body>
        </html>
    )
}
