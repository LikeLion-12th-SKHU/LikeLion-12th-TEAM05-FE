import { Navbar } from 'flowbite-react';
import { Link } from '@tanstack/react-router';

import { ThemeChangeButton } from '@/_components/themeChangeButton';

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-primary text-white-200 text-lg">
      <Navbar.Brand href="https://flowbite-react.com"></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="#">사용법</Link>
          <Link href="/signin">로그인</Link>
        </div>
        <ThemeChangeButton />
      </Navbar.Collapse>
    </Navbar>
  );
};
