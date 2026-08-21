import Button from './Button';

interface Props {
  downloadHref?: string;
  docsHref?: string;
  changelogHref?: string;
}

export default function HeroCTAs({
  downloadHref = '/install/',
  docsHref = '#docs',
  changelogHref = '/changelog/',
}: Props) {
  return (
    <div className="hero-cta">
      <Button variant="primary" href={downloadHref}>
        Download for Windows
      </Button>
      <Button variant="secondary" href={docsHref}>
        Read the docs
      </Button>
      <a className="hero-changelog-link" href={changelogHref}>
        See what's new
      </a>
    </div>
  );
}
