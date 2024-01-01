import ProductContent from './ProductContent';
import ProductImages from './ProductImages';

const ProductDetails = () => {
  return (
    <section>
      <div className="flex gap-5">
        <ProductImages />
        <ProductContent />
      </div>
    </section>
  );
};

export default ProductDetails;
