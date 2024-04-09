import { genPageMetadata } from '@/app/seo'
import { getLocalePrimaryDialects } from '@/data/locales'
import ListLayout from '@/layouts/ListLayout'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { getDocuments, load } from 'outstatic/server'
import { ExtendedOstDocument } from '../page'

type Props = {
  params: {
    locale: string
    page: string
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  const title = t('blog_title')
  const description = t('blog_desc')
  const keywords = t('blog_keywords')
  const localeShort = getLocalePrimaryDialects(locale)
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  const meta = genPageMetadata(obj)

  return meta
}

const POSTS_PER_PAGE = 10

export const generateStaticParams = async ({ params: { locale } }: Props) => {
  const posts = getDocuments('posts', ['lang'])
  if (!posts || posts.length == 0 || posts === undefined) {
    return []
  }
  const localePosts = posts.filter((post) => post.lang == locale)
  const totalPages = Math.ceil(localePosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

async function getData(locale: string, page: string) {
  const db = await load()
  // get all posts. Example of fetching a specific collection
  const allPosts = await db
    .find<ExtendedOstDocument>({ collection: 'posts', status: 'published', lang: locale }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'author',
      'tags',
    ])
    .sort({ publishedAt: -1 })
    .skip((Number(page) - 1) * POSTS_PER_PAGE)
    .limit(POSTS_PER_PAGE)
    .toArray()

  const postsLength = getDocuments('posts').length

  return {
    allPosts,
    postsLength,
  }
}

export default async function Page({ params }: { params: { page: string; locale: string } }) {
  unstable_setRequestLocale(params.locale)
  const t = await getTranslations('Blog')
   const { allPosts, postsLength } = await getData(params.locale, params.page);
  if (!allPosts || allPosts.length == 0 || allPosts === undefined) {
    return <p>{t('NotFound')}</p>
  }

  const pageNumber = parseInt(params.page as string)

  const pagination = {
      currentPage: pageNumber,
      totalPages: Math.ceil(postsLength / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={allPosts}
      initialDisplayPosts={allPosts}
      pagination={pagination}
      title={t('title')}
    />
  )
}
