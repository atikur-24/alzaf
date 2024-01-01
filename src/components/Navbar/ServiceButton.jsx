import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import Cloud from '@/assets/icons/cloud-service.png';

const ServiceButton = () => {
  return (
    <Link href="/">
      <Image src={Cloud} alt="cloud service" />
    </Link>
  );
};

export default ServiceButton;
