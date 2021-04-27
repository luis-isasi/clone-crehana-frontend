import Link from 'next/link';
import { useRouter } from 'next/router';

import Categories from './components/Categories';
import Search from './components/SearchIcon';
import LinkToBusiness from './components/buttons/LinkToBusiness';
import LinkToLogin from './components/buttons/LinkToLogin';
import LinkToPremium from './components/buttons/LinkToPremium';
import LinkToRegister from './components/buttons/LinkToRegister';
import MyCourses from './components/MyCourses';
import Avatar from './components/Avatar';
import DesiredCourses from './components/DesiredCourses';
import ShoppingCar from './components/ShoppingCar';
import Community from './components/Community';
import Notification from './components/Notification';

import { useUser } from '@Context/contextUser';

const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="container h-full mx-auto bg-primary-primary box-border  lg:px-14  xl:px-6 lg:max-w-screen-xl 2xl:max-w-9xl flex items-center ">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <h1 className="font-bold text-3xl hover:cursor-pointer ">
              crehana
            </h1>
          </a>
        </Link>
        {router.pathname === '/login' ||
        router.pathname === '/register' ? null : (
          <>
            <Categories />
            <div className="border-l border-gray-600 h-9"></div>
          </>
        )}
      </div>
      {router.pathname === '/login' ||
      router.pathname === '/register' ? null : (
        <>
          <Search />
          {user && <Community />}
          <div className="flex items-center text-sm">
            <LinkToBusiness />
            <LinkToPremium />
            <div className="border-l border-gray-600 h-9 mx-3 lg:mx-1 xl:mx-3"></div>
            {user !== undefined &&
              (user === null ? (
                <>
                  <LinkToLogin />
                  <LinkToRegister />
                </>
              ) : (
                <div className="flex items-center">
                  <MyCourses />
                  <DesiredCourses />
                  <ShoppingCar />
                  <Notification />
                  <Avatar />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
