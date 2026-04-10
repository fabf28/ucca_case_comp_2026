import type { FC } from "react";
import type { FooterProps, Page } from "../types";

const Footer: FC<FooterProps> = ({ setPage }) => {
  const go = (p: Page): void => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const navLinks: [Page, string][] = [
    ["home", "Home"],
    ["blog", "Insights"],
    ["eval", "Free Evaluation"],
    ["refer", "Refer Someone"],
  ];

  const services: string[] = [
    "Land Acquisition",
    "Mineral Rights",
    "Portfolio Management",
    "Deal Structuring",
    "Geographic Expansion",
  ];

  const contact: string[] = [
    "Southern Saskatchewan",
    "Western Canada Operations",
    "info@brownstoneresources.ca",
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-brand">Brown<span>stone</span></div>
          <p className="footer-tagline">
            Brownstone Resources Ltd. is a privately held land and mineral rights
            acquisition company based in Southern Saskatchewan. We provide immediate
            liquidity to landowners while building long-term value through strategic
            asset ownership across Western Canada.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div className="footer-heading">Navigate</div>
          <ul className="footer-links">
            {navLinks.map(([p, label]: [Page, string]) => (
              <li key={p}>
                <button onClick={() => go(p)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="footer-heading">Services</div>
          <ul className="footer-links">
            {services.map((s: string) => (
              <li key={s}><button>{s}</button></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-heading">Contact</div>
          <ul className="footer-links">
            {contact.map((c: string) => (
              <li key={c}><button>{c}</button></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-legal">
          © 2025 Brownstone Resources Ltd. All rights reserved. Southern Saskatchewan, Canada.
        </span>
        <span className="footer-legal">
          Land & Mineral Rights Acquisition · Western Canada
        </span>
      </div>
    </footer>
  );
};

export default Footer;
