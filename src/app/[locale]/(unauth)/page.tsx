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

  const products = [{
    id: 0,
    imageUrl: 'https://github.com/neopromic.png',
    productName: 'Test',
    productPrice: 100,
  }, {
    id: 1,
    imageUrl: 'https://github.com/neopromic.png',
    productName: 'Test',
    productPrice: 100,
  }, {
    id: 2,
    imageUrl: 'https://github.com/neopromic.png',
    productName: 'kjdalksjdlkajdlaksjdlkajlsdjsalksjdalkjdlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkklllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
    productPrice: 100,
  }, {
    id: 3,
    imageUrl: 'https://github.com/neopromic.png',
    productName: 'Test',
    productPrice: 100,
  }];

  return (
    <>
      <Hero />
      <section className="space-y-4 p-6 lg:px-12 ">
        <h1 className="flex items-center gap-2 font-light tracking-tight">
          <span className="select-none text-lg font-bold text-gray-300">/</span>
          Mais vendidos
        </h1>
        <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 lg:place-content-between">
          {
            products.map(data => (
              <ProductCard key={data.id} productImage={data.imageUrl} productName={data.productName} productPrice={data.productPrice} />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Index;
