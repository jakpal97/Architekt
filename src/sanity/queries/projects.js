import { sanityFetch } from '../client'

const projectFields = `
  _id,
  brand,
  name,
  location,
  year,
  category,
  featured,
  order,
  "mainImage": mainImage.asset->url,
  "images": images[].asset->url,
  description,
  tags
`

export async function getFeaturedProjects() {
  return sanityFetch(
    `*[_type == "project" && featured == true] | order(order asc) { ${projectFields} }`
  )
}

export async function getAllProjects() {
  return sanityFetch(`*[_type == "project"] | order(order asc) { ${projectFields} }`)
}
