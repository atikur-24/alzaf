import Image from 'next/image';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
// eslint-disable-next-line import/no-unresolved
import SellerProfile from '@/assets/images/seller/seller-profile.png';

const SellerInfo = () => {
  return (
    <div className="flex items-center gap-[57px]">
      <div className="flex gap-[15px]">
        <div>
          <Image
            className="h-[70px] w-[70px] rounded-full"
            src={SellerProfile}
            alt="seller profile"
          />
        </div>
        <div>
          <p className="font-medium text-gray-6">Al-Amin Gallery</p>
          <p className="inline-flex items-center gap-2 text-[10px] text-gray-5">
            <FaCircle className="h-[7px] w-[7px] text-[#D9D9D9]" /> Active 6
            Hours ago
          </p>
          <div className="text-sea-green flex items-center gap-[15px] font-medium">
            <Link href="/">Visit Store</Link>
            <Link href="/" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M3.00426 2.50814C3.32829 2.50002 3.70432 2.50002 4.1482 2.50002H5.18524C6.63723 2.50002 7.36322 2.50002 7.91781 2.78406C8.40564 3.03391 8.80225 3.43258 9.05081 3.92294C9.33339 4.4804 9.33339 5.21016 9.33339 6.66968V8.07634C9.33339 8.22208 9.33339 8.29496 9.33049 8.35654C9.29133 9.18793 8.86662 9.91634 8.2317 10.3655L9.29942 11.1271C9.8215 11.4995 10.5075 10.9617 10.2693 10.3669C10.1005 9.94548 10.4112 9.48711 10.8657 9.48711H11.2167C12.4318 9.48711 13.4169 8.50344 13.4169 7.29002V4.8269C13.4169 3.19567 13.4169 2.38006 13.099 1.75701C12.8193 1.20896 12.3731 0.763389 11.8243 0.484145C11.2004 0.166687 10.3837 0.166687 8.7502 0.166687H7.58354C5.95005 0.166687 5.13331 0.166687 4.5094 0.484145C3.96059 0.763389 3.5144 1.20896 3.23477 1.75701C3.12357 1.97494 3.05127 2.21643 3.00426 2.50814Z"
                  fill="#37A5BF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.50266 4.33887C8.74992 4.83075 8.74992 5.47466 8.74992 6.76247V8.00363C8.74992 8.13223 8.74992 8.19653 8.74738 8.25087C8.69206 9.43534 7.75721 10.3829 6.58868 10.439C6.53507 10.4416 6.4643 10.4416 6.32277 10.4416L6.28645 10.4416C5.82356 10.4446 5.37266 10.5911 4.99427 10.8614L4.97021 10.8787L3.78571 11.7363C3.37965 12.0303 2.84607 11.6058 3.03139 11.1361C3.16267 10.8035 2.92096 10.4416 2.56749 10.4416H2.29447C1.34939 10.4416 0.583252 9.665 0.583252 8.70704V6.76247C0.583252 5.47466 0.583252 4.83075 0.830506 4.33887C1.048 3.9062 1.39504 3.55443 1.82188 3.33398C2.30715 3.08335 2.94239 3.08335 4.21288 3.08335H5.12029C6.39078 3.08335 7.02602 3.08335 7.51129 3.33398C7.93814 3.55443 8.28517 3.9062 8.50266 4.33887ZM2.91659 6.72919C2.67496 6.72919 2.47909 6.92506 2.47909 7.16669C2.47909 7.40831 2.67496 7.60419 2.91659 7.60419H6.41659C6.65821 7.60419 6.85409 7.40831 6.85409 7.16669C6.85409 6.92506 6.65821 6.72919 6.41659 6.72919H2.91659Z"
                  fill="#37A5BF"
                />
              </svg>
              Chat
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-[10px] text-xs">
        <p>
          <span>Seller Rating: </span>{' '}
          <span className="text-base font-medium text-gray-7">95%</span>
        </p>
        <p>
          <span>Ship on Time: </span>{' '}
          <span className="text-base font-medium text-gray-7">90%</span>
        </p>
        <p>
          <span>Response Rate: </span>{' '}
          <span className="text-base font-medium text-gray-7">85%</span>
        </p>
      </div>
    </div>
  );
};

export default SellerInfo;
