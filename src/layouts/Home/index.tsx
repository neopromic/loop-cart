/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
  };
}

export const Hero = () => {
  const t = useTranslations('Index');
  return (
    <section className="flex justify-center items-center bg-accent lg:px-12 p-6 h-64">
      <h1 className="w-full text-2xl text-center">{t('hero_title')}</h1>

    </section>
  );
};
