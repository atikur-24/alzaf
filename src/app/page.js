/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductPath from '@/components/ProductDetails/ProductPath';
import SellingInfo from '@/components/SellingInfo/SellingInfo';

export default function Home() {
  return (
    <main className="container-alzaf mb-10">
      <ProductPath />
      <section className="rounded-sm bg-white p-4">
        <ProductDetails />
        <SellingInfo />
      </section>
    </main>
  );
}
