import { useStore } from '@nanostores/react';
import { $lang } from '../stores/localizationStore.ts';

import NavbarSearchBar from './header/NavbarSearchBar.tsx';
import NavbarButton from './header/NavbarButton.tsx';

/**
 * Navbar Component
 * @returns {React.JSX.Element}
 */
export default function Header(): React.JSX.Element {
  const hamburgerIcon = '/icon/hamburger-icon.png';

  const { navbar } = useStore($lang);

  const navbarButtons = [
    { id: 1, text: navbar.create, path: '/Create' },
    { id: 2, text: navbar.trends, path: '/Trends' },
    { id: 3, text: navbar.discover, path: '/Discover' },
    { id: 4, text: navbar.wallet, path: '/Wallet' },
  ];

  return (
    <header className="flex justify-center w-screen">
      <div className="flex flex-row justify-evenly flex-wrap items-center pt-3 w-xl">
        <a className="flex justify-center xl:w-1/6 w-full pb-3 xl:pb-0 " href="/">
          <img src="/images/eneftimbu.png" alt={navbar.logo} />
        </a>
        <div className="flex justify-center xl:w-1/2 w-full xl:pb-0 pb-3">
          <NavbarSearchBar text={navbar.search} />
        </div>
        <div className="flex justify-center flex-row xl:w-1/3 w-full items-center">
          <nav className="flex flex-row w-full justify-evenly items-center">
            {navbarButtons.map(({ id, path, text }) => (
              <NavbarButton key={id} path={path} text={text} />
            ))}
            <a href="/" className="flex align-items-center rounded rounded-2 px-3 py-2 h-full">
              <img src={hamburgerIcon} alt="" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
