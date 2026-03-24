import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Wpis Blogowy',
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
    defineField({ name: 'author', title: 'Autor', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Data publikacji', type: 'datetime' }),
    defineField({ name: 'readingTime', title: 'Czas czytania (np. "5 Min Czytania")', type: 'string' }),
    defineField({ name: 'category', title: 'Kategoria (np. Architektura)', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Zdjęcie główne', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Zajawka (krótki opis)', type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: 'Treść artykułu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normalny', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cytat', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Tekst alternatywny', type: 'string' }],
        },
      ],
    }),
  ],
  orderings: [
    { title: 'Najnowsze', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'heroImage' },
    prepare: ({ title, subtitle, media }) => ({
      title,
      media,
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString('pl-PL') : 'Brak daty',
    }),
  },
})
