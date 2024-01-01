import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import Message from '@/assets/icons/message.svg';
// eslint-disable-next-line import/no-unresolved
import SellerProfile from '@/assets/images/seller/seller-profile.png';
// eslint-disable-next-line import/no-unresolved
import Time from '@/assets/icons/time.svg';

const SellerInfo = () => {
  return (
    <div className="flex items-center gap-[57px]">
      <div className="flex gap-[15px]">
        <div>
          <Image
            className="h-[70px] w-[70px] rounded-full"
            src={SellerProfile}
            alt="seller profile"
          />
        </div>
        <div>
          <h6 className="font-medium text-gray-6">Al-Amin Gallery</h6>
          <div className="inline-flex items-center gap-2">
            <Image src={Time} alt="time" />
            <span className="text-[10px] text-gray-5">Active 6 Hours ago</span>
          </div>
          <div className="text-sea-green flex items-center gap-[15px] font-medium">
            <Link href="/">Visit Store</Link>
            <Link href="/" className="flex items-center gap-1">
              <Image src={Message} alt="message" />
              Chat
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-[10px] text-xs">
        <p>
          <span>Seller Rating: </span>{' '}
          <span className="text-base font-medium text-gray-7">95%</span>
        </p>
        <p>
          <span>Ship on Time: </span>{' '}
          <span className="text-base font-medium text-gray-7">90%</span>
        </p>
        <p>
          <span>Response Rate: </span>{' '}
          <span className="text-base font-medium text-gray-7">85%</span>
        </p>
      </div>
    </div>
  );
};

export default SellerInfo;
