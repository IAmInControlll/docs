import { motion, useReducedMotion } from 'motion/react';
import ArchMotif from './ArchMotif';
import SectionHeading from './SectionHeading';
import type { NarrativeSection as Section } from '../config/home';

interface Props {
  section: Section;
}

export default function NarrativeSection({ section }: Props) {
  const reduce = useReducedMotion();

  const revealProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.6, ease: 'easeOut' as const },
      };

  const motifClass = section.motifSide === 'left' ? 'motif-left' : 'motif-right';

  return (
    <motion.section className="narrative" {...revealProps}>
      <div className={`narrative-inner ${motifClass}`}>
        {section.motifSide === 'left' && (
          <figure className="motif">
            <ArchMotif size={140} />
          </figure>
        )}
        <div>
          <SectionHeading id={section.id}>{section.heading}</SectionHeading>
          {section.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        {section.motifSide === 'right' && (
          <figure className="motif">
            <ArchMotif size={140} />
          </figure>
        )}
      </div>
    </motion.section>
  );
}
