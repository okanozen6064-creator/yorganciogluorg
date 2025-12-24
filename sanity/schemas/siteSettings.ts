
import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Ayarları',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Başlığı',
            type: 'string',
            initialValue: 'Yorgancıoğlu'
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
        }),
        defineField({
            name: 'contact',
            title: 'İletişim Bilgileri',
            type: 'object',
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({ name: 'phone', title: 'Telefon', type: 'string', initialValue: '+90 544 940 49 10' }),
                defineField({ name: 'whatsapp', title: 'WhatsApp Numarası (Boşluksuz)', type: 'string', description: 'Örn: 905449404910', initialValue: '905449404910' }),
                defineField({ name: 'email', title: 'E-posta', type: 'string', initialValue: '07yorgancioglumobilya@gmail.com' }),
                defineField({ name: 'address', title: 'Adres', type: 'text', rows: 3, initialValue: 'Sütçüler, Hastane Cd. NO:32\n07320 Kepez/Antalya' }),
            ]
        }),
        defineField({
            name: 'social',
            title: 'Sosyal Medya Linkleri',
            type: 'object',
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({ name: 'instagram', title: 'Instagram URL', type: 'url', initialValue: 'https://instagram.com' }),
                defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
                defineField({ name: 'facebook', title: 'Facebook URL', type: 'url', initialValue: 'https://facebook.com' }),
                defineField({ name: 'pinterest', title: 'Pinterest URL', type: 'url' }),
                defineField({ name: 'youtube', title: 'YouTube URL', type: 'url', initialValue: 'https://twitter.com' }),
            ]
        }),
        defineField({
            name: 'announcement',
            title: 'Duyuru Çubuğu (Announcement Bar)',
            type: 'object',
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({ name: 'enabled', title: 'Aktif Et', type: 'boolean', initialValue: false }),
                defineField({ name: 'text', title: 'Duyuru Metni', type: 'string' }),
                defineField({ name: 'link', title: 'Link (Opsiyonel)', type: 'url' }),
                defineField({ name: 'backgroundColor', title: 'Arka Plan Rengi', type: 'string', initialValue: '#000000' }),
                defineField({ name: 'textColor', title: 'Yazı Rengi', type: 'string', initialValue: '#ffffff' }),
            ]
        }),
        defineField({
            name: 'popup',
            title: 'Kampanya Pop-up',
            type: 'object',
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({ name: 'enabled', title: 'Aktif Et', type: 'boolean', initialValue: false }),
                defineField({ name: 'image', title: 'Pop-up Görseli', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'title', title: 'Başlık', type: 'string' }),
                defineField({ name: 'description', title: 'Açıklama', type: 'text', rows: 3 }),
                defineField({ name: 'buttonText', title: 'Buton Metni', type: 'string' }),
                defineField({ name: 'buttonLink', title: 'Buton Linki', type: 'url' }),
                defineField({ name: 'delay', title: 'Gecikme Süresi (Saniye)', type: 'number', initialValue: 3 }),
            ]
        }),
    ],
})
