import { useEffect } from "react";
import type { FC } from "react";
import type { BlogPostPageProps, BlogPostSection, Page } from "../types";
import { BLOG_POSTS } from "../data";
import FarmLandscape from "../components/FarmLandscape";

const BlogPostPage: FC<BlogPostPageProps> = ({ post, onBack, setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  const go = (p: Page): void => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const postIndex: number = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "80px" }}>

      {/* ── HERO BANNER ── */}
      <div
        style={{
          height: 420,
          position: "relative",
          overflow: "hidden",
          background: post.color,
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.7 }}>
          <FarmLandscape seed={post.id + 20} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(30,12,3,0.2) 0%, rgba(30,12,3,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "3rem",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <button
            onClick={onBack}
            style={{
              position: "absolute",
              top: "2rem",
              left: "3rem",
              background: "rgba(247,241,227,0.15)",
              border: "1px solid rgba(247,241,227,0.3)",
              color: "rgba(253,246,227,0.85)",
              borderRadius: 6,
              padding: "0.45rem 1rem",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            ← Back to Insights
          </button>

          <span
            style={{
              display: "inline-block",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--straw)",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            {post.tag}
          </span>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#fdf6e3",
              lineHeight: 1.15,
              textShadow: "0 2px 20px rgba(30,12,3,0.5)",
              maxWidth: 700,
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── META BAR ── */}
      <div
        style={{
          background: "var(--soil)",
          padding: "1rem 3rem",
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["By", post.author],
            ["Published", post.date],
            ["Read time", post.readTime],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(232,201,122,0.45)",
                  fontWeight: 600,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(232,201,122,0.75)",
                  fontWeight: 300,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "4rem 3rem 2rem",
        }}
      >
        {/* Lead excerpt */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--bark)",
            lineHeight: 1.7,
            borderLeft: "3px solid var(--wheat)",
            paddingLeft: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {post.excerpt}
        </p>

        {/* Sections */}
        {post.sections.map((section: BlogPostSection, i: number) => (
          <div key={i} style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "var(--soil)",
                marginBottom: "1rem",
                lineHeight: 1.25,
              }}
            >
              {section.heading}
            </h2>
            {section.body.split("\n\n").map((para: string, j: number) => (
              <p
                key={j}
                style={{
                  fontSize: "1rem",
                  color: "var(--bark)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  marginBottom: "1.25rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(46,28,12,0.1)",
            margin: "3rem 0",
          }}
        />

        {/* CTA Card */}
        <div
          style={{
            background: "var(--soil)",
            borderRadius: 10,
            padding: "2.5rem",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(232,201,122,0.55)",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Ready to take the next step?
          </p>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "var(--cream)",
              marginBottom: "0.75rem",
            }}
          >
            Get a free evaluation of your land.
          </h3>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(247,241,227,0.5)",
              lineHeight: 1.7,
              maxWidth: 440,
              margin: "0 auto 1.75rem",
              fontWeight: 300,
            }}
          >
            No obligation, no cost. A Brownstone specialist will assess your farmland
            or mineral rights and walk you through your options.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => go("eval")}>
              Get Free Evaluation
            </button>
            <button className="btn btn-outline-light" onClick={() => go("refer")}>
              Refer Someone
            </button>
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      {(prevPost || nextPost) && (
        <div
          style={{
            background: "#f0e8d4",
            borderTop: "1px solid rgba(46,28,12,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              padding: "3rem",
              display: "grid",
              gridTemplateColumns: prevPost && nextPost ? "1fr 1fr" : "1fr",
              gap: "1.5rem",
            }}
          >
            {prevPost && (
              <button
                onClick={() => { /* parent will handle via selectedPost state */ onBack(); }}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(46,28,12,0.08)",
                  borderRadius: 8,
                  padding: "1.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  fontFamily: "inherit",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--stone)",
                    marginBottom: "0.5rem",
                  }}
                >
                  ← Previous
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--soil)",
                    lineHeight: 1.35,
                    display: "block",
                  }}
                >
                  {prevPost.title}
                </span>
              </button>
            )}
            {nextPost && (
              <button
                onClick={() => { onBack(); }}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(46,28,12,0.08)",
                  borderRadius: 8,
                  padding: "1.5rem",
                  cursor: "pointer",
                  textAlign: "right",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  fontFamily: "inherit",
                  marginLeft: prevPost ? "auto" : undefined,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--stone)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Next →
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--soil)",
                    lineHeight: 1.35,
                    display: "block",
                  }}
                >
                  {nextPost.title}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
