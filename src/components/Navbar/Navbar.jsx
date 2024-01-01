import CartGroup from './CartGroup';
import Logo from './Logo';
import Search from './Search';
import ServiceButton from './ServiceButton';
import TopBar from './TopBar';

const Navbar = () => {
  return (
    <header className="hidden lg:block">
      <TopBar />
      <div className="bg-white">
        <div className="container-alzaf">
          <div className="flex items-center gap-8">
            <Logo />
            <Search />
            <CartGroup />
            <ServiceButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
