import ProductContent from './ProductContent';
import ProductImages from './ProductImages';

const ProductDetails = () => {
  return (
    <section>
      <div className="gap-5 lg:flex">
        <ProductImages />
        <ProductContent />
      </div>
    </section>
  );
};

export default ProductDetails;
