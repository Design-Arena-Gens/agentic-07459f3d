import { changelogItems } from '@/lib/content';

export function Changelog() {
  return (
    <section className="container changelog">
      <div className="changelog__header">
        <h2 className="section-title">Latest updates</h2>
        <p className="section-subtitle">
          A glimpse into the way Project Meridian continually evolves to support teams navigating ambitious journeys.
        </p>
      </div>

      <ul className="changelog__list">
        {changelogItems.map((entry) => (
          <li key={entry.version} className="changelog__item">
            <div>
              <span className="pill">{entry.version}</span>
              <span className="changelog__date">{entry.date}</span>
            </div>
            <p>{entry.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
