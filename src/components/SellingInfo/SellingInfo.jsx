import Delivery from './Delivery';
import SellerInfo from './SellerInfo';
import Service from './Service';

const SellingInfo = () => {
  return (
    <section className="mt-[34px] rounded-[5px] border-gray-5 text-sm text-gray-4 lg:flex lg:border-[0.5px] lg:px-[14px] lg:py-[18px]">
      <SellerInfo />
      <Service />
      <Delivery />
    </section>
  );
};

export default SellingInfo;
