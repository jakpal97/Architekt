import { sanityFetch } from '../client'

const serviceFields = `
  _id,
  title,
  "slug": slug.current,
  order,
  "heroImage": heroImage.asset->url,
  sub,
  cubeDescription,
  shortDescription,
  features,
  description,
  descriptionExtra,
  processSteps[] {
    icon,
    title,
    description
  },
  processPoints
`

export async function getAllServices() {
  return sanityFetch(`*[_type == "service"] | order(order asc) { ${serviceFields} }`)
}

export async function getServiceBySlug(slug) {
  return sanityFetch(
    `*[_type == "service" && slug.current == $slug][0] { ${serviceFields} }`,
    { slug }
  )
}

export async function getServicesSlugs() {
  return sanityFetch(`*[_type == "service"]{ "slug": slug.current }`)
}
