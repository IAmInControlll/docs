import { useState } from 'react';
import FAQItem from './FAQItem';
import type { FAQGroup } from '../config/home';

interface Props {
  groups: FAQGroup[];
  supportHref?: string;
}

export default function FAQAccordion({ groups, supportHref = '/support/' }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpen((cur) => (cur === key ? null : key));
  };

  return (
    <div className="faq">
      {groups.map((group) => (
        <div className="faq-group" key={group.title}>
          <h3>{group.title}</h3>
          {group.items.map((item) => {
            const key = `${group.title}-${item.question}`;
            return (
              <FAQItem
                key={key}
                question={item.question}
                answer={item.answer}
                isOpen={open === key}
                onToggle={() => toggle(key)}
              />
            );
          })}
        </div>
      ))}
      <p style={{ marginTop: '16px' }}>
        <a href={supportHref}>Full support page</a>
      </p>
    </div>
  );
}
