export interface NavItem {
  title: string;
  url: string;
}

export const nav: NavItem[] = [
  { title: 'Home', url: '/' },
  { title: 'Privacy', url: '/privacy/' },
  { title: 'Terms', url: '/terms/' },
  { title: 'Support', url: '/support/' },
];
