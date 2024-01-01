import Delivery from './Delivery';
import SellerInfo from './SellerInfo';
import Service from './Service';

const SellingInfo = () => {
  return (
    <section className="mt-[34px] rounded-[5px] border-[0.5px] border-gray-5 px-[14px] py-[18px] text-sm text-gray-4">
      <SellerInfo />
      <Service />
      <Delivery />
    </section>
  );
};

export default SellingInfo;
