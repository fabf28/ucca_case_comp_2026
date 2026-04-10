export const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --soil:  #2e1c0c;
  --bark:  #5c3d1e;
  --wheat: #c8963e;
  --straw: #e8c97a;
  --sage:  #6b7c5c;
  --mist:  #dde8d0;
  --cream: #f7f1e3;
  --stone: #9e8b70;
  --deep:  #1a0f05;
  --white: #fdfaf4;
}

html { scroll-behavior: smooth; }
body { font-family: 'Outfit', sans-serif; background: var(--cream); color: var(--soil); overflow-x: hidden; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--stone); border-radius: 3px; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 3rem;
  background: rgba(247,241,227,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(46,28,12,0.08);
  transition: all 0.3s;
}
.nav.scrolled { padding: 0.7rem 3rem; box-shadow: 0 2px 20px rgba(46,28,12,0.08); }
.nav-brand { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:700; color:var(--soil); cursor:pointer; letter-spacing:0.03em; }
.nav-brand span { color: var(--wheat); }
.nav-links { display:flex; gap:0; list-style:none; align-items:center; }
.nav-links button { background:none; border:none; font-family:'Outfit',sans-serif; font-size:0.82rem; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; color:var(--bark); cursor:pointer; padding:0.5rem 1rem; transition:color 0.2s; }
.nav-links button:hover, .nav-links button.active { color: var(--wheat); }
.nav-cta { background:var(--soil) !important; color:var(--straw) !important; border-radius:6px !important; padding:0.5rem 1.25rem !important; }
.nav-cta:hover { background:var(--bark) !important; }

/* ── HERO ── */
.hero { position:relative; min-height:100vh; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.hero-bg { position:absolute; inset:0; background:linear-gradient(165deg,#c8d8a8 0%,#c0a860 40%,#8a5c28 70%,#3c2010 100%); }
.hero-svg { position:absolute; inset:0; width:100%; height:100%; }
.hero-vignette { position:absolute; inset:0; background:radial-gradient(ellipse at center,transparent 40%,rgba(30,15,5,0.5) 100%); }
.hero-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,rgba(46,28,12,0.1) 0%,rgba(46,28,12,0.45) 100%); }
.hero-content { position:relative; z-index:2; text-align:center; padding:2rem; max-width:720px; animation:fadeUp 1s ease; }
.hero-eyebrow { display:inline-block; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--straw); margin-bottom:1.5rem; font-weight:500; opacity:0.9; }
.hero-title { font-family:'Cormorant Garamond',serif; font-size:clamp(3.5rem,8vw,6.5rem); font-weight:700; color:#fdf6e3; line-height:1.0; letter-spacing:-0.01em; margin-bottom:1.5rem; text-shadow:0 4px 40px rgba(46,28,12,0.5); }
.hero-title em { font-style:italic; color:var(--straw); }
.hero-sub { font-size:1.05rem; color:rgba(253,246,227,0.78); font-weight:300; line-height:1.75; max-width:480px; margin:0 auto 2.5rem; }
.hero-actions { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
.scroll-indicator { position:absolute; bottom:2rem; left:50%; transform:translateX(-50%); z-index:2; display:flex; flex-direction:column; align-items:center; gap:0.4rem; animation:bob 2.5s ease-in-out infinite; }
.scroll-indicator span { font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(253,246,227,0.4); }
.scroll-line { width:1px; height:40px; background:linear-gradient(to bottom,rgba(253,246,227,0.4),transparent); }

/* ── STRIP ── */
.strip { background:var(--soil); display:flex; justify-content:center; align-items:center; flex-wrap:wrap; }
.strip-item { padding:1rem 2rem; font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--straw); font-weight:500; opacity:0.7; border-right:1px solid rgba(232,201,122,0.15); }
.strip-item:last-child { border-right:none; }

/* ── SECTIONS ── */
.section { padding:7rem 3rem; max-width:1140px; margin:0 auto; }
.section-label { font-size:0.7rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--wheat); font-weight:600; margin-bottom:0.75rem; }
.section-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,4vw,3.2rem); font-weight:700; color:var(--soil); line-height:1.15; margin-bottom:1.25rem; }
.section-body { font-size:1rem; color:var(--bark); line-height:1.8; font-weight:300; max-width:640px; }

/* ── ABOUT ── */
.about-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
.about-image-box { width:100%; padding-bottom:110%; position:relative; border-radius:4px; overflow:hidden; }
.about-image-box svg { position:absolute; inset:0; width:100%; height:100%; }
.about-badge { position:absolute; bottom:-1.5rem; right:-1.5rem; background:var(--wheat); color:var(--soil); padding:1.5rem; border-radius:4px; font-family:'Cormorant Garamond',serif; }
.about-badge-num { font-size:2.5rem; font-weight:700; line-height:1; display:block; }
.about-badge-label { font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; opacity:0.8; }

