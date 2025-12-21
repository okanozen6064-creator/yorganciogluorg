import { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata: Metadata = {
    title: 'Hakkımızda | Yorgancıoğlu Mobilya',
    description: '1985 yılından beri lüks mobilya üretiminde öncü. Kalite, tasarım ve müşteri memnuniyeti odaklı çalışmalarımız ile evlerinizi sanat eserine dönüştürüyoruz.',
}

export default function AboutPage() {
    return <AboutPageContent />
}
