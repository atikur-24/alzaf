import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Time from '@/assets/icons/time.svg';

const Service = () => {
  return (
    <div className="border-b border-[#D9D9D9] py-3 lg:w-[30%] lg:border-x lg:border-b-0 lg:px-[57px] lg:py-0">
      <h6 className="text-[10px] text-[#5A5A5A] lg:text-base lg:font-medium">
        Service
      </h6>
      <div className="flex items-center gap-2 pt-3">
        <Image src={Time} alt="time" />
        <div>
          <p className="text-[10px] text-primary lg:text-sm lg:font-medium">
            7 day return
          </p>
        </div>
      </div>
      <p className="pb-2 pl-6 pt-1 text-[8px] lg:text-xs">
        Change of mind is not applicable
      </p>
      <div className="flex items-center gap-2">
        <Image src={Time} alt="time" />
        <p className="text-[10px] text-gray-5 lg:text-sm lg:font-medium">
          Warranty Not Available
        </p>
      </div>
    </div>
  );
};

export default Service;
