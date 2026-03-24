import { sanityFetch } from '../client'

export async function getSiteSettings() {
  return sanityFetch(`
    *[_type == "siteSettings" && _id == "siteSettings"][0] {
      siteName,
      "logoUrl": logo.asset->url,
      email,
      phone,
      address,
      socialLinks,
      copyright,
      footerDescription
    }
  `)
}

export async function getCooperationSteps() {
  return sanityFetch(`
    *[_type == "cooperationStep"] | order(order asc) {
      order,
      title,
      description,
      tags
    }
  `)
}

export async function getLogoPartners() {
  return sanityFetch(`
    *[_type == "logoPartner"] | order(order asc) {
      name,
      category,
      "logoUrl": logo.asset->url
    }
  `)
}
