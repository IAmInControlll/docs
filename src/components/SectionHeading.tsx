interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionHeading({ id, className = '', children }: Props) {
  return (
    <h2 id={id} className={className}>
      {children}
      {id && (
        <a className="anchor" href={`#${id}`} aria-label="Link to this section">
          #
        </a>
      )}
    </h2>
  );
}
