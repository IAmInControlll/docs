import { motion, useReducedMotion } from 'motion/react';
import AlcoveTaglineLockup from './AlcoveTaglineLockup';
import HeroCTAs from './HeroCTAs';

export default function Hero() {
  const reduce = useReducedMotion();

  const lockupProps = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 1.02 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, ease: 'easeOut' as const },
      };

  const headlineProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.15 },
      };

  const ctaProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.3 },
      };

  return (
    <div className="hero">
      <div className="hero-flourish" aria-hidden="true" />
      <motion.div {...lockupProps}>
        <AlcoveTaglineLockup variant="horizontal" className="hero-lockup" />
      </motion.div>
      <motion.p className="hero-headline" {...headlineProps}>
        Clear the clutter. Keep what matters close.
      </motion.p>
      <motion.div {...ctaProps}>
        <HeroCTAs />
      </motion.div>
    </div>
  );
}