/* ── SERVICES ── */
.services-bg { background:#f0e8d4; }
.services-inner { padding:7rem 3rem; max-width:1140px; margin:0 auto; }
.cards-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1.5rem; margin-top:3.5rem; }
.card { background:var(--white); border:1px solid rgba(46,28,12,0.07); border-radius:8px; padding:2.25rem 2rem; position:relative; overflow:hidden; transition:transform 0.3s, box-shadow 0.3s; }
.card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--wheat); transform:scaleX(0); transform-origin:left; transition:transform 0.3s; }
.card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(46,28,12,0.1); }
.card:hover::before { transform:scaleX(1); }
.card-num { font-family:'Cormorant Garamond',serif; font-size:3.5rem; font-weight:700; color:rgba(200,150,62,0.15); line-height:1; margin-bottom:1rem; }
.card-title { font-family:'Cormorant Garamond',serif; font-size:1.4rem; font-weight:600; color:var(--soil); margin-bottom:0.75rem; }
.card-text { font-size:0.9rem; color:var(--bark); line-height:1.75; font-weight:300; }

/* ── STATS ── */
.stats-bar { background:var(--deep); padding:4rem 3rem; display:flex; justify-content:center; gap:5rem; flex-wrap:wrap; border-top:1px solid rgba(232,201,122,0.08); }
.stat-num { font-family:'Cormorant Garamond',serif; font-size:3.2rem; font-weight:700; color:var(--straw); line-height:1; }
.stat-label { font-size:0.72rem; color:rgba(232,201,122,0.4); letter-spacing:0.18em; text-transform:uppercase; margin-top:0.4rem; }

/* ── HOW IT WORKS ── */
.how-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:2.5rem; margin-top:4rem; }
.step-number { font-family:'Cormorant Garamond',serif; font-size:4rem; font-weight:700; color:rgba(200,150,62,0.18); line-height:1; margin-bottom:0.75rem; }
.step-title { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:600; color:var(--soil); margin-bottom:0.5rem; }
.step-text { font-size:0.88rem; color:var(--bark); line-height:1.75; font-weight:300; }

/* ── CTA ── */
.cta-bg { background:var(--soil); padding:7rem 2rem; text-align:center; }
.cta-inner { max-width:560px; margin:0 auto; }
.cta-bg .section-title { color:var(--cream); margin-bottom:1rem; }
.cta-bg .section-label { color:var(--straw); opacity:0.6; }
.cta-bg .section-body { color:rgba(247,241,227,0.5); margin:0 auto 2.5rem; text-align:center; }
.cta-buttons { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

/* ── BUTTONS ── */
.btn { display:inline-flex; align-items:center; gap:0.5rem; padding:0.85rem 2rem; border-radius:6px; font-family:'Outfit',sans-serif; font-size:0.88rem; font-weight:500; cursor:pointer; text-decoration:none; transition:all 0.22s; letter-spacing:0.03em; border:none; }
.btn-primary { background:var(--wheat); color:var(--soil); }
.btn-primary:hover { background:var(--straw); transform:translateY(-1px); }
.btn-outline-light { background:transparent; color:var(--straw); border:1px solid rgba(232,201,122,0.3); }
.btn-outline-light:hover { background:rgba(232,201,122,0.1); border-color:rgba(232,201,122,0.6); transform:translateY(-1px); }
.btn-outline-dark { background:transparent; color:var(--soil); border:1px solid rgba(46,28,12,0.25); }
.btn-outline-dark:hover { background:rgba(46,28,12,0.05); border-color:rgba(46,28,12,0.5); }
.btn-soil { background:var(--soil); color:var(--straw); }
.btn-soil:hover { background:var(--bark); transform:translateY(-1px); }

/* ── BLOG ── */
.page-hero { padding:10rem 3rem 5rem; background:linear-gradient(170deg,#e8dfc8 0%,#d4c490 100%); text-align:center; }
.blog-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:2rem; padding:5rem 3rem; max-width:1140px; margin:0 auto; }
.blog-card { background:var(--white); border:1px solid rgba(46,28,12,0.07); border-radius:8px; overflow:hidden; transition:transform 0.3s, box-shadow 0.3s; cursor:pointer; }
.blog-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(46,28,12,0.1); }
.blog-card-img { height:200px; position:relative; overflow:hidden; }
.blog-card-img svg { width:100%; height:100%; }
.blog-card-body { padding:1.75rem; }
.blog-tag { display:inline-block; font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--wheat); font-weight:600; margin-bottom:0.6rem; }
.blog-card-title { font-family:'Cormorant Garamond',serif; font-size:1.3rem; font-weight:600; color:var(--soil); line-height:1.3; margin-bottom:0.75rem; }
.blog-card-excerpt { font-size:0.87rem; color:var(--bark); line-height:1.7; font-weight:300; margin-bottom:1.25rem; }
.blog-card-meta { display:flex; align-items:center; justify-content:space-between; font-size:0.75rem; color:var(--stone); }
.read-more { color:var(--wheat); font-weight:500; font-size:0.82rem; cursor:pointer; background:none; border:none; font-family:'Outfit',sans-serif; }

