import { useState } from "react";
import type { Page } from "./types";
import type { BlogPost } from "./types";
import { globalStyles } from "./styles/global";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import EvalPage from "./pages/EvalPage";
import ReferPage from "./pages/ReferPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectPost = (post: BlogPost): void => {
    setSelectedPost(post);
    setPage("post");
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = (): void => {
    setSelectedPost(null);
    setPage("blog");
    window.scrollTo(0, 0);
  };

  const handleSetPage = (p: Page): void => {
    if (p !== "post") setSelectedPost(null);
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{globalStyles}</style>

      <Nav page={page} setPage={handleSetPage} />

      <main>
        {page === "home" && (
          <HomePage setPage={handleSetPage} />
        )}

        {page === "blog" && (
          <BlogPage onSelectPost={handleSelectPost} />
        )}

        {page === "post" && selectedPost && (
          <BlogPostPage
            post={selectedPost}
            onBack={handleBackToBlog}
            setPage={handleSetPage}
          />
        )}

        {page === "eval" && <EvalPage />}

        {page === "refer" && <ReferPage />}
      </main>

      <Footer setPage={handleSetPage} />
    </>
  );
}
