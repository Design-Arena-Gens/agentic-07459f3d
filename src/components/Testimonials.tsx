import { testimonials } from '@/lib/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="container testimonials">
      <div className="testimonials__header">
        <h2 className="section-title">Leaders pioneering the next horizon</h2>
        <p className="section-subtitle">
          Forward-thinking teams leverage Meridian to navigate complexity with calm confidence. Here&apos;s how they describe
          the shift.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="testimonials__card card">
            <div className="testimonials__avatar" style={{ background: testimonial.avatarColor }}>
              {testimonial.name
                .split(' ')
                .map((segment) => segment[0])
                .join('')}
            </div>
            <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