/* ── FORMS ── */
.form-page { padding:10rem 2rem 6rem; min-height:100vh; }
.form-container { max-width:680px; margin:0 auto; }
.form-header { margin-bottom:3rem; }
.form-card { background:var(--white); border:1px solid rgba(46,28,12,0.08); border-radius:12px; padding:3rem; }
.form-group { margin-bottom:1.5rem; }
.form-label { display:block; font-size:0.82rem; font-weight:500; color:var(--bark); letter-spacing:0.05em; text-transform:uppercase; margin-bottom:0.5rem; }
.form-input, .form-select, .form-textarea { width:100%; padding:0.8rem 1rem; border:1px solid rgba(46,28,12,0.15); border-radius:6px; font-family:'Outfit',sans-serif; font-size:0.95rem; color:var(--soil); background:var(--cream); transition:border-color 0.2s, box-shadow 0.2s; outline:none; }
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color:var(--wheat); box-shadow:0 0 0 3px rgba(200,150,62,0.12); }
.form-textarea { min-height:120px; resize:vertical; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; }
.form-divider { border:none; border-top:1px solid rgba(46,28,12,0.08); margin:2rem 0; }
.form-note { font-size:0.82rem; color:var(--stone); line-height:1.65; margin-bottom:1.5rem; }
.success-box { background:#eef5e8; border:1px solid #b8d499; border-radius:8px; padding:2.5rem; text-align:center; }
.success-icon { font-size:2.5rem; margin-bottom:1rem; }
.success-title { font-family:'Cormorant Garamond',serif; font-size:1.8rem; font-weight:600; color:var(--soil); margin-bottom:0.5rem; }
.success-text { font-size:0.9rem; color:var(--bark); line-height:1.7; }

/* ── FOOTER ── */
.footer { background:var(--deep); padding:4rem 3rem 2rem; }
.footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; max-width:1140px; margin:0 auto 3rem; }
.footer-brand { font-family:'Cormorant Garamond',serif; font-size:1.6rem; font-weight:700; color:var(--cream); margin-bottom:1rem; }
.footer-brand span { color:var(--wheat); }
.footer-tagline { font-size:0.85rem; color:rgba(247,241,227,0.35); line-height:1.7; font-weight:300; }
.footer-heading { font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(232,201,122,0.5); font-weight:600; margin-bottom:1rem; }
.footer-links { list-style:none; display:flex; flex-direction:column; gap:0.6rem; }
.footer-links button { background:none; border:none; font-family:'Outfit',sans-serif; font-size:0.85rem; color:rgba(247,241,227,0.4); cursor:pointer; text-align:left; transition:color 0.2s; padding:0; }
.footer-links button:hover { color:var(--straw); }
.footer-bottom { max-width:1140px; margin:0 auto; padding-top:2rem; border-top:1px solid rgba(232,201,122,0.08); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; }
.footer-legal { font-size:0.75rem; color:rgba(247,241,227,0.2); }

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
@keyframes bob { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }

/* ── RESPONSIVE ── */
@media (max-width:768px) {
  .nav { padding:0.9rem 1.25rem; }
  .nav-links button:not(.nav-cta) { display:none; }
  .section { padding:4rem 1.25rem; }
  .about-grid { grid-template-columns:1fr; gap:3rem; }
  .footer-grid { grid-template-columns:1fr 1fr; }
  .form-row { grid-template-columns:1fr; }
  .stats-bar { gap:2.5rem; }
}

/* ── BLOG POST PAGE ── */
.blog-post-back-btn:hover {
  background: rgba(247,241,227,0.25) !important;
  border-color: rgba(247,241,227,0.5) !important;
}
.prev-next-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(46,28,12,0.1);
}
`;

/* ── BLOG POST PAGE ── */
