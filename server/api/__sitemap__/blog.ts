import { defineSitemapEventHandler } from '#imports'
import { queryContent } from '#content' // attention : c'est bien queryContent (et pas serverQueryContent)

export default defineSitemapEventHandler(async () => {
  const posts = await queryContent('blog').only(['_path', 'updatedAt']).find()

  return posts.map(post => ({
    loc: post._path,
    lastmod: post.updatedAt,
  }))
})
