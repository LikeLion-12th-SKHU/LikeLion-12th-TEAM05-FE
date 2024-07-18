import { ThemeContext } from '@/_context/themeContext';
import { Button } from '@/_components';
import { useContext } from 'react';

export const ThemeChangeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>토글</Button>;
};
