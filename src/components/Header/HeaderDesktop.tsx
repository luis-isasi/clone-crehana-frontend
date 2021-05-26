import { memo } from 'react';
import Link from '@Components/Links/Link';
import { useRouter } from 'next/router';

import { useContextUser } from '@Context/contextUser';
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

const HeaderDesktop: React.FC = () => {
  const { user } = useContextUser();
  const router = useRouter();

  const isLoginOrRegister =
    router.pathname === '/login' || router.pathname === '/register';

  return (
    <div className="container h-full mx-auto box-border lg:px-14 xl:px-6 lg:max-w-screen-xl 2xl:max-w-9xl flex items-center">
      <div className="flex items-center">
        <Link
          text="crehana"
          href="/"
          className={`font-bold text-3xl hover:cursor-pointer ${
            isLoginOrRegister ? 'text-white' : 'text-primary-main'
          }  dark:text-white`}
        />
        {isLoginOrRegister ? null : (
          <>
            <Categories />
            <div className="border-l border-gray-200 dark:border-gray-600 h-9 mx-3 lg:mx-1 xl:mx-3" />
          </>
        )}
      </div>
      {isLoginOrRegister ? null : (
        <>
          <Search />
          {user && <Community />}
          <div className="flex items-center text-sm">
            <LinkToBusiness />
            <LinkToPremium />
            <div className="border-l border-gray-200 dark:border-gray-600 h-9 mx-3 lg:mx-1 xl:mx-3" />
            {user === null && (
              <>
                <LinkToLogin />
                <LinkToRegister />
              </>
            )}
            {user && (
              <div className="flex items-center">
                <MyCourses />
                <DesiredCourses />
                <ShoppingCar />
                <Notification />
                <Avatar />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(HeaderDesktop);
