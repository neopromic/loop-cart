import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProductCard } from '@/components/CardProduct';
import { Hero } from '@/layouts/Home';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}
const Index = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <>
      <Hero />
      <section className="space-y-4 p-6 lg:px-12">
        <h1 className="font-light tracking-tight">Mais vendidos</h1>
        <div className="">

          <ProductCard productImage="https://github.com/neopromic.png" productName="Test" productPrice={70} />
        </div>
      </section>
    </>
  );
};

export default Index;
