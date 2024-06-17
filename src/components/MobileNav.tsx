import * as React from "react"
import Link from "next/link"
import { siteMetadata } from "@/data/siteMetadata"
import { cn } from "@/utils/utils"
import { useLockBody } from "@/hooks/useLockBody"
import Logo from "@/data/logo.svg";
import Image from "next/image"
import { useTranslations } from "next-intl"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()
  const t = useTranslations("DashboardNav")
  return (
    <div
      className={cn(
          "fixed inset-0 top-16 z-60 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-4 pb-32 animate-in slide-in-from-bottom-80 md:hidden bg-white/80 dark:bg-black/80"
      )}
    >
      <div className="relative border border-foreground-200 z-60 grid gap-6 rounded-md p-4 shadow-lg backdrop-blur-xl backdrop-saturate-150 bg-background/90">
        <Link href="/" className="flex items-center space-x-2">
        <Image
            src={Logo.src}
            alt={'OmniMES logo'}
            width={44}
            height={44}
            priority
            className="mr-2"
            style={{ width: '44px', height: 'auto' }}
        />
            <span className="font-bold">{siteMetadata.headerTitle}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {t(item.title)}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}