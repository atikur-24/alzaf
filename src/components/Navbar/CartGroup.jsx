import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const CartGroup = () => {
  return (
    <div className="flex items-center gap-3 text-gray-4">
      <div className="rounded-[10px] bg-gray-2 p-[9px]">
        <FaRegUser className="" />
      </div>
      <div className="rounded-[10px] bg-gray-2 p-[9px]">
        <FaRegHeart className="" />
      </div>
      <div className="rounded-[10px] bg-gray-2 p-[9px]">
        <IoCartOutline className="" />
      </div>
    </div>
  );
};

export default CartGroup;
