import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Strona Główna',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Sekcja Hero', options: { collapsible: true, collapsed: false } },
    { name: 'services', title: 'Sekcja Usługi', options: { collapsible: true, collapsed: true } },
    { name: 'portfolio', title: 'Sekcja Portfolio', options: { collapsible: true, collapsed: true } },
    { name: 'blog', title: 'Sekcja Blog', options: { collapsible: true, collapsed: true } },
    { name: 'partners', title: 'Sekcja Partnerzy', options: { collapsible: true, collapsed: true } },
    { name: 'cta', title: 'Sekcja CTA / Kontakt', options: { collapsible: true, collapsed: true } },
    { name: 'cooperation', title: 'Sekcja Kroki Współpracy', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // --- HERO ---
    defineField({
      name: 'heroTitle1',
      title: 'Linia 1 tytułu (np. WPM)',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroTitle2',
      title: 'Linia 2 tytułu (np. SOLUTIONS)',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Wideo w tle',
      type: 'file',
      options: { accept: 'video/*' },
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroVideoPoster',
      title: 'Poster wideo (placeholder przed załadowaniem)',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'hero',
    }),

    // --- USŁUGI ---
    defineField({
      name: 'servicesSectionTitle',
      title: 'Nagłówek sekcji',
      type: 'string',
      fieldset: 'services',
    }),
    defineField({
      name: 'featuredServices',
      title: 'Wybrane usługi (kolejność ma znaczenie)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      fieldset: 'services',
      description: 'Najpierw dodaj usługi w sekcji "Usługi", a następnie wybierz je tutaj.',
    }),

    // --- PORTFOLIO ---
    defineField({
      name: 'portfolioSectionTitle',
      title: 'Nagłówek sekcji',
      type: 'string',
      fieldset: 'portfolio',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Wybrane projekty (kolejność ma znaczenie)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      fieldset: 'portfolio',
      description: 'Najpierw dodaj projekty w sekcji "Projekty / Portfolio", a następnie wybierz je tutaj.',
    }),

    // --- BLOG ---
    defineField({
      name: 'blogSectionTitle',
      title: 'Nagłówek sekcji',
      type: 'string',
      fieldset: 'blog',
      description: 'Dwa najnowsze posty wyświetlają się automatycznie.',
    }),

    // --- PARTNERZY ---
    defineField({
      name: 'partnersSectionTitle',
      title: 'Nagłówek sekcji',
      type: 'string',
      fieldset: 'partners',
      description: 'Logotypy zarządzane są w kolekcji "Partnerzy (karuzela)".',
    }),

    // --- CTA ---
    defineField({
      name: 'ctaHeadline',
      title: 'Główne hasło',
      type: 'string',
      fieldset: 'cta',
    }),
    defineField({
      name: 'ctaLeadText',
      title: 'Tekst wprowadzający',
      type: 'text',
      rows: 3,
      fieldset: 'cta',
    }),
    defineField({
      name: 'ctaStats',
      title: 'Statystyki (np. 340+ Realizacji)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Liczba (np. "340+")', type: 'string' },
            { name: 'label', title: 'Etykieta (np. "REALIZACJI")', type: 'string' },
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        },
      ],
      fieldset: 'cta',
    }),
    defineField({
      name: 'ctaScopeOptions',
      title: 'Opcje zakresu w formularzu (np. Projekty, Druk...)',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'cta',
    }),

    // --- KROKI WSPÓŁPRACY ---
    defineField({
      name: 'cooperationSectionTitle',
      title: 'Nagłówek sekcji',
      type: 'string',
      fieldset: 'cooperation',
      description: 'Kroki zarządzane są w kolekcji "Kroki współpracy".',
    }),
  ],
  preview: { prepare: () => ({ title: 'Strona Główna' }) },
})
