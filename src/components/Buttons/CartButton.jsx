import { IoCartOutline } from 'react-icons/io5';

const CartButton = () => {
  return (
    <button type="button" className="cart-btn">
      <IoCartOutline /> <span>Add to Cart</span>
    </button>
  );
};

export default CartButton;
