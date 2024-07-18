import { Navbar } from 'flowbite-react';
import { Link } from '@tanstack/react-router';

import { ThemeChangeButton } from '@/_components/themeChangeButton';

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-primary">
      <Navbar.Brand
        href="https://flowbite-react.com"
        className="flex items-center"
      >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>

      <div className="flex gap-[10px]">
        <Link href="#" className="text-white-200 flex items-center">
          Home
        </Link>
        <Link href="#" className="text-white-200 flex items-center">
          About
        </Link>
        <ThemeChangeButton />
      </div>
    </Navbar>
  );
};
