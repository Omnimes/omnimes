import { siteMetadata } from '@/data/siteMetadata';
import { getDocuments } from "outstatic/server"
import { Feed } from "feed";

const host = siteMetadata.siteUrl;

export async function GET() {
  
  const feedOptions = {
    id: host,
    title: "OmniMES News",
    favicon: `${host}/favicon.ico`,
    description: "Latest updates and news from OmniMES.",
    link: host,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    generator: 'Feed for Node.js',
    feedLinks: {
      json: `${host}news.json`,
      atom: `${host}feed-news.xml`,
      rss2: `${host}rss-news.xml`
    },
    author: {
      name: "OmniMes",
      email: "kontakt@omnimes.pl",
      link: host
    }
  };
  
  const feed = new Feed(feedOptions);
  const news = getDocuments('news', ['title', 'slug', 'lang', 'description', 'author']);

  const pathMappingNews: { [key: string]: string } = {
    en: 'news',
    de: 'nachrichten',
    pl: 'aktualności',
  };

  news
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())  
  .map((item) => {
    const lang = (item.lang ?? 'pl') as 'en' | 'de' | 'pl'; 
    feed.addItem({
      title: item.title,
      link: `${host}${item.lang}/${pathMappingNews[lang]}/${item.slug}`,
      description: item.description,
      date: new Date(item.publishedAt),
      published: new Date(item.publishedAt),
      author: [
        item.author ?? {}
      ]
    })
  })

  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

