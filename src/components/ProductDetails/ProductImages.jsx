import Image from 'next/image';
import back from '../../assets/icons/back.png';
import cart from '../../assets/icons/cart.png';
import RightAngle from '../../assets/icons/left-angle.svg';
import menu from '../../assets/icons/menu.png';
import LeftAngle from '../../assets/icons/right-angle.svg';
import search from '../../assets/icons/search.png';
import VideoIcon from '../../assets/icons/video.svg';
import Watch1 from '../../assets/images/products/watch-1.png';
import Watch2 from '../../assets/images/products/watch-2.png';
import Watch3 from '../../assets/images/products/watch-3.png';
import Watch4 from '../../assets/images/products/watch-4.png';
import Watch5 from '../../assets/images/products/watch-5.png';

const ProductImages = () => {
  const watches = [Watch1, Watch2, Watch3, Watch4, Watch5];

  return (
    <div className="relative">
      <Image className="rounded-sm" src={Watch3} alt="watch" />
      <div className="absolute top-0 lg:hidden">
        <div className="absolute left-8 top-[8px] z-10 flex items-center justify-center gap-2">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#00000073]">
            <Image src={back} alt="back" />
          </div>
          <div className="relative flex items-center">
            <Image className="absolute left-2" src={search} alt="search" />
            <input
              style={{ borderRadius: '45px' }}
              type="text"
              className="  placeholder-text h-[28px] w-[229px] border-none bg-[#00000073] pl-6 text-white placeholder-white outline-none"
              placeholder="Search product"
            />
          </div>
          <div className="relative flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#00000073]">
            <div className="absolute right-0 top-[-2px] h-[14px] w-[14px] rounded-full bg-[#00000073] text-center text-[6px] font-medium text-white">
              20
            </div>
            <Image src={cart} alt="cart" />
          </div>
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#00000073]">
            <Image src={menu} alt="menu" />
          </div>
        </div>
        <div className="absolute left-48 top-[360px] z-10 h-[16px] w-[24px] rounded-sm bg-[#00000073] text-center  text-[12px] text-white">
          1/9
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="relative mt-[10px] flex w-full gap-[5px]">
          {watches?.map((watch, idx) => (
            <Image
              height={87}
              width={87}
              key={watch.src}
              className={`rounded-[1px] ${
                idx === watches.length - 3
                  ? 'border border-primary'
                  : 'border-none'
              }`}
              src={watch}
              alt="watch"
            />
          ))}
          <div className="absolute bottom-7 left-0 bg-[#2E2E2E6B] px-[2px] py-[6px]">
            <Image className="" src={LeftAngle} alt="left angle" />
          </div>
          <div className="absolute bottom-7 right-[1px] bg-[#2E2E2E6B] px-[2px] py-[6px]">
            <Image className="" src={RightAngle} alt="right angle" />
          </div>
          <Image
            className="absolute bottom-0"
            src={VideoIcon}
            alt="left angle"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
