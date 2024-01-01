import Image from 'next/image';
import RightAngle from '../../assets/icons/left-angle.svg';
import LeftAngle from '../../assets/icons/right-angle.svg';
import VideoIcon from '../../assets/icons/video.svg';
import Watch1 from '../../assets/images/products/watch-1.png';
import Watch2 from '../../assets/images/products/watch-2.png';
import Watch3 from '../../assets/images/products/watch-3.png';
import Watch4 from '../../assets/images/products/watch-4.png';
import Watch5 from '../../assets/images/products/watch-5.png';

const ProductImages = () => {
  const watches = [Watch1, Watch2, Watch3, Watch4, Watch5];

  return (
    <div>
      <Image className="rounded-sm" src={Watch3} alt="watch" />
      <div className="hidden lg:block">
        <div className="relative mt-[10px] flex w-full gap-[5px]">
          {watches.map((watch) => (
            <Image
              height={87}
              width={87}
              key={watch.src}
              className="rounded-[1px]"
              src={watch}
              alt="watch"
            />
          ))}
          <div className="absolute bottom-8 left-0 bg-[#2E2E2E6B] px-[2px] py-[6px]">
            <Image className="" src={LeftAngle} alt="left angle" />
          </div>
          <div className="absolute bottom-8 right-[1px] bg-[#2E2E2E6B] px-[2px] py-[6px]">
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
