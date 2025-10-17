import { metrics } from '@/lib/content';

export function Hero() {
  return (
    <section id="overview" className="hero container">
      <div className="hero__content">
        <span className="badge">Introducing the Meridian operating system</span>
        <h1>
          Shape future-ready experiences with{' '}
          <span className="hero__gradient">adaptive clarity</span> and measurable outcomes.
        </h1>
        <p>
          Project Meridian is a visionary platform concept designed to help ambitious teams orchestrate strategy,
          delivery, and customer experience from a single source of truth. Bring every initiative into focus and let
          intelligence accelerate your momentum.
        </p>

        <div className="hero__actions">
          <a className="button" href="#solutions">
            Explore the platform
          </a>
          <a className="button muted-button" href="#updates">
            View recent updates
          </a>
        </div>

        <dl className="hero__metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="hero__metric">
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__orb floating" />
        <div className="hero__panel glass">
          <div className="hero__panel-grid">
            <div>
              <p className="pill">Adaptive Roadmap</p>
              <h3>Outcomes for Launch Horizon</h3>
              <ul>
                <li>
                  <span>✓</span>
                  <div>
                    <strong>Increase adoption by 40%</strong>
                    <small>Experiment set: activation checklist, guided onboarding.</small>
                  </div>
                </li>
                <li>
                  <span>✓</span>
                  <div>
                    <strong>Reduce delivery risk by 28%</strong>
                    <small>Dependency map synchronized across delivery squads.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p className="pill">Experience Heatmap</p>
              <h3>Voice of the customer</h3>
              <div className="hero__heatmap">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span key={index} style={{ opacity: 0.35 + (index % 5) * 0.12 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
