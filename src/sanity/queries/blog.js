import { client } from '../client'

const postFields = `
  _id,
  title,
  "slug": slug.current,
  author,
  publishedAt,
  readingTime,
  category,
  "heroImage": heroImage.asset->url,
  excerpt
`

const postFieldsFull = `
  ${postFields},
  body[] {
    ...,
    _type == "image" => {
      ...,
      "url": asset->url
    }
  }
`

export async function getLatestPosts(limit = 2) {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) [0...$limit] { ${postFields} }`,
    { limit: limit - 1 }
  )
}

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ${postFields} }`
  )
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${postFieldsFull} }`,
    { slug }
  )
}

export async function getPostsSlugs() {
  return client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`)
}

export async function getOtherPosts(currentSlug, limit = 2) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current != $currentSlug] | order(publishedAt desc) [0...$limit] { ${postFields} }`,
    { currentSlug, limit: limit - 1 }
  )
}
