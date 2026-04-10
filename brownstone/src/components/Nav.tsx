import { useState, useEffect } from "react";
import type { FC } from "react";
import type { NavProps, Page } from "../types";

const Nav: FC<NavProps> = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handler = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (p: Page): void => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-brand" onClick={() => go("home")}>
        Brown<span>stone</span>
      </div>

      <ul className="nav-links">
        {(["home", "blog"] as Page[]).map((p: Page) => (
          <li key={p}>
            <button
              className={page === p ? "active" : ""}
              onClick={() => go(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          </li>
        ))}

        <li>
          <button
            className={page === "refer" ? "active" : ""}
            onClick={() => go("refer")}
          >
            Refer Someone
          </button>
        </li>

        <li>
          <button
            className={`nav-cta${page === "eval" ? " active" : ""}`}
            onClick={() => go("eval")}
          >
            Free Evaluation
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
