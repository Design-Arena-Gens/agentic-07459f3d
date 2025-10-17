import { workflowSteps } from '@/lib/content';

export function WorkflowTimeline() {
  return (
    <section id="workflow" className="container workflow">
      <div className="workflow__header">
        <h2 className="section-title">A guided rhythm designed for velocity</h2>
        <p className="section-subtitle">
          Each phase of the Meridian loop is intentionally choreographed so that teams stay grounded in purpose while
          executing with precision. See how the operating system keeps everyone aligned.
        </p>
      </div>

      <ol className="workflow__steps">
        {workflowSteps.map((step, index) => (
          <li key={step.title} className="workflow__step">
            <div className="workflow__step-index" aria-hidden="true">
              <span>{index + 1}</span>
            </div>
            <div className="workflow__step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="pill">Cadence: {step.duration}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
