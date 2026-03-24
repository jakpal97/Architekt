'use client'

import { PortableText } from '@portabletext/react'

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-600 text-xl leading-relaxed mb-8">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-tight">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <div className="bg-gray-50 p-12 md:p-16 rounded-xl border-l-4 border-black my-16 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-lg text-3xl font-serif">
          &quot;
        </div>
        <blockquote className="text-center">
          <p className="text-3xl md:text-4xl font-medium text-black leading-tight italic mb-0">
            {children}
          </p>
        </blockquote>
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  types: {
    image: ({ value }) => (
      <div className="overflow-hidden rounded-lg my-12 h-[500px]">
        <img
          src={value.url}
          alt={value.alt || ''}
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-4 mb-12 mt-8">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-4">
        <span className="w-6 h-6 border-4 border-black rounded-full flex-shrink-0 mt-1"></span>
        <span className="text-lg text-gray-700 font-medium leading-relaxed">{children}</span>
      </li>
    ),
  },
}

export default function BlogDetailContent({ body }) {
  if (!body || body.length === 0) {
    return (
      <article className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400 text-xl">Treść artykułu zostanie dodana w panelu Sanity.</p>
        </div>
      </article>
    )
  }

  return (
    <article className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
      <div className="max-w-5xl mx-auto anim-fade-up">
        <PortableText value={body} components={portableTextComponents} />
      </div>
    </article>
  )
}
