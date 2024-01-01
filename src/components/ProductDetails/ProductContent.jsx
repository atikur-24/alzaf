import { Rating, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import BuyButton from '../Buttons/BuyButton';
import CartButton from '../Buttons/CartButton';

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: '#FCD34D',
  inactiveFillColor: '#DEE1E6',
};

const ProductContent = () => {
  return (
    <div className="text-gray-4">
      <h3 className="text-lg leading-7 text-gray-7 lg:text-xl">
        Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks Ear
        buds Soft Massage Pillow for Sleeping in Bus Car Plane
      </h3>
      {/* product rating and number of sold */}
      <div className="flex items-center justify-between">
        <div className="flex gap-[10px] text-gray-6">
          <div className="flex gap-[10px]">
            4.7
            <Rating
              style={{ maxWidth: 75 }}
              value={5}
              readOnly
              itemStyles={customStyles}
            />
          </div>
          <span className="text-gray-5">|</span>
          <span>
            24 <span className="text-sm text-gray-5">Ratings</span>
          </span>
          <span className="text-gray-5">|</span>
          <span>
            2.5K <span className="text-sm text-gray-5">Solid</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-2 p-2">
            <FaRegHeart className="text-gray-5" />
          </div>
          <div className="rounded-full bg-gray-2 p-2">
            <IoShareSocialOutline className="text-gray-5" />
          </div>
          <p className="pl-8 text-sm">Report</p>
        </div>
      </div>
      {/* product brand, size and color */}
      <div className="text-sm">
        <p>
          Brand: <span className="text-gray-6">No brand</span>
        </p>
        <div className="flex items-center gap-2">
          <span>Size:</span>
          <div className="flex gap-1 font-medium text-primary">
            <span className="rounded-sm bg-gray-1 p-1">M</span>
            <span className="rounded-sm bg-gray-1 p-1">L</span>
            <span className="rounded-sm bg-gray-1 p-1">XL</span>
            <span className="rounded-sm bg-primary p-1 font-medium text-white">
              XXL
            </span>
          </div>
        </div>
        <div>
          <p>
            Color: <span className="text-gray-6">Black</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]">
              <div className="h-8 w-8 rounded-[1px] bg-[#FFE91F]" />
            </div>
            <div className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]">
              <div className="h-8 w-8 rounded-[1px] bg-[#79CAAD]" />
            </div>
            <div className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]">
              <div className="h-8 w-8 rounded-[1px] bg-[#FF8E40]" />
            </div>
            <div className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]">
              <div className="h-8 w-8 rounded-[1px] bg-[#1F93FF]" />
            </div>
            <div className="rounded-sm border-[0.5px] border-[#DFDFDF] p-[5px]">
              <div className="h-8 w-8 rounded-[1px] bg-[#FF1F1F]" />
            </div>
          </div>
        </div>
      </div>
      {/* product sku no */}
      <p className="text-sm">
        Sku: <span className="text-gray-6">hd6756</span>
      </p>
      {/* product available quantity */}
      <div className="flex items-center gap-3">
        <p>Quantity:</p>
        <div className="rounded-sm bg-[#F7F7F7] p-[7px]">
          <button
            type="button"
            className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-white text-gray-5"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-gray-6">01</span>
          <button
            type="button"
            className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-white text-gray-6"
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p className="text-xs text-primary">Only 46 pieces available</p>
      </div>
      {/* buy and cart button */}
      <div className="flex items-center gap-[15px]">
        <BuyButton />
        <CartButton />
      </div>
    </div>
  );
};

export default ProductContent;
