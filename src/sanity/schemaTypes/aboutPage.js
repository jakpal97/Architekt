import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Strona O Nas',
  type: 'document',
  fieldsets: [
    { name: 'header', title: 'Nagłówek strony', options: { collapsible: true, collapsed: false } },
    { name: 'story', title: 'Sekcja Historia', options: { collapsible: true, collapsed: true } },
    { name: 'stats', title: 'Sekcja Liczby i Statystyki', options: { collapsible: true, collapsed: true } },
    { name: 'values', title: 'Sekcja Wartości', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // --- NAGŁÓWEK ---
    defineField({
      name: 'headerTitle',
      title: 'Tytuł strony (np. "Kim Jesteśmy")',
      type: 'string',
      fieldset: 'header',
    }),

    // --- HISTORIA ---
    defineField({
      name: 'story',
      title: 'Bloki historii (2 bloki — tekst + zdjęcie)',
      type: 'array',
      fieldset: 'story',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Tytuł bloku', type: 'string' },
            { name: 'subtitle', title: 'Podtytuł', type: 'string' },
            { name: 'description', title: 'Opis', type: 'text', rows: 4 },
            { name: 'image', title: 'Zdjęcie', type: 'image', options: { hotspot: true } },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),

    // --- STATYSTYKI ---
    defineField({
      name: 'stats',
      title: 'Statystyki (liczby które robią wrażenie)',
      type: 'array',
      fieldset: 'stats',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Liczba (np. "340+")', type: 'string' },
            { name: 'label', title: 'Etykieta (np. "Realizacji")', type: 'string' },
            { name: 'description', title: 'Opis', type: 'string' },
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        },
      ],
    }),

    // --- WARTOŚCI ---
    defineField({
      name: 'values',
      title: 'Wartości firmy (sekcja "To co nas definiuje")',
      type: 'array',
      fieldset: 'values',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'index', title: 'Numer (np. "01")', type: 'string' },
            { name: 'title', title: 'Tytuł wartości', type: 'string' },
            { name: 'description', title: 'Opis', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'index' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Strona O Nas' }) },
})
