import { webLightTheme } from '@fluentui/react-components';

export const customLightTheme = {
  ...webLightTheme,
  pink: '#edbbe7',
  pink_100: '#c239b3',
  pink_200: '#af33a1',
  pink_300: '#6d2064',
  slate: '#4A4A68',
  light_slate: '#8c8ca1',
  dorian: '#ECF1f4',
  cloud: '#F1FcF3',
  primary: '#4b4ded',
  onyx: '#0e0e2c',
};

export type LightThemeRecord = typeof customLightTheme;
