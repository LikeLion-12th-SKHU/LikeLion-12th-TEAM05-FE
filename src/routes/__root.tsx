import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { NavBar, Button, Input } from '@/_components';
import { DarkThemeToggle } from 'flowbite-react';

export const Route = createRootRoute({
  component: () => (
    <main className="bg-PRIMARY dark:bg-[#0E0E2C] h-auto">
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
