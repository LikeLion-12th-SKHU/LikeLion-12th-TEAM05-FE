import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div className="dark:bg-red-100">MainPage</div>,
});
