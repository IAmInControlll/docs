import { useState, useEffect } from 'react';
import wordmarkDarkUrl from '../assets/brand/wordmark-dark.svg?url';
import wordmarkLightUrl from '../assets/brand/wordmark-light.svg?url';

interface Props {
  className?: string;
  alt?: string;
}

export default function AlcoveWordmark({ className = 'wordmark', alt = 'Alcove' }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const attr = root.getAttribute('data-theme');
      if (attr === 'dark') setIsDark(true);
      else if (attr === 'light') setIsDark(false);
      else setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: { attributeFilter: ['data-theme'] } });
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', update);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
    };
  }, []);

  return (
    <img
      className={className}
      src={isDark ? wordmarkLightUrl : wordmarkDarkUrl}
      alt={alt}
    />
  );
}
