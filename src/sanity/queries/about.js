import { sanityFetch } from '../client'

export async function getAboutPage() {
  return sanityFetch(`
    *[_type == "aboutPage" && _id == "aboutPage"][0] {
      headerTitle,
      story[] {
        title,
        subtitle,
        description,
        "image": image.asset->url
      },
      stats[] {
        number,
        label,
        description
      },
      values[] {
        index,
        title,
        description
      }
    }
  `)
}
