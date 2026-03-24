
import BlogHeader from '@/components/BlogHeader'
import BlogList from '@/components/BlogList'
import BlogCTA from '@/components/BlogCTA'
import BlogFooter from '@/components/BlogFooter'
import BlogAnimationsInit from '@/components/BlogAnimationsInit'
import { getAllPosts } from '@/sanity/queries/blog'
import Navbar from '@/components/Navbar'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <>
      <BlogAnimationsInit />
      <div
        id="loader"
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
      ></div>

      <Navbar />
      <BlogHeader />
      <BlogList posts={posts} />
      <BlogCTA />
      <BlogFooter />
    </>
  )
}
