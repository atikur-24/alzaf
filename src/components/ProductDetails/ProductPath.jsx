import { CgNotes } from 'react-icons/cg';
import { LiaAngleDownSolid, LiaAngleRightSolid } from 'react-icons/lia';

const ProductPath = () => {
  return (
    <div className="my-[14px] hidden items-center gap-[6px] text-xs text-gray-6 lg:flex">
      <span className="flex items-center text-sm font-semibold text-primary">
        <CgNotes /> <span className="px-[3px]">All Categories</span>{' '}
        <LiaAngleDownSolid />
      </span>
      <span className="flex items-center">
        Electronic Devices <LiaAngleRightSolid />
      </span>
      <span className="flex items-center">
        bag and travel <LiaAngleRightSolid />
      </span>
      <span className="flex items-center">
        travel and sports <LiaAngleRightSolid />
      </span>
      <span className="flex items-center">
        bag and travel <LiaAngleRightSolid />
      </span>
      <span className="text-gray-3">
        Valvet Travel Neck Pillow Folding U-Shaped...
      </span>
    </div>
  );
};

export default ProductPath;
