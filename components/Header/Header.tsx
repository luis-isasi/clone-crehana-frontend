import Link from 'next/link';
import { useRouter } from 'next/router';

import Categories from './components/Categories';
import Search from './components/Search';
import LinkToBussines from './components/buttons/LinkToBussines';
import LinkToLogin from './components/buttons/LinkToLogin';
import LinkToPremium from './components/buttons/LinkToPremium';
import LinkToRegister from './components/buttons/LinkToRegister';
import { route } from 'next/dist/next-server/server/router';

const Header: React.FC = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <header className="bg-primary text-white font-semibold shadow-lg h-18 ">
      <div className="bg-primary box-border sm:bg-red-500 md:bg-yellow-500 lg:bg-primary lg:px-16 xl:bg-primary xl:px-0 container h-full mx-auto lg:max-w-screen-xl flex items-center ">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <h1 className="font-bold text-3xl hover:cursor-pointer ">
                crehana
              </h1>
            </a>
          </Link>
          {router.pathname === ('/login' || '/register') ? null : (
            <>
              <Categories />
              <div className="border-l border-gray-600 h-9"></div>
            </>
          )}
        </div>
        {router.pathname === ('/login' || '/register') ? null : (
          <>
            <Search />
            <div className="flex items-center text-sm ">
              <LinkToBussines />
              <LinkToPremium />
              <div className="border-l border-gray-600 h-9 mx-4"></div>
              <LinkToLogin />
              <LinkToRegister />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
