import { unstable_setRequestLocale } from 'next-intl/server';

import { Header } from '@/components/Header';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Header.Container />
      {props.children}
    </>
  );
}
