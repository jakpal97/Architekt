import { client } from '../client'

export async function getSiteSettings() {
  return client.fetch(`
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
  return client.fetch(`
    *[_type == "cooperationStep"] | order(order asc) {
      order,
      title,
      description,
      tags
    }
  `)
}

export async function getLogoPartners() {
  return client.fetch(`
    *[_type == "logoPartner"] | order(order asc) {
      name,
      category,
      "logoUrl": logo.asset->url
    }
  `)
}
