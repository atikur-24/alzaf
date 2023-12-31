import Link from 'next/link';
import { LiaAngleDownSolid } from 'react-icons/lia';

const TopBar = () => {
  return (
    <nav className="container-alzaf flex justify-between py-1 text-xs text-gray-6">
      <div className="flex gap-8">
        <button type="button" className="inline-flex items-center gap-1">
          <span>Language</span>
          <LiaAngleDownSolid />
        </button>
        <p>Help Center</p>
        <p>Helpline: 0964781656</p>
      </div>
      <div className="flex gap-8">
        <Link href="/">Become a Seller</Link>
        <Link href="/">Order Track</Link>
        <div className="text-primary">
          <Link href="/">Sign up</Link> / <Link href="/">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
