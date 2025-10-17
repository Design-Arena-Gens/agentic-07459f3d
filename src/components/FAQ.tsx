import { faqs } from '@/lib/content';

export function FAQ() {
  return (
    <section id="faqs" className="container faq">
      <div className="faq__header">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">
          Have more questions about how Project Meridian could support your organization? Explore the details or reach
          out for a guided tour.
        </p>
      </div>

      <div className="faq__accordion">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq__item" open>
            <summary>
              <span>{faq.question}</span>
              <span aria-hidden="true">﹀</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
