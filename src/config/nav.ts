export interface NavItem {
  title: string;
  url: string;
}

export const nav: NavItem[] = [
  { title: 'Home', url: '/' },
  { title: 'Changelog', url: '/changelog/' },
  { title: 'Privacy', url: '/privacy/' },
  { title: 'Terms', url: '/terms/' },
  { title: 'Support', url: '/support/' },
];
