import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Usługa',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tytuł', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title' },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'order', title: 'Kolejność (1-5)', type: 'number', validation: (R) => R.required() }),
    defineField({ name: 'heroImage', title: 'Zdjęcie główne', type: 'image', options: { hotspot: true } }),

    defineField({
      name: 'sub',
      title: 'Podtytuł (na cube, np. "Koncepcja & BIM")',
      type: 'string',
    }),
    defineField({
      name: 'cubeDescription',
      title: 'Opis krótki (na cube na stronie głównej)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Opis średni (lista usług /uslugi)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Cechy (lista usług)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Np. KONCEPCJA, WIZUALIZACJA 3D, DOBÓR MATERIAŁÓW',
    }),

    defineField({
      name: 'description',
      title: 'Opis główny (podstrona usługi)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'descriptionExtra',
      title: 'Opis dodatkowy (podstrona usługi)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'processSteps',
      title: 'Kroki procesu (podstrona usługi)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Ikona (znak)', type: 'string' },
            { name: 'title', title: 'Tytuł kroku', type: 'string' },
            { name: 'description', title: 'Opis kroku', type: 'text' },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'processPoints',
      title: 'Punkty procesu (podstrona usługi)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  orderings: [
    { title: 'Kolejność rosnąco', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', media: 'heroImage', subtitle: 'order' },
    prepare: ({ title, media, subtitle }) => ({ title, media, subtitle: `#${subtitle}` }),
  },
})
