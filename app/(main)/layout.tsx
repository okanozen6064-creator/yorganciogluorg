import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CustomCursor from '@/components/CustomCursor'
import LandingIntro from '@/components/LandingIntro'
import AiAssistant from '@/components/AiAssistant'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <LandingIntro />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AiAssistant />
            <FloatingWhatsApp phoneNumber="905449404910" />
        </>
    )
}
