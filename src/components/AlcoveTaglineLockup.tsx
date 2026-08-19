import { useState, useEffect } from 'react';
import lockupHorizontalDark from '../assets/brand/lockup-horizontal-tagline-dark.svg?url';
import lockupHorizontalLight from '../assets/brand/lockup-horizontal-tagline-light.svg?url';
import lockupStackedDark from '../assets/brand/lockup-stacked-dark.svg?url';
import lockupStackedLight from '../assets/brand/lockup-stacked-light.svg?url';
import marketingDark from '../assets/brand/marketing-lockup-dark.svg?url';
import marketingLight from '../assets/brand/marketing-lockup-light.svg?url';

interface Props {
  variant: 'horizontal' | 'stacked' | 'marketing';
  className?: string;
  alt?: string;
}

function pick(variant: Props['variant']) {
  switch (variant) {
    case 'stacked':
      return { dark: lockupStackedDark, light: lockupStackedLight };
    case 'marketing':
      return { dark: marketingDark, light: marketingLight };
    default:
      return { dark: lockupHorizontalDark, light: lockupHorizontalLight };
  }
}

export default function AlcoveTaglineLockup({
  variant,
  className,
  alt = 'Alcove - Your space inside Windows.',
}: Props) {
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
    observer.observe(root, { attributeFilter: ['data-theme'] });
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', update);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
    };
  }, []);

  const urls = pick(variant);
  const src = isDark ? urls.dark : urls.light;

  return <img className={className} src={src} alt={alt} />;
}
