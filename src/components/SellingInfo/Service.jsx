import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Time from '@/assets/icons/time.svg';

const Service = () => {
  return (
    <div>
      <h6 className="text-base font-medium text-[#5A5A5A]">Service</h6>
      <div className="flex items-center gap-2 pt-3">
        <Image src={Time} alt="time" />
        <div>
          <p className="font-medium text-primary">7 day return</p>
        </div>
      </div>
      <p className="pb-2 pl-6 pt-1 text-xs">Change of mind is not applicable</p>
      <div className="flex items-center gap-2">
        <Image src={Time} alt="time" />
        <p className="font-medium text-gray-5">Warranty Not Available</p>
      </div>
    </div>
  );
};

export default Service;
