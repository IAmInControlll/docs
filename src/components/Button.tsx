interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  onClick,
}: Props) {
  const cls = `btn btn-${variant} ${className}`.trim();
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
