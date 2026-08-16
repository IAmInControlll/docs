import AlcoveGlyph from './AlcoveGlyph';
import AlcoveWordmark from './AlcoveWordmark';

interface Props {
  className?: string;
  glyphSize?: number;
}

export default function AlcoveLockup({ className = 'brand', glyphSize = 28 }: Props) {
  return (
    <span className={className}>
      <AlcoveGlyph size={glyphSize} />
      <AlcoveWordmark />
    </span>
  );
}
