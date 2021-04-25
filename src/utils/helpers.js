import { mediaQueries } from '@utils/styled';

export const isBrowser = () => typeof window !== 'undefined';

export const isTouch = () => isBrowser && window.matchMedia(mediaQueries.touch).matches;
