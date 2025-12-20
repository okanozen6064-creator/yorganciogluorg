
import { Stack, Card, Flex, Text, Button, Box, Dialog } from '@sanity/ui'
import { HelpCircleIcon } from '@sanity/icons'
import { useState } from 'react'

export function StudioNavbar(props: any) {
    const [open, setOpen] = useState(false)

    return (
        <Stack>
            {/* Default Navbar */}
            {props.renderDefault(props)}

            {/* Custom Help Bar */}
            <Card padding={3} tone="primary">
                <Flex justify="flex-end" align="center">
                    <Box marginRight={3}>
                        <Text size={1} weight="medium">
                            Yorgancıoğlu Yönetim Paneli
                        </Text>
                    </Box>
                    <Button
                        icon={HelpCircleIcon}
                        text="Nasıl Kullanılır?"
                        mode="ghost"
                        onClick={() => setOpen(true)}
                    />
                </Flex>
            </Card>

            {open && (
                <Dialog
                    header="Panel Kullanım Kılavuzu"
                    id="help-dialog"
                    onClose={() => setOpen(false)}
                    zOffset={1000}
                    width={2}
                >
                    <Box padding={4}>
                        <Stack space={4}>
                            <Box>
                                <Text size={2} weight="bold">1. Yeni Ürün Ekleme</Text>
                                <Text size={1} style={{ marginTop: '0.5rem' }}>
                                    Sol menüden "Tüm Ürünler"e tıklayın, ardından sağ üstteki kalem simgesine (Yeni) basın.
                                    Ürün adı, fiyatı ve görselleri girip "Publish" butonuna basarak yayınlayın.
                                </Text>
                            </Box>

                            <Box>
                                <Text size={2} weight="bold">2. Kategori Oluşturma</Text>
                                <Text size={1} style={{ marginTop: '0.5rem' }}>
                                    "Kategoriler" menüsüne gidin. Yeni bir kategori oluşturun (Örn: "Koltuk Takımları").
                                    Ürün eklerken bu kategoriyi seçtiğinizde ürün otomatik olarak ilgili sayfada görünecektir.
                                </Text>
                            </Box>

                            <Box>
                                <Text size={2} weight="bold">3. Slider Yönetimi</Text>
                                <Text size={1} style={{ marginTop: '0.5rem' }}>
                                    Ana sayfadaki büyük görselleri değiştirmek için "Hero Slider" menüsünü kullanın.
                                    Sıra numarası (Order) vererek hangi görselin önce çıkacağını belirleyebilirsiniz.
                                </Text>
                            </Box>

                            <Box>
                                <Text size={2} weight="bold">4. Blog Yazıları</Text>
                                <Text size={1} style={{ marginTop: '0.5rem' }}>
                                    "Blog Yazıları" bölümünden makaleler ekleyebilirsiniz. Kapak görseli ve içerik alanlarını doldurmanız yeterlidir.
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Dialog>
            )}
        </Stack>
    )
}
