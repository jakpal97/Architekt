import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ustawienia Globalne',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Nazwa firmy', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'email', title: 'E-mail kontaktowy', type: 'string' }),
    defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
    defineField({ name: 'address', title: 'Adres', type: 'text', rows: 3 }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platforma (np. IG, TW, FB)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        },
      ],
    }),
    defineField({ name: 'copyright', title: 'Tekst copyright', type: 'string' }),
    defineField({ name: 'footerDescription', title: 'Opis w stopce', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Ustawienia Globalne' }) },
})
