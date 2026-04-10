import type { FC } from "react";
import type { HomePageProps, Page, StatItem, ServiceCard, StepItem } from "../types";
import { STATS, SERVICES, STEPS, STRIP_ITEMS } from "../data";
import FarmLandscape from "../components/FarmLandscape";
import HeroLandscape from "../components/HeroLandscape";

const HomePage: FC<HomePageProps> = ({ setPage }) => {
  const go = (p: Page): void => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <HeroLandscape />
        <div className="hero-vignette" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">Southern Saskatchewan · Western Canada</span>
          <h1 className="hero-title">
            Where land<br />becomes <em>legacy.</em>
          </h1>
          <p className="hero-sub">
            Brownstone Resources acquires farmland and subsurface mineral rights across
            Western Canada — offering landowners immediate liquidity and long-term partnership.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => go("eval")}>
              Get Free Evaluation
            </button>
            <button className="btn btn-outline-light" onClick={() => go("refer")}>
              Refer Someone
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STRIP ── */}
      <div className="strip">
        {STRIP_ITEMS.map((s: string) => (
          <div className="strip-item" key={s}>{s}</div>
        ))}
      </div>

      {/* ── ABOUT ── */}
      <div style={{ background: "var(--cream)" }}>
        <div className="section">
          <div className="about-grid">
            <div style={{ position: "relative" }}>
              <div className="about-image-box">
                <FarmLandscape seed={1} />
              </div>
              <div className="about-badge">
                <span className="about-badge-num">18+</span>
                <span className="about-badge-label">Years in the Field</span>
              </div>
            </div>

            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">A specialized team built for the land.</h2>
              <p className="section-body" style={{ marginBottom: "1.5rem" }}>
                Brownstone Resources Ltd. is a privately held land and mineral rights
                acquisition company based in Southern Saskatchewan. Our firm specializes
                in evaluating, purchasing, and managing farmland and subsurface mineral
                rights across Western Canada.
              </p>
              <p className="section-body" style={{ marginBottom: "2rem" }}>
                We operate with a small, specialized team with deep expertise in geology,
                land appraisal, and deal structuring — enabling efficient evaluation and
                execution of acquisition opportunities that larger institutions simply
                can't match in speed or relationship quality.
              </p>
              <button className="btn btn-outline-dark" onClick={() => go("eval")}>
                Learn About Our Process →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div className="services-bg">
        <div className="services-inner">
          <p className="section-label">What We Do</p>
          <h2 className="section-title" style={{ maxWidth: 500 }}>
            Acquiring assets. Building long-term value.
          </h2>
          <p className="section-body">
            From initial landowner contact to deal structuring and ongoing portfolio
            management, Brownstone handles every step of the acquisition process with
            precision and transparency.
          </p>
          <div className="cards-grid">
            {SERVICES.map((c: ServiceCard) => (
              <div className="card" key={c.n}>
                <div className="card-num">{c.n}</div>
                <h3 className="card-title">{c.t}</h3>
                <p className="card-text">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-bar">
        {STATS.map((s: StatItem) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: "var(--cream)" }}>
        <div className="section">
          <p className="section-label">Our Process</p>
          <h2 className="section-title">From first call to completed acquisition.</h2>
          <p className="section-body">
            We've streamlined our process to respect landowners' time while ensuring
            every deal is evaluated thoroughly and structured fairly.
          </p>
          <div className="how-grid">
            {STEPS.map((s: StepItem) => (
              <div key={s.n}>
                <div className="step-number">{s.n}</div>
                <h4 className="step-title">{s.t}</h4>
                <p className="step-text">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-bg">
        <div className="cta-inner">
          <p className="section-label">Ready to Start?</p>
          <h2 className="section-title">Your land deserves expert attention.</h2>
          <p className="section-body">
            Whether you're ready to sell, curious about value, or know someone who
            might benefit — Brownstone is here to help.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => go("eval")}>
              Get Free Evaluation
            </button>
            <button className="btn btn-outline-light" onClick={() => go("refer")}>
              Refer Someone
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
