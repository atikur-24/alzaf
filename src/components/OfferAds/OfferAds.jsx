import Image from 'next/image';
import Ads from '../../assets/images/ads/ads.png';

const OfferAds = () => {
  return (
    <div className="absolute bottom-0 right-0 hidden lg:block">
      <Image className="rounded-sm" src={Ads} alt="offer ads" />
    </div>
  );
};

export default OfferAds;
