import { solutionCards } from '@/lib/content';

export function SolutionShowcase() {
  return (
    <section id="solutions" className="container solutions">
      <div className="solutions__intro surface">
        <h2 className="section-title">Craft momentum across every mission</h2>
        <p className="section-subtitle">
          Meridian combines orchestration, insights, and execution tools into dedicated workspaces that guide teams from
          idea to launch without friction.
        </p>
      </div>

      <div className="solutions__grid">
        {solutionCards.map((card) => (
          <article key={card.title} className="solutions__card">
            <div className="solutions__card-accent" style={{ background: card.accent }} aria-hidden="true" />
            <div className="solutions__card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
