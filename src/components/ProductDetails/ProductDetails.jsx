import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Watch from '@/assets/images/products/watch.png';
import ProductContent from './ProductContent';

const ProductDetails = () => {
  return (
    <section>
      <div className="flex gap-5">
        <Image src={Watch} alt="watch" />
        <ProductContent />
      </div>
    </section>
  );
};

export default ProductDetails;
