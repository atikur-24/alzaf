import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Cash from '@/assets/icons/cash.svg';
// eslint-disable-next-line import/no-unresolved
import DeliveryIcon from '@/assets/icons/delivery.svg';

const Delivery = () => {
  return (
    <div>
      <h6 className="text-base font-medium text-[#5A5A5A]">Delivery </h6>
      <div className="flex items-center gap-2 pb-2 pt-3">
        <Image src={DeliveryIcon} alt="delivery" />
        <p>
          <span className="font-medium text-primary">Free Delivery </span>
          <span className="text-xs font-normal">4Nov - 8Nov 3- 5 days</span>
        </p>
      </div>
      <p className="pb-2 pl-6 pt-1 text-xs">
        Enjoy free shipping promotion with minimum spend of ৳ 499 from{' '}
        <span className="text-primary">xpress.</span>
      </p>
      <div className="flex items-center gap-2">
        <Image src={Cash} alt="cash" />
        <p className="text-primary">Cash on delivery available</p>
      </div>
    </div>
  );
};

export default Delivery;
