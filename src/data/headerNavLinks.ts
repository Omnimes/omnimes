import { IconType } from 'react-icons/lib'
import { LuAtom } from 'react-icons/lu'
import { LuCombine } from 'react-icons/lu'
import { LuClipboardSignature } from 'react-icons/lu'
import { LuCable } from 'react-icons/lu'
import { LuGalleryHorizontalEnd } from "react-icons/lu";
export const headerNavLinks: NavLink[] = [
  { href: '/', title: 'home' },
  { href: '/blog', title: 'blog' },
  { href: '/about', title: 'about' },
  { href: '/contact', title: 'contact' },
]

export const headerNavLinksDropDown: NavLinkDrop[] = [
  {
    href: '/offer',
    title: 'offer',
    desc: 'offerDesc',
    icon: LuClipboardSignature,
    color: '#9455d3',
  },
  { href: '/project', title: 'project', desc: 'projectDesc', icon: LuAtom, color: '#0070f0' },
  // { href: '/demo', title: 'demo', desc: 'demoDesc', icon: LuMonitorStop , color: '#c7861f' },
  {
    href: '/resources',
    title: 'resources',
    desc: 'resourcesDesc',
    icon: LuCombine,
    color: '#18c964',
  },
  { href: '/faq', title: 'faq', desc: 'faqDesc', icon: LuCable, color: '#f31260' },
  { href: '/gallery', title: 'gallery', desc: "galleryDesc", icon: LuGalleryHorizontalEnd, color: '#c7861f'}
]

type NavLink = {
  href: string
  title: string
}

type NavLinkDrop = {
  href: string
  title: string
  icon: IconType
  desc: string
  color: string
}
