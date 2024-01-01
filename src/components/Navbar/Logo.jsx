import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/alzaf.svg';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="alzaf logo" />
    </Link>
  );
};

export default Logo;
