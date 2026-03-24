import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekt / Realizacja',
  type: 'document',
  fields: [
    defineField({ name: 'brand', title: 'Marka klienta', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'name', title: 'Nazwa projektu', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'location', title: 'Lokalizacja', type: 'string' }),
    defineField({ name: 'year', title: 'Rok', type: 'string' }),
    defineField({ name: 'category', title: 'Kategoria', type: 'string' }),
    defineField({
      name: 'featured',
      title: 'Pokaż na stronie głównej',
      type: 'boolean',
      description: 'Zaznacz, aby projekt pojawił się w sekcji "Wybrane realizacje" na home.',
      initialValue: false,
    }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne (thumbnail)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Galeria zdjęć (karuzela portfolio)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'description', title: 'Opis projektu', type: 'text', rows: 5 }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  orderings: [
    { title: 'Kolejność rosnąco', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Rok malejąco', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'brand', media: 'mainImage' },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle, media }),
  },
})
