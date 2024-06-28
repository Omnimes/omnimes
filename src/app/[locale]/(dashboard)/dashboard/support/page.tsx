import { redirect } from "next/navigation";
import { getCurrentUser } from "@/utils/session";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { getLocalePrimaryDialects } from '@/data/locales';
import { genPageMetadata } from '@/app/seo';
import { ComponentFormSupport } from "@/components/forms/support/ComponentFormSupport";
import { DashboardShell } from '@/components/dashboard/Shell';
import { DashboardHeader } from '@/components/dashboard/Header';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "SupportPageMeta" });
  const title = t('title');
  const description = t('desc');
  const keywords = t('keywords');
  const localeShort = getLocalePrimaryDialects(locale);
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  const meta = genPageMetadata(obj)
  return meta
}

export default async function SupportPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const user = await getCurrentUser();
  const t = await getTranslations("SupportPage");

  if (!user) {
    redirect("/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={t("title")}
        text={t("desc")}
      />
      <div className="grid gap-10">
        <ComponentFormSupport user={{
          name: user.name,
          image: user.image,
          email: user.email,
          role: user.role,
        }} />
      </div>
    </DashboardShell>
  )
}
