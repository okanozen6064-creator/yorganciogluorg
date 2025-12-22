import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LandingIntro from '@/components/LandingIntro'
import AiAssistant from '@/components/AiAssistant'
import ScrollToTop from '@/components/ScrollToTop'

import DiscountPopup from '@/components/DiscountPopup'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <LandingIntro />
            <DiscountPopup />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AiAssistant />
            <FloatingWhatsApp phoneNumber="905449404910" />
            <ScrollToTop />
        </>
    )
}
