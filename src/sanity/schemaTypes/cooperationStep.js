import { defineField, defineType } from 'sanity'

export const cooperationStep = defineType({
  name: 'cooperationStep',
  title: 'Krok Współpracy',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Kolejność (1–4)',
      type: 'number',
      validation: (R) => R.required().min(1).max(4),
      description: 'Musi odpowiadać kolejności modelu 3D (1=Brief, 2=Projekt, 3=Produkcja, 4=Montaż)',
    }),
    defineField({ name: 'title', title: 'Tytuł kroku', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'Opis kroku', type: 'text', rows: 3 }),
    defineField({
      name: 'tags',
      title: 'Tagi (np. KICKOFF, STRATEGIA)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  orderings: [
    { title: 'Kolejność rosnąco', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'order' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `Krok ${subtitle}` }),
  },
})
