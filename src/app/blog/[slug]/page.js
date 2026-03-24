import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import BlogDetailHeader from '@/components/BlogDetailHeader'
import BlogDetailContent from '@/components/BlogDetailContent'
import BlogDetailMore from '@/components/BlogDetailMore'
import BlogDetailCTA from '@/components/BlogDetailCTA'
import BlogFooter from '@/components/BlogFooter'
import BlogDetailAnimationsInit from '@/components/BlogDetailAnimationsInit'
import { getPostBySlug, getPostsSlugs, getOtherPosts } from '@/sanity/queries/blog'

export async function generateStaticParams() {
  const posts = await getPostsSlugs()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogDetail({ params }) {
  const { slug } = await params
  const [post, otherPosts] = await Promise.all([
    getPostBySlug(slug),
    getOtherPosts(slug, 2),
  ])

  if (!post) notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : ''

  return (
    <>
      <BlogDetailAnimationsInit />
      <div
        id="loader"
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
      ></div>

      <Navbar />
      <BlogDetailHeader
        title={post.title}
        heroImage={post.heroImage}
        author={post.author}
        readTime={post.readingTime}
        date={formattedDate}
      />
      <BlogDetailContent body={post.body} />
      <BlogDetailMore posts={otherPosts} currentSlug={slug} />
      <BlogDetailCTA />
      <BlogFooter />
    </>
  )
}
