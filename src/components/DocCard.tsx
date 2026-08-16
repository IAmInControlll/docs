interface Props {
  title: string;
  description: string;
  href: string;
}

export default function DocCard({ title, description, href }: Props) {
  return (
    <a className="card" href={href}>
      <strong>{title}</strong>
      <span>{description}</span>
    </a>
  );
}
