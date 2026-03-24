import { defineField, defineType } from 'sanity'

export const logoPartner = defineType({
  name: 'logoPartner',
  title: 'Partner (Karuzela)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nazwa marki', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'category', title: 'Kategoria (np. Fashion)', type: 'string' }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
    defineField({ name: 'logo', title: 'Logo (opcjonalne)', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [
    { title: 'Kolejność rosnąco', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category' },
  },
})
