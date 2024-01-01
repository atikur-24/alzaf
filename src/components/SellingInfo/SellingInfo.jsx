import Delivery from './Delivery';
import SellerInfo from './SellerInfo';
import Service from './Service';

const SellingInfo = () => {
  return (
    <section className="mt-[34px] flex gap-[57px] rounded-[5px] border-[0.5px] border-gray-5 px-[14px] py-[18px] text-sm text-gray-4">
      <SellerInfo />
      <div className="border border-[#D9D9D9]" />
      <Service />
      <div className="border border-[#D9D9D9]" />
      <Delivery />
    </section>
  );
};

export default SellingInfo;
