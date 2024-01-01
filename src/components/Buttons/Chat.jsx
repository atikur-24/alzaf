import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import Message from '@/assets/icons/message.svg';

const Chat = () => {
  return (
    <div className="flex items-center gap-[15px] pt-[15px] text-start text-xs font-medium text-sea-green lg:text-sm">
      <Link href="/">Visit Store</Link>
      <Link href="/" className="flex items-center gap-1">
        <Image src={Message} alt="message" />
        Chat
      </Link>
    </div>
  );
};

export default Chat;
