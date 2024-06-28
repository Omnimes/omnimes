import { redirect } from "next/navigation"
import { getCurrentUser } from "@/utils/session"
import { MainNav } from "@/components/dashboard/MainNav";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { SiteFooter } from "@/components/dashboard/SiteFooter";
import { UserAccountNavServer } from "@/components/auth/UserAccountNavServer";
import ThemeSwitch from "@/components/ThemeSwitch";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { getMainNav, getSubNav } from "@/lib/getSubNav";

type DashboardLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function DashboardLayout({ children, params: { locale }}: DashboardLayoutProps) {
  unstable_setRequestLocale(locale);
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login")
  }

  const mainNav = getMainNav(user.role);
  const subNav = getSubNav(user.role);

  const mobileNav = [...mainNav, ...subNav];
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none inset-x-0 border-b !border-border backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70 navbar sticky top-0 xl:px-0">
        <div className="z-40 flex gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-14 container px-4 py-2 md:px-8 mx-auto">
          <MainNav items={mainNav} mobileNav={mobileNav} />
          <section className="flex gap-4">
            <LocaleSwitcher />
            <UserAccountNavServer
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
                role: user.role,
              }}
            />
            <ThemeSwitch />
          </section>
        </div>
      </header>
      <div className="grid flex-1 justify-center gap-12 md:grid-cols-[200px_1fr] container px-4 py-2 md:px-8 mx-auto w-full">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={subNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t !border-border w-full flex justify-center" />
    </div>
  )
}