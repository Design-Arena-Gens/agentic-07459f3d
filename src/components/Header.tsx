'use client';

import Link from 'next/link';
import { useState } from 'react';

import { navigationLinks } from '@/lib/content';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="#overview" className="header__brand" aria-label="Project Meridian home">
          <span className="header__logo">◆</span>
          <span className="header__title">Project Meridian</span>
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          <ul>
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Link className="button header__cta" href="#contact" data-variant="primary">
            Request access
          </Link>
          <button
            className="header__menu"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`header__mobile ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <ul>
          {navigationLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="button" href="#contact" onClick={() => setIsMenuOpen(false)}>
          Request access
        </Link>
      </nav>
    </header>
  );
}
