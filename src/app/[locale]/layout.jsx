import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { routing , directions } from '@/i18n/routing';




export default async function LocaleLayout({ children , params }) {

  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const direction = directions[locale] || "ltr";

  return (
      <div lang={locale} dir={direction}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </div>
  );
}