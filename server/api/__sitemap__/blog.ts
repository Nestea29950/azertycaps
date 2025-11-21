import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // utilise useContent(), qui est safe en Nitro
  const posts = await useContent('blog').only(['_path', 'updatedAt']).find()

  return posts.map(post => ({
    loc: post._path,
    lastmod: post.updatedAt,
  }))
})
