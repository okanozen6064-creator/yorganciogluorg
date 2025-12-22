import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond, Orbitron, Allura } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap'
})

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
})
const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
    display: 'swap',
})
const allura = Allura({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-allura',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Yorgancıoğlu Mobilya',
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
            <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${orbitron.variable} ${allura.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    )
}
