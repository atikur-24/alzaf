import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Ads from '@/assets/images/ads/ads.png';

const OfferAds = () => {
  return (
    <div className="absolute bottom-0 right-0 hidden lg:block">
      <Image src={Ads} alt="offer ads" />
    </div>
  );
};

export default OfferAds;
