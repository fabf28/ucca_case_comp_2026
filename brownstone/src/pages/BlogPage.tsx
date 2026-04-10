import type { FC } from "react";
import type { BlogPost } from "../types";
import { BLOG_POSTS, BLOG_CARD_COLORS } from "../data";
import FarmLandscape from "../components/FarmLandscape";

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
}

const BlogPage: FC<BlogPageProps> = ({ onSelectPost }) => (
  <>
    {/* ── PAGE HERO ── */}
    <div className="page-hero">
      <p className="section-label" style={{ textAlign: "center" }}>
        Brownstone Insights
      </p>
      <h1 className="section-title" style={{ maxWidth: 600, margin: "0 auto 1rem" }}>
        Land, mineral rights & market intelligence.
      </h1>
      <p className="section-body" style={{ textAlign: "center", margin: "0 auto" }}>
        Expert perspectives on Western Canada's farmland and mineral rights market —
        written for landowners, investors, and anyone navigating the land acquisition
        landscape.
      </p>
    </div>

    {/* ── BLOG GRID ── */}
    <div className="blog-grid">
      {BLOG_POSTS.map((post: BlogPost, i: number) => (
        <article
          className="blog-card"
          key={post.id}
          onClick={() => onSelectPost(post)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onSelectPost(post)}
          aria-label={`Read article: ${post.title}`}
        >
          <div
            className="blog-card-img"
            style={{ background: BLOG_CARD_COLORS[i % BLOG_CARD_COLORS.length] }}
          >
            <FarmLandscape seed={i + 10} />
          </div>

          <div className="blog-card-body">
            <span className="blog-tag">{post.tag}</span>
            <h2 className="blog-card-title">{post.title}</h2>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-meta">
              <span>{post.date} · {post.readTime}</span>
              <span className="read-more">Read article →</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </>
);

export default BlogPage;
