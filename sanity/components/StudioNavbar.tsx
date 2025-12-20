
import { Stack, Card, Flex, Text, Button, Box, Dialog } from '@sanity/ui'
import { HelpCircleIcon, ChevronRightIcon, ChevronLeftIcon, BasketIcon, TagIcon, ImageIcon, EditIcon, CheckmarkCircleIcon } from '@sanity/icons'
import { useState } from 'react'

const GUIDES = [
    {
        title: "Hoşgeldiniz",
        icon: HelpCircleIcon,
        content: (
            <Stack space={4}>
                <Text size={2} weight="bold">Yorgancıoğlu Yönetim Paneline Hoşgeldiniz!</Text>
                <Text size={1}>
                    Bu panel üzerinden web sitenizin tüm içeriklerini kolayca yönetebilirsiniz.
                    Size rehberlik etmek için kısa bir tur hazırladık. Başlamak için "İleri" butonuna tıklayın.
                </Text>
            </Stack>
        )
    },
    {
        title: "Ürün Yönetimi",
        icon: BasketIcon,
        content: (
            <Stack space={4}>
                <Text size={2} weight="bold">Yeni Ürün Ekleme & Düzenleme</Text>
                <Text size={1}>
                    1. Sol menüden <strong>"Tüm Ürünler"</strong> veya <strong>"Ürünler (Kategoriye Göre)"</strong> seçeneğine tıklayın.
                </Text>
                <Text size={1}>
                    2. Yeni ürün eklemek için sağ üstteki <strong>Kalem (Yeni)</strong> ikonuna basın.
                </Text>
                <Text size={1}>
                    3. Ürün adı, fiyatı, ölçüleri ve görsellerini girin.
                </Text>
                <Card padding={3} tone="primary" radius={2}>
                    <Text size={1}>
                        <strong>İpucu:</strong> Birden fazla ürün görseli yükleyebilirsiniz. İlk görsel kapak fotoğrafı olacaktır.
                    </Text>
                </Card>
            </Stack>
        )
    },
    {
        title: "Kategoriler",
        icon: TagIcon,
        content: (
            <Stack space={4}>
                <Text size={2} weight="bold">Kategori Yönetimi</Text>
                <Text size={1}>
                    Ürünlerinizi düzenli tutmak için kategoriler oluşturun.
                </Text>
                <Text size={1}>
                    <strong>"Kategoriler"</strong> menüsünden yeni kategori ekleyebilirsiniz (Örn: "Koltuk Takımları", "Yatak Odası").
                </Text>
                <Text size={1}>
                    Ürün eklerken bu kategorileri seçerek ürünün doğru sayfada görünmesini sağlarsınız.
                </Text>
            </Stack>
        )
    },
    {
        title: "Slider & Görseller",
        icon: ImageIcon,
        content: (
            <Stack space={4}>
                <Text size={2} weight="bold">Ana Sayfa Slider Yönetimi</Text>
                <Text size={1}>
                    Ana sayfanızdaki büyük geçişli görselleri <strong>"Hero Slider"</strong> menüsünden yönetirsiniz.
                </Text>
                <Text size={1}>
                    Her görsel için başlık ve alt başlık girebilirsiniz.
                </Text>
                <Text size={1}>
                    <strong>Sıra (Order):</strong> Görsellerin hangi sırada çıkacağını belirlemek için 1, 2, 3 gibi numaralar verin.
                </Text>
            </Stack>
        )
    },
    {
        title: "Blog Yazıları",
        icon: EditIcon,
        content: (
            <Stack space={4}>
                <Text size={2} weight="bold">Blog & İçerik</Text>
                <Text size={1}>
                    Müşterilerinizi bilgilendirmek için <strong>"Blog Yazıları"</strong> menüsünü kullanın.
                </Text>
                <Text size={1}>
                    Yazılarınıza kapak görseli ekleyebilir, zengin metin editörü ile içeriğinizi biçimlendirebilirsiniz.
                </Text>
                <Card padding={3} tone="positive" radius={2}>
                    <Flex align="center">
                        <CheckmarkCircleIcon style={{ fontSize: 24, marginRight: 10 }} />
                        <Text size={1}>Yayınla (Publish) butonuna basmayı unutmayın!</Text>
                    </Flex>
                </Card>
            </Stack>
        )
    }
]

export function StudioNavbar(props: any) {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)

    const CurrentIcon = GUIDES[step].icon

    return (
        <Stack>
            {/* Default Navbar */}
            {props.renderDefault(props)}

            {/* Custom Help Bar */}
            <Card padding={3} tone="primary" borderBottom>
                <Flex justify="space-between" align="center">
                    <Box marginLeft={2}>
                        <Text size={1} weight="medium">
                            Yorgancıoğlu Yönetim Paneli
                        </Text>
                    </Box>
                    <Button
                        icon={HelpCircleIcon}
                        text="Kullanım Kılavuzu"
                        tone="default"
                        mode="ghost"
                        onClick={() => { setOpen(true); setStep(0); }}
                    />
                </Flex>
            </Card>

            {open && (
                <Dialog
                    header="Panel Kullanım Kılavuzu"
                    id="help-dialog"
                    onClose={() => setOpen(false)}
                    zOffset={1000}
                    width={1}
                >
                    <Card padding={4}>
                        <Stack space={5}>
                            {/* Step Indicator */}
                            <Flex justify="center" align="center" gap={2}>
                                {GUIDES.map((_, i) => (
                                    <Box
                                        key={i}
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: i === step ? '#1a1a1a' : '#e0e0e0',
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                ))}
                            </Flex>

                            {/* Content */}
                            <Box paddingY={2}>
                                <Flex align="center" gap={3} style={{ marginBottom: '1rem' }}>
                                    <CurrentIcon style={{ fontSize: 32 }} />
                                    <Text size={3} weight="bold">{GUIDES[step].title}</Text>
                                </Flex>
                                {GUIDES[step].content}
                            </Box>

                            {/* Navigation Buttons */}
                            <Flex justify="space-between" marginTop={4}>
                                <Button
                                    mode="ghost"
                                    text="Geri"
                                    icon={ChevronLeftIcon}
                                    disabled={step === 0}
                                    onClick={() => setStep(s => Math.max(0, s - 1))}
                                />
                                <Box>
                                    {step < GUIDES.length - 1 ? (
                                        <Button
                                            tone="primary"
                                            text="İleri"
                                            iconRight={ChevronRightIcon}
                                            onClick={() => setStep(s => Math.min(GUIDES.length - 1, s + 1))}
                                        />
                                    ) : (
                                        <Button
                                            tone="positive"
                                            text="Tamamla"
                                            icon={CheckmarkCircleIcon}
                                            onClick={() => setOpen(false)}
                                        />
                                    )}
                                </Box>
                            </Flex>
                        </Stack>
                    </Card>
                </Dialog>
            )}
        </Stack>
    )
}
