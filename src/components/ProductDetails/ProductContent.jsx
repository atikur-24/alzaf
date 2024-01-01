import { Rating, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import BuyButton from '../Buttons/BuyButton';
import CartButton from '../Buttons/CartButton';
import OfferAds from '../OfferAds/OfferAds';

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: '#FCD34D',
  inactiveFillColor: '#DEE1E6',
};

const ProductContent = () => {
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const colors = [
    '#FFE91F',
    '#79CAAD',
    '#FF8E40',
    '#1F93FF',
    '#E01FFF',
    '#FF1F1F',
  ];

  return (
    <div className="relative text-gray-4">
      <h3 className="text-sm text-gray-7 lg:text-xl lg:leading-7">
        Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks Ear
        buds Soft Massage Pillow for Sleeping in Bus Car Plane
      </h3>
      {/* product rating & number of sold */}
      <div className="flex items-center justify-between pb-3 pt-2 lg:pt-3">
        <div className="flex gap-[8px] text-gray-6 lg:gap-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-normal lg:text-base lg:font-medium">
              4.7
            </span>
            <Rating
              style={{ maxWidth: 75 }}
              value={5}
              readOnly
              itemStyles={customStyles}
            />
          </div>
          <span className="text-gray-5">|</span>
          <span className="space-x-1">
            <span className="text-xs font-normal lg:text-base lg:font-medium">
              24
            </span>
            <span className="text-xs text-gray-5 lg:text-sm">Ratings</span>
          </span>
          <span className="text-gray-5">|</span>
          <span className="space-x-1">
            <span className="text-xs font-normal lg:text-base lg:font-medium">
              2.5K
            </span>
            <span className="text-xs text-gray-5 lg:text-sm">Solid</span>
          </span>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full bg-gray-2 p-2">
            <FaRegHeart className="text-gray-5" />
          </div>
          <div className="rounded-full bg-gray-2 p-2">
            <IoShareSocialOutline className="text-gray-5" />
          </div>
          <p className="pl-8 text-xs lg:text-sm">Report</p>
        </div>
      </div>
      {/* product price & discount */}
      <div className="flex items-center pb-[10px]">
        <p className="flex items-center space-x-[10px] pr-[14px]">
          <span className="text-base font-semibold text-primary lg:text-[32px] lg:text-xl">
            ৳ 1,990/-
          </span>
          <span className="text-sm text-[#737373] line-through lg:text-base">
            ৳ 2999
          </span>
        </p>
        <p className="rounded-[1px] bg-primary px-1 py-[2px] text-[9px] font-normal text-white lg:text-xs lg:font-medium">
          - 34% % OFF
        </p>
      </div>
      {/* product brand, size and color */}
      <div className="space-y-3 text-xs lg:space-y-5 lg:text-sm">
        <p>
          Brand:{' '}
          <span className="text-sm font-normal text-gray-6 lg:font-medium">
            No brand
          </span>
        </p>
        <div className="flex items-center gap-8 lg:gap-2">
          <div className="flex items-center gap-1">
            <span>Size:</span>
            <div className="flex gap-[6px] font-normal lg:gap-1 lg:font-medium">
              {sizes?.map((size, idx) => (
                <span
                  key={idx}
                  className={`rounded-sm px-[7px] py-1 font-normal lg:font-medium ${
                    idx === sizes.length - 1
                      ? 'bg-primary text-white'
                      : 'bg-gray-1 text-primary'
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <div className="rounded-full bg-gray-2 p-2">
              <FaRegHeart className="text-gray-5" />
            </div>
            <div className="rounded-full bg-gray-2 p-2">
              <IoShareSocialOutline className="text-gray-5" />
            </div>
            <p className="text-xs lg:text-sm">Report</p>
          </div>
        </div>
        <div>
          <p className="pb-[10px]">
            Color:{' '}
            <span className="font-normal text-gray-6 lg:font-medium">
              Black
            </span>
          </p>
          <div className="flex items-center gap-[5px]">
            {colors?.map((color) => (
              <div
                key={color}
                className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]"
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-8 w-8 rounded-[1px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* product sku no */}
      <div className="pb-[20px] pt-[34px] text-xs lg:text-sm">
        Sku:
        <span className="text-sm font-normal text-gray-6 lg:font-medium">
          hdgfhdgf6756dsghgf7
        </span>
      </div>
      {/* product available quantity */}
      <div className="flex items-center gap-3 text-xs lg:text-sm">
        <p>Quantity:</p>
        <div className="flex items-center gap-3 rounded-sm bg-[#F7F7F7] p-[7px]">
          <button
            type="button"
            className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-white text-gray-5"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-xs text-gray-6">01</span>
          <button
            type="button"
            className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-white text-gray-6"
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p className="text-[10px] font-normal text-primary lg:text-xs lg:font-medium">
          Only 46 pieces available
        </p>
      </div>
      {/* buy and cart button */}
      <div className="hidden items-center gap-[15px] pt-[41px] lg:flex">
        <BuyButton />
        <CartButton />
      </div>
      <OfferAds />
    </div>
  );
};

export default ProductContent;
