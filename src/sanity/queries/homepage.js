import { client } from '../client'

const serviceFields = `
  _id,
  title,
  "slug": slug.current,
  order,
  "heroImage": heroImage.asset->url,
  sub,
  cubeDescription,
  shortDescription,
  features
`

const projectFields = `
  _id,
  brand,
  name,
  location,
  year,
  category,
  order,
  "mainImage": mainImage.asset->url,
  description,
  tags
`

export async function getHomePage() {
  return client.fetch(`
    *[_type == "homePage" && _id == "homePage"][0] {
      heroTitle1,
      heroTitle2,
      "heroVideoUrl": heroVideo.asset->url,
      "heroVideoPosterUrl": heroVideoPoster.asset->url,

      servicesSectionTitle,
      "featuredServices": featuredServices[]->{
        ${serviceFields}
      },

      portfolioSectionTitle,
      "featuredProjects": featuredProjects[]->{
        ${projectFields}
      },

      blogSectionTitle,
      partnersSectionTitle,
      cooperationSectionTitle,

      ctaHeadline,
      ctaLeadText,
      ctaStats,
      ctaScopeOptions
    }
  `)
}
