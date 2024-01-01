import Image from 'next/image';
/* eslint-disable import/no-unresolved */
import Ellipse from '@/assets/icons/Ellipse.svg';
import SellerProfile from '@/assets/images/seller/seller-profile.png';
import Chat from '../Buttons/Chat';

const SellerInfo = () => {
  return (
    <div className="flex items-center rounded-sm border border-gray-5 p-[10px] lg:w-[50%] lg:gap-[57px] lg:border-none lg:p-0">
      <div className="flex flex-auto gap-2 lg:w-[50%] lg:gap-[15px]">
        <div>
          <div className="flex gap-[15px]">
            <div>
              <Image
                className="h-10 w-10 rounded-full lg:h-[70px] lg:w-[70px]"
                src={SellerProfile}
                alt="seller profile"
              />
            </div>
            <div>
              <h6 className="text-xs font-medium text-gray-6 lg:text-sm">
                Al-Amin Gallery
              </h6>
              <div className="inline-flex items-center gap-2">
                <Image src={Ellipse} alt="time" />
                <span className="text-[8px] text-gray-5 lg:text-[10px]">
                  Active 6 Hours ago
                </span>
              </div>
              <Chat />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[10px] text-[10px] lg:w-[50%] lg:pr-[57px] lg:text-xs">
        <div className="flex items-center justify-between">
          <span>Seller Rating: </span>{' '}
          <span className="text-sm font-medium text-gray-7 lg:text-base">
            95%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Ship on Time: </span>{' '}
          <span className="text-sm font-medium text-gray-7 lg:text-base">
            90%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Response Rate: </span>{' '}
          <span className="text-sm font-medium text-gray-7 lg:text-base">
            85%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
