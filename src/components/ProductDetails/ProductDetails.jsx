import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Watch from '@/assets/images/products/watch.png';
import ProductContent from './ProductContent';
import ProductPath from './ProductPath';

const ProductDetails = () => {
  return (
    <section>
      <ProductPath />
      <div className="flex gap-5 rounded-sm bg-white p-4">
        <Image src={Watch} alt="watch" />
        <ProductContent />
      </div>
    </section>
  );
};

export default ProductDetails;
