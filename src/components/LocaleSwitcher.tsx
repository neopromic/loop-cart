'use client';

import { useLocale } from 'next-intl';
import type { ChangeEventHandler, SelectHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

type LocaleSwitcherProps = {
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className={cn('bg-transparent focus-visible:ring font-medium size-full focus:outline-none', className)}
      aria-label="lang-switcher"
    >
      {AppConfig.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
