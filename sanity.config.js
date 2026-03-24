import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'wpm-solutions',
  title: 'WPM Solutions',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Zawartość')
          .items([
            S.listItem()
              .title('Strona Główna')
              .id('homePage')
              .child(
                S.document().schemaType('homePage').documentId('homePage')
              ),
            S.listItem()
              .title('Strona O Nas')
              .id('aboutPage')
              .child(
                S.document().schemaType('aboutPage').documentId('aboutPage')
              ),
            S.divider(),
            S.documentTypeListItem('service').title('Usługi'),
            S.documentTypeListItem('project').title('Projekty / Portfolio'),
            S.documentTypeListItem('blogPost').title('Blog'),
            S.documentTypeListItem('logoPartner').title('Partnerzy (karuzela)'),
            S.documentTypeListItem('cooperationStep').title('Kroki współpracy'),
            S.divider(),
            S.listItem()
              .title('Ustawienia Globalne')
              .id('siteSettings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings')
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
