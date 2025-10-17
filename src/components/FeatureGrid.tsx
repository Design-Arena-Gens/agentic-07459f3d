import { featureHighlights } from '@/lib/content';

export function FeatureGrid() {
  return (
    <section className="container features">
      <div className="features__header">
        <h2 className="section-title">An operating system for the entire lifecycle</h2>
        <p className="section-subtitle">
          Project Meridian connects strategy, execution, and experience workflows so every decision is informed by live
          context. These foundational capabilities ensure teams maintain velocity without sacrificing alignment.
        </p>
      </div>

      <div className="features__grid">
        {featureHighlights.map((feature) => (
          <article key={feature.title} className="card features__card">
            <span className="icon-circle" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a className="features__learn-more" href="#contact">
              Learn more
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
