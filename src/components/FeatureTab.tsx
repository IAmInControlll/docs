import Screenshot from './Screenshot';
import type { FeatureTab as FeatureTabData } from '../config/home';

interface Props {
  feature: FeatureTabData;
}

export default function FeatureTab({ feature }: Props) {
  return (
    <div className="showcase-copy">
      <h3>{feature.heading}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

export function FeatureTabVisual({ feature }: Props) {
  return <Screenshot filename={feature.screenshot} alt={feature.alt} />;
}
