/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { Search, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Button } from '@/components/ui/button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'HeaderComponent',
  });

  return {
    title: t('logo_title'),
  };
}

export const ContainerLayout = () => {
  const t = useTranslations('HeaderComponent');
  return (
    <header className="top-0 left-0 sticky flex justify-between items-center bg-background px-6 lg:px-12 border-b h-12">
      <h1>{t('logo_title')}</h1>
      <nav className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Search />
        </Button>
        <Button size="icon" variant="ghost">
          <ShoppingCart />
        </Button>
        <Button variant="ghost" className="group">
          <LocaleSwitcher className="group-hover:bg-accent group-hover:transition-all" />
        </Button>
      </nav>
    </header>
  );
};
