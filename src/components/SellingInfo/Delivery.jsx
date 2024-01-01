import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Cash from '@/assets/icons/cash.svg';
// eslint-disable-next-line import/no-unresolved
import DeliveryIcon from '@/assets/icons/delivery.svg';

const Delivery = () => {
  return (
    <div className="py-3 text-[10px] lg:w-[30%] lg:py-0 lg:pl-[57px] lg:text-sm">
      <h6 className="text-[10px] text-[#5A5A5A] lg:text-base lg:font-medium">
        Delivery
      </h6>
      <div className="flex items-center gap-2 pt-3">
        <Image src={DeliveryIcon} alt="delivery" />
        <p>
          <span className="text-primary lg:font-medium">Free Delivery </span>
          <span className="text-xs font-normal">4Nov - 8Nov 3- 5 days</span>
        </p>
      </div>
      <p className="pb-2 pl-6 pt-1 text-[8px] lg:text-xs">
        Enjoy free shipping promotion with minimum spend of ৳ 499 from
        <span className="text-primary"> xpress.</span>
      </p>
      <div className="flex items-center gap-2">
        <Image src={Cash} alt="cash" />
        <div className="flex flex-auto items-center justify-between gap-3">
          <p className="text-primary">Cash on delivery available</p>
          <p className="">৳ 55</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
