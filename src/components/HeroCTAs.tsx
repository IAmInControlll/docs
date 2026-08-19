import Button from './Button';

interface Props {
  downloadHref?: string;
  docsHref?: string;
}

export default function HeroCTAs({ downloadHref = '/install/', docsHref = '#docs' }: Props) {
  return (
    <div className="hero-cta">
      <Button variant="primary" href={downloadHref}>
        Download for Windows
      </Button>
      <Button variant="secondary" href={docsHref}>
        Read the docs
      </Button>
    </div>
  );
}
