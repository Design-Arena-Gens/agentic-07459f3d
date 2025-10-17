export function Footer() {
  const date = new Date();
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">◆</span>
          <div>
            <strong>Project Meridian</strong>
            <p>Placeholder product vision crafted to inspire your next bold launch.</p>
          </div>
        </div>

        <div className="footer__links">
          <a href="mailto:hello@projectmeridian.ai">hello@projectmeridian.ai</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
        </div>

        <p className="footer__legal">© {date.getFullYear()} Project Meridian. All rights reserved.</p>
      </div>
    </footer>
  );
}
