import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{question}</span>
        <svg
          className="faq-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p dangerouslySetInnerHTML={{ __html: answer }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
