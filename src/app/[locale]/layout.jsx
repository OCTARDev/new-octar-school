import {NextIntlClientProvider, hasLocale } from 'next-intl';
import {notFound} from 'next/navigation';
import { routing , directions } from '@/i18n/routing';
import en from '@/messages/en/en.json';
import ar from '@/messages/ar/ar.json';


export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}


export default async function LocaleLayout({ children , params }) {

  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = { en, ar }[locale];
  const direction = directions[locale] || "ltr";

  return (
      <div lang={locale} dir={direction} className={`${locale === "ar" ? "font-cairo":"font-sans"} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
          {children}
        </NextIntlClientProvider>
      </div>
  );
}