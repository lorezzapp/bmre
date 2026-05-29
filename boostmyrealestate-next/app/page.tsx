'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const hamburger = document.querySelector('.nav-hamburger')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav a')

    if (hamburger) {
      hamburger.addEventListener('click', function() {
        this.classList.toggle('open')
        mobileNav?.classList.toggle('open')
      })
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav?.classList.remove('open')
        hamburger?.classList.remove('open')
      })
    })
  }, [])

  return (
    <>
      <style>{`
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink:      #0d0d12;
      --ink-2:    #3d3d4e;
      --ink-3:    #8888a0;
      --bg:       #f5f5f7;
      --bg-2:     #ebebef;
      --white:    #ffffff;
      --accent:   #5b3de8;
      --accent-2: #7c5cf5;
      --border:   #e2e2ea;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--white);
      color: var(--ink);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ══════════════════════════════
       NAV
    ══════════════════════════════ */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 300;
      padding: 0 56px;
      height: 72px;
      display: flex; align-items: center; justify-content: space-between;
      background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2));
      backdrop-filter: blur(8px);
    }
    .nav-logo {
      font-size: 0.95rem; font-weight: 700; letter-spacing: -0.02em;
      color: #fff; text-decoration: none;
      display: flex; align-items: center; gap: 8px;
    }
    .nav-logo-mark {
      width: 28px; height: 28px; border-radius: 7px;
      background: rgba(255,255,255,0.25);
      backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
    }
    .nav-pill {
      display: flex; align-items: center; gap: 2px;
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(16px) saturate(160%);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 40px; padding: 5px 8px;
    }
    .nav-pill a {
      color: rgba(255,255,255,0.8); text-decoration: none;
      font-size: 0.82rem; font-weight: 500;
      padding: 7px 18px; border-radius: 30px;
      transition: background 0.2s, color 0.2s;
    }
    .nav-pill a:hover { background: rgba(255,255,255,0.15); color: #fff; }
    .nav-cta {
      background: rgba(255,255,255,0.18);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.3);
      color: #fff; font-size: 0.82rem; font-weight: 600;
      padding: 9px 22px; border-radius: 30px;
      text-decoration: none; transition: background 0.2s;
    }
    .nav-cta:hover { background: rgba(255,255,255,0.28); }

    /* ── Hamburger button ── */
    .nav-hamburger {
      display: none;
      width: 38px; height: 38px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px; cursor: pointer;
      align-items: center; justify-content: center;
      flex-direction: column; gap: 5px;
      padding: 0; transition: background 0.2s;
    }
    .nav-hamburger:hover { background: rgba(255,255,255,0.25); }
    .nav-hamburger span {
      display: block; width: 16px; height: 1.5px;
      background: #fff; border-radius: 2px;
      transition: transform 0.25s, opacity 0.25s;
      pointer-events: none;
    }
    .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .nav-hamburger.open span:nth-child(2) { opacity: 0; }
    .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    /* ── Mobile nav drawer ── */
    .mobile-nav {
      position: fixed; top: 60px; left: 0; right: 0; z-index: 299;
      background: rgba(10,10,16,0.97);
      backdrop-filter: blur(24px) saturate(160%);
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 12px 20px 20px;
      display: flex; flex-direction: column; gap: 2px;
      pointer-events: none; opacity: 0;
      transform: translateY(-8px);
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .mobile-nav.open { pointer-events: all; opacity: 1; transform: none; }
    .mobile-nav a {
      display: block; color: rgba(255,255,255,0.8); text-decoration: none;
      font-size: 1rem; font-weight: 600; padding: 12px 16px;
      border-radius: 10px; transition: background 0.2s, color 0.2s;
    }
    .mobile-nav a:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .mobile-nav .mob-cta {
      background: var(--accent); color: #fff !important;
      text-align: center; margin-top: 10px; font-weight: 700;
    }
    .mobile-nav .mob-cta:hover { background: #4f33cc !important; }

    /* ══════════════════════════════
       HERO
    ══════════════════════════════ */
    .hero {
      position: relative; height: 100vh; min-height: 600px;
      overflow: hidden; display: flex; align-items: flex-end;
    }
    .hero-photo {
      position: absolute; inset: 0;
      background-image: url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90&auto=format&fit=crop');
      background-size: cover; background-position: center 40%;
    }
    .hero-gradient {
      position: absolute; inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.12) 0%,
        rgba(0,0,0,0.05) 30%,
        rgba(0,0,0,0.35) 65%,
        rgba(0,0,0,0.82) 100%
      );
    }
    .hero-content {
      position: relative; z-index: 2;
      width: 100%; padding: 0 48px 48px;
      display: flex; align-items: flex-end; justify-content: space-between; gap: 32px;
    }
    .hero-text { max-width: 620px; }
    .hero-kicker {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(255,255,255,0.75);
      margin-bottom: 18px;
    }
    .hero-kicker-dot {
      width: 5px; height: 5px; border-radius: 50%; background: #a78bfa;
    }
    .hero-title {
      font-size: clamp(2.4rem, 5.5vw, 4.2rem);
      font-weight: 800; line-height: 1.04; letter-spacing: -0.04em;
      color: #fff;
    }
    .hero-title em { font-style: italic; font-weight: 400; }
    .hero-sub {
      font-size: 1.05rem; color: rgba(255,255,255,0.7);
      line-height: 1.65; margin-top: 20px; max-width: 500px;
      font-weight: 400;
    }
    .hero-actions {
      display: flex; align-items: center; gap: 12px; margin-top: 32px; flex-wrap: wrap;
    }
    .btn-white {
      background: #fff; color: var(--ink);
      font-size: 0.9rem; font-weight: 700;
      padding: 13px 28px; border-radius: 10px;
      text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
      display: flex; align-items: center; gap: 8px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.2);
    }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
    .btn-glass-light {
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.25);
      color: #fff; font-size: 0.9rem; font-weight: 600;
      padding: 13px 24px; border-radius: 10px;
      text-decoration: none; transition: background 0.2s;
    }
    .btn-glass-light:hover { background: rgba(255,255,255,0.2); }

    .hero-glass-card {
      flex-shrink: 0; width: 300px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(24px) saturate(160%);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 20px; padding: 24px;
    }
    .hgc-label {
      font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(255,255,255,0.55);
      margin-bottom: 14px;
    }
    .hgc-stat { margin-bottom: 14px; }
    .hgc-num {
      font-size: 1.9rem; font-weight: 800; color: #fff; letter-spacing: -0.04em; line-height: 1;
    }
    .hgc-desc { font-size: 0.78rem; color: rgba(255,255,255,0.6); margin-top: 3px; }
    .hgc-divider { height: 1px; background: rgba(255,255,255,0.12); margin: 16px 0; }
    .hgc-cta {
      display: block; text-align: center;
      background: rgba(255,255,255,0.18);
      border: 1px solid rgba(255,255,255,0.28);
      color: #fff; font-size: 0.82rem; font-weight: 700;
      padding: 11px; border-radius: 10px;
      text-decoration: none; transition: background 0.2s;
    }
    .hgc-cta:hover { background: rgba(255,255,255,0.28); }

    /* ══════════════════════════════
       STATS STRIP
    ══════════════════════════════ */
    .stats-section {
      background: var(--white);
      border-bottom: 1px solid var(--border);
      padding: 44px 48px;
    }
    .stats-inner {
      max-width: 1140px; margin: 0 auto;
      display: flex; align-items: center; gap: 0;
    }
    .stat-item {
      flex: 1; padding: 0 32px;
      border-right: 1px solid var(--border);
    }
    .stat-item:first-child { padding-left: 0; }
    .stat-item:last-child { border-right: none; }
    .stat-num {
      font-size: 2.4rem; font-weight: 800; letter-spacing: -0.05em;
      color: var(--ink); line-height: 1;
    }
    .stat-num sup { font-size: 1.2rem; vertical-align: super; margin-left: 2px; }
    .stat-label { font-size: 0.82rem; color: var(--ink-3); margin-top: 6px; font-weight: 500; }

    /* ══════════════════════════════
       SECTION HELPERS
    ══════════════════════════════ */
    .section-inner { max-width: 1140px; margin: 0 auto; padding: 0 48px; }

    .s-eyebrow {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--accent);
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 14px;
    }
    .s-eyebrow::before {
      content: ''; display: block; width: 24px; height: 2px;
      background: var(--accent);
    }
    .s-title {
      font-size: clamp(1.9rem, 3.5vw, 2.75rem);
      font-weight: 800; letter-spacing: -0.04em; line-height: 1.1;
      color: var(--ink);
    }
    .s-sub {
      font-size: 1rem; color: var(--ink-2); line-height: 1.7;
      margin-top: 14px; max-width: 520px; font-weight: 400;
    }

    /* ══════════════════════════════
       EXAMPLES — property cards
    ══════════════════════════════ */
    .examples-section { padding: 96px 0 100px; background: var(--white); }
    .examples-header {
      display: flex; align-items: flex-end; justify-content: space-between;
      margin-bottom: 52px; flex-wrap: wrap; gap: 20px;
    }
    .explore-link {
      font-size: 0.88rem; font-weight: 600; color: var(--ink-2);
      text-decoration: none; display: flex; align-items: center; gap: 6px;
      transition: color 0.2s;
    }
    .explore-link:hover { color: var(--ink); }
    .explore-arrow {
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 50%;
      border: 1.5px solid var(--border); font-size: 0.9rem;
      transition: border-color 0.2s, background 0.2s;
    }
    .explore-link:hover .explore-arrow { border-color: var(--ink); background: var(--ink); color: #fff; }

    .properties-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    }
    .prop-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 18px; overflow: hidden;
      transition: box-shadow 0.25s, transform 0.25s;
    }
    .prop-card:hover {
      box-shadow: 0 16px 48px rgba(0,0,0,0.1);
      transform: translateY(-3px);
    }
    .prop-img-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; }
    .prop-img-wrap img {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.5s ease;
    }
    .prop-card:hover .prop-img-wrap img { transform: scale(1.05); }
    .prop-tag {
      position: absolute; top: 14px; left: 14px;
      background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
      border-radius: 30px; padding: 5px 12px;
      font-size: 0.7rem; font-weight: 700; color: var(--ink);
      letter-spacing: 0.02em;
    }
    .prop-fav {
      position: absolute; top: 14px; right: 14px;
      width: 34px; height: 34px; border-radius: 50%;
      background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem;
    }
    .prop-browser-bar {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: rgba(13,13,18,0.7); backdrop-filter: blur(12px);
      padding: 7px 12px;
      display: flex; align-items: center; gap: 8px;
    }
    .pbb-dots { display: flex; gap: 4px; }
    .pbb-dot { width: 6px; height: 6px; border-radius: 50%; }
    .pbb-url { font-size: 0.6rem; color: rgba(255,255,255,0.5); flex: 1; }

    .prop-body { padding: 18px 20px 20px; }
    .prop-location {
      font-size: 0.72rem; font-weight: 600; color: var(--ink-3);
      letter-spacing: 0.04em; text-transform: uppercase;
      display: flex; align-items: center; gap: 5px; margin-bottom: 8px;
    }
    .prop-name {
      font-size: 1.05rem; font-weight: 700; color: var(--ink);
      letter-spacing: -0.025em; line-height: 1.2;
    }
    .prop-meta {
      font-size: 0.78rem; color: var(--ink-3); margin-top: 6px;
      display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
    }
    .prop-meta-item { display: flex; align-items: center; gap: 4px; }
    .prop-footer {
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 16px; padding-top: 16px;
      border-top: 1px solid var(--border);
    }
    .prop-price { font-size: 1.1rem; font-weight: 800; color: var(--ink); letter-spacing: -0.03em; }
    .prop-price span { font-size: 0.78rem; font-weight: 400; color: var(--ink-3); }
    .prop-rating {
      display: flex; align-items: center; gap: 5px;
      font-size: 0.78rem; font-weight: 600; color: var(--ink);
    }
    .prop-stars { color: #f59e0b; }
    .prop-btn {
      background: var(--ink); color: #fff;
      font-size: 0.78rem; font-weight: 700;
      padding: 9px 18px; border-radius: 8px;
      text-decoration: none; transition: background 0.2s;
      white-space: nowrap;
    }
    .prop-btn:hover { background: #2a2a38; }

    /* ══════════════════════════════
       ATMOSPHERE GALLERY
    ══════════════════════════════ */
    .gallery-section { padding: 96px 0 100px; background: var(--bg); }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 280px 280px;
      gap: 14px;
      margin-top: 52px;
    }
    .gallery-item {
      position: relative; overflow: hidden; border-radius: 18px;
    }
    .gallery-item:first-child { grid-column: 1 / 2; grid-row: 1 / 3; }
    .gallery-item:nth-child(4) { grid-column: 3 / 4; grid-row: 1 / 3; }
    .gallery-item img {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.6s ease;
    }
    .gallery-item:hover img { transform: scale(1.06); }
    .gallery-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%);
      opacity: 0; transition: opacity 0.35s;
    }
    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .gallery-label {
      position: absolute; bottom: 18px; left: 18px; right: 18px;
      color: #fff; transform: translateY(8px); opacity: 0;
      transition: transform 0.35s, opacity 0.35s;
    }
    .gallery-item:hover .gallery-label { transform: none; opacity: 1; }
    .gallery-label-name { font-size: 0.95rem; font-weight: 700; letter-spacing: -0.02em; }
    .gallery-label-loc { font-size: 0.75rem; color: rgba(255,255,255,0.7); margin-top: 3px; }

    /* ══════════════════════════════
       HOW IT WORKS
    ══════════════════════════════ */
    .how-section { padding: 96px 0 100px; background: var(--white); }
    .how-inner {
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
    }
    .how-steps { display: flex; flex-direction: column; gap: 0; }
    .how-step {
      display: flex; gap: 20px; padding: 28px 0;
      border-bottom: 1px solid var(--border);
    }
    .how-step:first-child { padding-top: 0; }
    .how-step:last-child { border-bottom: none; }
    .how-step-num {
      width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
      background: var(--ink); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 0.85rem;
    }
    .how-step.active .how-step-num {
      background: var(--accent);
      box-shadow: 0 4px 16px rgba(91,61,232,0.3);
    }
    .how-step-title {
      font-size: 1rem; font-weight: 700; color: var(--ink);
      letter-spacing: -0.02em; margin-bottom: 6px;
    }
    .how-step-desc { font-size: 0.875rem; color: var(--ink-2); line-height: 1.65; }

    .how-visual {
      position: relative; border-radius: 24px; overflow: hidden;
      aspect-ratio: 3/4; max-height: 580px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.18);
    }
    .how-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .how-visual-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%);
    }
    .how-visual-badge {
      position: absolute; bottom: 24px; left: 24px; right: 24px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(20px) saturate(150%);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 16px; padding: 18px 20px;
    }
    .hvb-label { font-size: 0.68rem; font-weight: 700; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
    .hvb-title { font-size: 1.1rem; font-weight: 800; color: #fff; letter-spacing: -0.03em; }
    .hvb-sub { font-size: 0.78rem; color: rgba(255,255,255,0.65); margin-top: 4px; }
    .hvb-stat { display: flex; gap: 20px; margin-top: 14px; }
    .hvb-stat-num { font-size: 1rem; font-weight: 800; color: #fff; }
    .hvb-stat-label { font-size: 0.65rem; color: rgba(255,255,255,0.55); }

    /* ══════════════════════════════
       FEATURES
    ══════════════════════════════ */
    .features-section { padding: 96px 0 100px; background: var(--bg); }
    .features-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1px; background: var(--border);
      border: 1px solid var(--border); border-radius: 20px; overflow: hidden;
      margin-top: 60px;
    }
    .feat-item {
      background: var(--bg); padding: 36px 30px;
      transition: background 0.2s;
    }
    .feat-item:hover { background: var(--bg-2); }
    .feat-icon {
      width: 44px; height: 44px; border-radius: 11px; margin-bottom: 20px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; background: var(--white);
    }
    .feat-title { font-size: 1rem; font-weight: 700; color: var(--ink); letter-spacing: -0.02em; margin-bottom: 8px; }
    .feat-desc { font-size: 0.875rem; color: var(--ink-2); line-height: 1.65; }

    /* ══════════════════════════════
       TESTIMONIALS
    ══════════════════════════════ */
    .testimonials-section { padding: 96px 0 100px; background: var(--white); }
    .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
    .t-card {
      background: var(--white); border: 1px solid var(--border);
      border-radius: 18px; padding: 28px;
      transition: box-shadow 0.2s;
    }
    .t-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); }
    .t-stars { color: #f59e0b; font-size: 0.88rem; margin-bottom: 16px; letter-spacing: 1px; }
    .t-text { font-size: 0.9rem; color: var(--ink-2); line-height: 1.7; font-style: italic; }
    .t-author { display: flex; align-items: center; gap: 12px; margin-top: 22px; padding-top: 20px; border-top: 1px solid var(--border); }
    .t-av {
      width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.9rem; color: #fff;
    }
    .t-name { font-size: 0.875rem; font-weight: 700; color: var(--ink); }
    .t-role { font-size: 0.75rem; color: var(--ink-3); margin-top: 2px; }

    /* ══════════════════════════════
       PRICING
    ══════════════════════════════ */
    .pricing-section { padding: 96px 0 100px; background: var(--bg); }
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 60px; }
    .p-card {
      border: 1px solid var(--border); border-radius: 20px; padding: 36px;
      background: var(--white);
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .p-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.07); }
    .p-card.featured {
      background: var(--ink); border-color: var(--ink);
      box-shadow: 0 20px 60px rgba(13,13,18,0.25);
    }
    .p-plan {
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--ink-3); margin-bottom: 10px;
    }
    .p-card.featured .p-plan { color: rgba(255,255,255,0.45); }
    .p-price {
      font-size: 2.6rem; font-weight: 800; letter-spacing: -0.05em;
      color: var(--ink); line-height: 1;
    }
    .p-price-unit { font-size: 0.9rem; font-weight: 400; color: var(--ink-3); vertical-align: middle; }
    .p-card.featured .p-price { color: #fff; }
    .p-card.featured .p-price-unit { color: rgba(255,255,255,0.45); }
    .p-desc { font-size: 0.875rem; color: var(--ink-2); margin-top: 10px; line-height: 1.5; }
    .p-card.featured .p-desc { color: rgba(255,255,255,0.6); }
    .p-divider { height: 1px; background: var(--border); margin: 24px 0; }
    .p-card.featured .p-divider { background: rgba(255,255,255,0.1); }
    .p-features { list-style: none; display: flex; flex-direction: column; gap: 11px; }
    .p-feature {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 0.875rem; color: var(--ink-2);
    }
    .p-card.featured .p-feature { color: rgba(255,255,255,0.75); }
    .p-check { color: #10b981; font-size: 0.85rem; flex-shrink: 0; margin-top: 1px; }
    .p-cross { color: var(--ink-3); font-size: 0.85rem; flex-shrink: 0; margin-top: 1px; }
    .p-card.featured .p-cross { color: rgba(255,255,255,0.2); }
    .p-btn {
      display: block; text-align: center; margin-top: 30px;
      padding: 13px; border-radius: 10px;
      font-size: 0.9rem; font-weight: 700;
      text-decoration: none; transition: all 0.2s;
    }
    .p-btn-dark { background: var(--ink); color: #fff; }
    .p-btn-dark:hover { background: #2a2a38; }
    .p-btn-white { background: #fff; color: var(--ink); box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
    .p-btn-white:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    .p-btn-outline { border: 1.5px solid var(--border); color: var(--ink); }
    .p-btn-outline:hover { border-color: var(--ink-2); background: var(--bg); }
    .p-badge {
      display: inline-block; background: #fff; color: var(--accent);
      font-size: 0.68rem; font-weight: 800; letter-spacing: 0.06em;
      text-transform: uppercase; padding: 3px 10px; border-radius: 20px;
      margin-bottom: 16px;
    }

    /* ══════════════════════════════
       CTA BANNER
    ══════════════════════════════ */
    .cta-section { padding: 0; position: relative; min-height: 460px; overflow: hidden; display: flex; align-items: center; }
    .cta-photo {
      position: absolute; inset: 0;
      background-image: url('https://images.unsplash.com/photo-1615874694520-474822394e73?w=1800&q=85&auto=format&fit=crop');
      background-size: cover; background-position: center;
    }
    .cta-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to right, rgba(13,13,18,0.88) 40%, rgba(13,13,18,0.4) 100%);
    }
    .cta-content {
      position: relative; z-index: 2;
      display: flex; flex-direction: column; justify-content: center;
      padding: 80px;
    }
    .cta-title {
      font-size: clamp(1.8rem, 3.5vw, 3rem); font-weight: 800;
      letter-spacing: -0.04em; color: #fff; line-height: 1.1; max-width: 560px;
    }
    .cta-sub { font-size: 1.05rem; color: rgba(255,255,255,0.65); margin-top: 16px; max-width: 440px; line-height: 1.65; }
    .cta-actions { display: flex; gap: 14px; margin-top: 36px; flex-wrap: wrap; }

    /* ═══════════════════════��══════
       FOOTER
    ═════���════════════════════════ */
    footer { background: var(--ink); padding: 64px 0 32px; }
    .footer-inner { max-width: 1140px; margin: 0 auto; padding: 0 48px; }
    .footer-top {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
      padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .footer-logo {
      display: flex; align-items: center; gap: 9px;
      font-size: 0.95rem; font-weight: 700; color: #fff;
      text-decoration: none; margin-bottom: 14px; letter-spacing: -0.02em;
    }
    .footer-logo-mark {
      width: 28px; height: 28px; border-radius: 7px;
      background: rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center; font-size: 14px;
    }
    .footer-tagline { font-size: 0.875rem; color: rgba(255,255,255,0.4); line-height: 1.6; }
    .footer-col h4 {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(255,255,255,0.35);
      margin-bottom: 18px;
    }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .footer-col a { font-size: 0.875rem; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
    .footer-col a:hover { color: #fff; }
    .footer-bottom {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 28px; flex-wrap: wrap; gap: 12px;
    }
    .footer-copy { font-size: 0.8rem; color: rgba(255,255,255,0.25); }
    .footer-legal { display: flex; gap: 20px; }
    .footer-legal a { font-size: 0.8rem; color: rgba(255,255,255,0.25); text-decoration: none; }
    .footer-legal a:hover { color: rgba(255,255,255,0.6); }

    /* ══════════════════════════════
       ANIMATIONS
    ══════════════════════════════ */
    .fade-up {
      opacity: 0; transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-up.visible { opacity: 1; transform: none; }

    /* ══════════════════════════════
       RESPONSIVE — 960px (tablet)
    ══════════════════════════════ */
    @media (max-width: 960px) {
      nav { padding: 0 16px; height: 64px; }
      .nav-logo { font-size: 0.85rem; }
      .nav-pill { display: none; }
      .nav-hamburger { display: flex; }
      .hero-content { padding: 0 20px 40px; flex-direction: column; align-items: flex-start; }
      .hero-glass-card { width: 100%; max-width: 380px; }
      .stats-section { padding: 32px 20px; }
      .stats-inner { flex-wrap: wrap; gap: 24px; }
      .stat-item { border-right: none; padding: 0; flex: 1 1 40%; }
      .section-inner { padding: 0 20px; }
      .examples-section, .gallery-section, .how-section,
      .features-section, .testimonials-section, .pricing-section { padding: 72px 0 80px; }
      .properties-grid, .t-grid, .pricing-grid { grid-template-columns: 1fr 1fr; }
      .features-grid { grid-template-columns: 1fr 1fr; }
      .how-inner { grid-template-columns: 1fr; gap: 48px; }
      .how-visual { max-height: 340px; aspect-ratio: 16/9; }
      .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
      .gallery-item:first-child, .gallery-item:nth-child(4) { grid-column: auto; grid-row: auto; }
      .gallery-grid .gallery-item { aspect-ratio: 4/3; }
      .cta-content { padding: 60px 32px; }
      .cta-sub { max-width: 100%; }
      .footer-top { grid-template-columns: 1fr 1fr; }
      .footer-inner { padding: 0 20px; }
    }

    /* ══════════════════════════════
       RESPONSIVE — 600px (mobile)
    ══════════════════════════════ */
    @media (max-width: 600px) {
      nav { padding: 0 12px; height: 56px; }
      .nav-cta { display: none; }
      .mobile-nav { top: 56px; padding: 8px 12px 16px; }
      .mobile-nav a { padding: 10px 12px; font-size: 0.95rem; }
      .mobile-nav .mob-cta { padding: 12px; margin-top: 8px; }
      .properties-grid, .t-grid, .pricing-grid, .features-grid { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: 1fr; }
      .hero-title { font-size: clamp(2rem, 8vw, 2.6rem); }
      .hero-sub { font-size: 0.95rem; }
      .hero-actions { gap: 10px; }
      .hero-actions .btn-white,
      .hero-actions .btn-glass-light { width: 100%; justify-content: center; }
      .stat-num { font-size: 2rem; }
      .examples-section, .gallery-section, .how-section,
      .features-section, .testimonials-section, .pricing-section { padding: 56px 0 64px; }
      .cta-content { padding: 60px 20px; }
      .cta-title { font-size: clamp(1.6rem, 7vw, 2rem); }
      .cta-actions { flex-direction: column; }
      .cta-actions a { text-align: center; justify-content: center; }
      .footer-top { grid-template-columns: 1fr; gap: 28px; }
      .footer-inner { padding: 0 16px; }
      .p-price { font-size: 2.2rem; }
      .s-title { font-size: clamp(1.7rem, 6vw, 2rem); }
    }

    /* ══════════════════════════════
       RESPONSIVE — 400px (small phone)
    ══════════════════════════════ */
    @media (max-width: 400px) {
      nav { padding: 0 12px; height: 56px; }
      .nav-logo { font-size: 0.75rem; }
      .nav-logo-mark { width: 24px; height: 24px; font-size: 12px; }
      .nav-hamburger { width: 32px; height: 32px; }
      .nav-hamburger span { width: 14px; }
      .hero-content { padding: 0 12px 24px; }
      .hero-glass-card { display: none; }
      .hero-title { font-size: clamp(1.7rem, 7vw, 2.2rem); }
      .section-inner { padding: 0 12px; }
      .stats-inner { gap: 12px; }
      .stat-item { flex: 1 1 100%; padding: 0; }
      .stat-num { font-size: 1.8rem; }
      .mobile-nav { top: 56px; padding: 6px 12px 12px; }
      .mobile-nav a { padding: 8px 10px; font-size: 0.9rem; }
    }
      `}</style>
      <div>

<nav>
  <a href="#" className="nav-logo">
    <div className="nav-logo-mark">🏠</div>
    BoostMyRealEstate
  </a>
  <div className="nav-pill">
    <a href="#examples">Voorbeelden</a>
    <a href="#how">Hoe het werkt</a>
    <a href="#features">Features</a>
    <a href="#pricing">Prijzen</a>
  </div>
  <a href="#pricing" className="nav-cta">Gratis starten →</a>
  <button className="nav-hamburger" id="navHamburger" aria-label="Menu openen" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>


<div className="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobiel menu">
  <a href="#examples">Voorbeelden</a>
  <a href="#how">Hoe het werkt</a>
  <a href="#features">Features</a>
  <a href="#pricing">Prijzen</a>
  <a href="#pricing" className="mob-cta">Gratis starten →</a>
</div>


<section className="hero">
  <div className="hero-photo"></div>
  <div className="hero-gradient"></div>
  <div className="hero-content">
    <div className="hero-text">
      <div className="hero-kicker">
        <div className="hero-kicker-dot"></div>
        Websites voor vakantieverhuurders
      </div>
      <h1 className="hero-title">
        Jouw Airbnb verdient<br />
        een <em>eigen</em> website
      </h1>
      <p className="hero-sub">
        Professionele websites voor vakantiewoningen die directe boekingen genereren — zonder commissie aan Airbnb of Booking.com.
      </p>
      <div className="hero-actions">
        <a href="#pricing" className="btn-white">Start jouw website →</a>
        <a href="#examples" className="btn-glass-light">Bekijk voorbeelden</a>
      </div>
    </div>
    <div className="hero-glass-card">
      <div className="hgc-label">Resultaten</div>
      <div className="hgc-stat">
        <div className="hgc-num">+38%</div>
        <div className="hgc-desc">Meer directe boekingen gemiddeld</div>
      </div>
      <div className="hgc-divider"></div>
      <div className="hgc-stat">
        <div className="hgc-num">&euro; 2.400</div>
        <div className="hgc-desc">Gemiddelde besparing per jaar op commissie</div>
      </div>
      <div className="hgc-divider"></div>
      <a href="#pricing" className="hgc-cta">Bereken jouw besparing →</a>
    </div>
  </div>
</section>


<section className="stats-section">
  <div className="stats-inner">
    <div className="stat-item">
      <div className="stat-num">140<sup>+</sup></div>
      <div className="stat-label">Websites gelanceerd</div>
    </div>
    <div className="stat-item">
      <div className="stat-num">&euro;2.4k</div>
      <div className="stat-label">Gemiddelde besparing per jaar</div>
    </div>
    <div className="stat-item">
      <div className="stat-num">+38%</div>
      <div className="stat-label">Meer directe boekingen</div>
    </div>
    <div className="stat-item">
      <div className="stat-num">4.9<sup>★</sup></div>
      <div className="stat-label">Gemiddelde klantscore</div>
    </div>
  </div>
</section>


<section className="examples-section" id="examples">
  <div className="section-inner">
    <div className="examples-header fade-up">
      <div>
        <div className="s-eyebrow">Voorbeelden</div>
        <h2 className="s-title">Onze populaire websites</h2>
        <p className="s-sub">Elke website op maat gemaakt voor de unieke stijl van de woning.</p>
      </div>
      <a href="#" className="explore-link">
        Bekijk alle voorbeelden
        <span className="explore-arrow">→</span>
      </a>
    </div>
    <div className="properties-grid">
      <div className="prop-card fade-up">
        <div className="prop-img-wrap">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80&auto=format&fit=crop" alt="Villa Toscana" loading="lazy" />
          <div className="prop-tag">⭐ 4.97</div>
          <div className="prop-fav">🤍</div>
          <div className="prop-browser-bar">
            <div className="pbb-dots">
              <div className="pbb-dot" style={{background:"#ff5f57"}}></div>
              <div className="pbb-dot" style={{background:"#febc2e"}}></div>
              <div className="pbb-dot" style={{background:"#28c840"}}></div>
            </div>
            <div className="pbb-url">🔒 villa-toscana.be</div>
          </div>
        </div>
        <div className="prop-body">
          <div className="prop-location">📍 Gent, België</div>
          <div className="prop-name">Villa Toscana</div>
          <div className="prop-meta">
            <span className="prop-meta-item">🛏 6 slaapkamers</span>
            <span className="prop-meta-item">👥 12 gasten</span>
            <span className="prop-meta-item">🏊 Zwembad</span>
          </div>
          <div className="prop-footer">
            <div>
              <div className="prop-price">&euro; 285 <span>/ nacht</span></div>
              <div className="prop-rating"><span className="prop-stars">★★★★★</span> 4.97 (83)</div>
            </div>
            <a href="#" className="prop-btn">Bekijken →</a>
          </div>
        </div>
      </div>
      <div className="prop-card fade-up" style={{transitionDelay:"0.1s"}}>
        <div className="prop-img-wrap">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format&fit=crop" alt="Penthouse Gent" loading="lazy" />
          <div className="prop-tag">⭐ 4.92</div>
          <div className="prop-fav">🤍</div>
          <div className="prop-browser-bar">
            <div className="pbb-dots">
              <div className="pbb-dot" style={{background:"#ff5f57"}}></div>
              <div className="pbb-dot" style={{background:"#febc2e"}}></div>
              <div className="pbb-dot" style={{background:"#28c840"}}></div>
            </div>
            <div className="pbb-url">🔒 penthouse-gent.be</div>
          </div>
        </div>
        <div className="prop-body">
          <div className="prop-location">📍 Gent centrum</div>
          <div className="prop-name">Penthouse Gent</div>
          <div className="prop-meta">
            <span className="prop-meta-item">🛏 2 slaapkamers</span>
            <span className="prop-meta-item">👥 4 gasten</span>
            <span className="prop-meta-item">🌇 Dakterras</span>
          </div>
          <div className="prop-footer">
            <div>
              <div className="prop-price">&euro; 195 <span>/ nacht</span></div>
              <div className="prop-rating"><span className="prop-stars">★★★★★</span> 4.92 (61)</div>
            </div>
            <a href="#" className="prop-btn">Bekijken →</a>
          </div>
        </div>
      </div>
      <div className="prop-card fade-up" style={{transitionDelay:"0.2s"}}>
        <div className="prop-img-wrap">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop" alt="Chalet Ardennes" loading="lazy" />
          <div className="prop-tag">⭐ 4.88</div>
          <div className="prop-fav">🤍</div>
          <div className="prop-browser-bar">
            <div className="pbb-dots">
              <div className="pbb-dot" style={{background:"#ff5f57"}}></div>
              <div className="pbb-dot" style={{background:"#febc2e"}}></div>
              <div className="pbb-dot" style={{background:"#28c840"}}></div>
            </div>
            <div className="pbb-url">🔒 chalet-ardennes.be</div>
          </div>
        </div>
        <div className="prop-body">
          <div className="prop-location">📍 Durbuy, Ardennen</div>
          <div className="prop-name">Chalet Ardennes</div>
          <div className="prop-meta">
            <span className="prop-meta-item">🛏 4 slaapkamers</span>
            <span className="prop-meta-item">👥 8 gasten</span>
            <span className="prop-meta-item">🔥 Open haard</span>
          </div>
          <div className="prop-footer">
            <div>
              <div className="prop-price">&euro; 165 <span>/ nacht</span></div>
              <div className="prop-rating"><span className="prop-stars">★★★★★</span> 4.88 (44)</div>
            </div>
            <a href="#" className="prop-btn">Bekijken →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="gallery-section">
  <div className="section-inner">
    <div className="fade-up">
      <div className="s-eyebrow">Sfeer &amp; inspiratie</div>
      <h2 className="s-title">Woningen die indruk maken</h2>
      <p className="s-sub">Van moderne villa's tot knusse chalets — jouw woning verdient een website die dezelfde sfeer ademt.</p>
    </div>
    <div className="gallery-grid">
      <div className="gallery-item fade-up">
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=85&auto=format&fit=crop" alt="Villa met zwembad" loading="lazy" />
        <div className="gallery-overlay"></div>
        <div className="gallery-label">
          <div className="gallery-label-name">Villa met infinitypool</div>
          <div className="gallery-label-loc">📍 Costa Brava, Spanje</div>
        </div>
      </div>
      <div className="gallery-item fade-up" style={{transitionDelay:"0.07s"}}>
        <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85&auto=format&fit=crop" alt="Luxe slaapkamer" loading="lazy" />
        <div className="gallery-overlay"></div>
        <div className="gallery-label">
          <div className="gallery-label-name">Luxe masterbedroom</div>
          <div className="gallery-label-loc">📍 Knokke, België</div>
        </div>
      </div>
      <div className="gallery-item fade-up" style={{transitionDelay:"0.14s"}}>
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85&auto=format&fit=crop" alt="Terras met uitzicht" loading="lazy" />
        <div className="gallery-overlay"></div>
        <div className="gallery-label">
          <div className="gallery-label-name">Panoramaterras</div>
          <div className="gallery-label-loc">📍 Santorini, Griekenland</div>
        </div>
      </div>
      <div className="gallery-item fade-up" style={{transitionDelay:"0.07s"}}>
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85&auto=format&fit=crop" alt="Design keuken" loading="lazy" />
        <div className="gallery-overlay"></div>
        <div className="gallery-label">
          <div className="gallery-label-name">Open design keuken</div>
          <div className="gallery-label-loc">📍 Amsterdam, Nederland</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="how-section" id="how">
  <div className="section-inner">
    <div className="how-inner">
      <div>
        <div className="s-eyebrow fade-up">Hoe het werkt</div>
        <h2 className="s-title fade-up">Van aanvraag tot<br />online in 3 stappen</h2>
        <p className="s-sub fade-up">Geen technische kennis nodig. Wij regelen alles, jij ontvangt boekingen.</p>
        <div className="how-steps" style={{marginTop:"44px"}}>
          <div className="how-step active fade-up">
            <div className="how-step-num">1</div>
            <div>
              <div className="how-step-title">Vertel ons over jouw woning</div>
              <div className="how-step-desc">Stuur foto's, een beschrijving en jouw wensen. We stellen de nodige vragen om jouw woning perfect in beeld te brengen.</div>
            </div>
          </div>
          <div className="how-step fade-up" style={{transitionDelay:"0.1s"}}>
            <div className="how-step-num">2</div>
            <div>
              <div className="how-step-title">Wij bouwen jouw website</div>
              <div className="how-step-desc">Ons team ontwerpt en ontwikkelt een professionele website op maat — inclusief boekingssysteem en SEO-optimalisatie.</div>
            </div>
          </div>
          <div className="how-step fade-up" style={{transitionDelay:"0.2s"}}>
            <div className="how-step-num">3</div>
            <div>
              <div className="how-step-title">Ontvang directe boekingen</div>
              <div className="how-step-desc">Jouw website gaat live op jouw domeinnaam. Gasten boeken direct — zonder commissie aan externe platforms.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-visual fade-up" style={{transitionDelay:"0.15s"}}>
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85&auto=format&fit=crop" alt="Mooie woning" loading="lazy" />
        <div className="how-visual-overlay"></div>
        <div className="how-visual-badge">
          <div className="hvb-label">Live resultaat</div>
          <div className="hvb-title">Mas Provençal</div>
          <div className="hvb-sub">📍 Provence, Frankrijk</div>
          <div className="hvb-stat">
            <div>
              <div className="hvb-stat-num">+52%</div>
              <div className="hvb-stat-label">Meer boekingen</div>
            </div>
            <div>
              <div className="hvb-stat-num">&euro;3.1k</div>
              <div className="hvb-stat-label">Bespaard/jaar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="features-section" id="features">
  <div className="section-inner">
    <div className="fade-up">
      <div className="s-eyebrow">Features</div>
      <h2 className="s-title">Alles wat je nodig hebt</h2>
      <p className="s-sub">Professionele tools voor elke verhuurder, standaard inbegrepen.</p>
    </div>
    <div className="features-grid">
      <div className="feat-item fade-up">
        <div className="feat-icon">🎨</div>
        <div className="feat-title">Maatwerk design</div>
        <div className="feat-desc">Geen templates. Elke website uniek ontworpen passend bij de sfeer en stijl van jouw woning.</div>
      </div>
      <div className="feat-item fade-up" style={{transitionDelay:"0.05s"}}>
        <div className="feat-icon">📅</div>
        <div className="feat-title">Online boekingssysteem</div>
        <div className="feat-desc">Real-time beschikbaarheidskalender. Gasten boeken direct zonder tussenkomst van Airbnb.</div>
      </div>
      <div className="feat-item fade-up" style={{transitionDelay:"0.1s"}}>
        <div className="feat-icon">💳</div>
        <div className="feat-title">Veilige betalingen</div>
        <div className="feat-desc">Geïntegreerde Stripe-betalingen. Creditcard, Bancontact of iDEAL — automatisch en veilig.</div>
      </div>
      <div className="feat-item fade-up" style={{transitionDelay:"0.15s"}}>
        <div className="feat-icon">📱</div>
        <div className="feat-title">Volledig mobiel</div>
        <div className="feat-desc">Smartphone, tablet of desktop — jouw website ziet er overal perfect uit.</div>
      </div>
      <div className="feat-item fade-up" style={{transitionDelay:"0.2s"}}>
        <div className="feat-icon">🔍</div>
        <div className="feat-title">SEO-geoptimaliseerd</div>
        <div className="feat-desc">Gevonden worden via Google. We optimaliseren voor lokale zoekwoorden zodat gasten jou vinden.</div>
      </div>
      <div className="feat-item fade-up" style={{transitionDelay:"0.25s"}}>
        <div className="feat-icon">📊</div>
        <div className="feat-title">Analytics dashboard</div>
        <div className="feat-desc">Zie hoeveel bezoekers je krijgt en welke kanalen de meeste boekingen opleveren.</div>
      </div>
    </div>
  </div>
</section>


<section className="testimonials-section">
  <div className="section-inner">
    <div className="fade-up">
      <div className="s-eyebrow">Reviews</div>
      <h2 className="s-title">Wat verhuurders zeggen</h2>
    </div>
    <div className="t-grid">
      <div className="t-card fade-up">
        <div className="t-stars">★★★★★</div>
        <div className="t-text">"Binnen een week hadden we al 3 directe boekingen via onze nieuwe website. De commissie die we besparen is enorm. Absoluut een aanrader!"</div>
        <div className="t-author">
          <div className="t-av" style={{background:"linear-gradient(135deg,#7c3aed,#4f46e5)"}}>S</div>
          <div>
            <div className="t-name">Sarah V.</div>
            <div className="t-role">Villa eigenaar · Gent</div>
          </div>
        </div>
      </div>
      <div className="t-card fade-up" style={{transitionDelay:"0.1s"}}>
        <div className="t-stars">★★★★★</div>
        <div className="t-text">"Professioneel, snel en het resultaat overtreft onze verwachtingen. Onze bezettingsgraad steeg van 65% naar 84% in het eerste jaar."</div>
        <div className="t-author">
          <div className="t-av" style={{background:"linear-gradient(135deg,#059669,#34d399)"}}>M</div>
          <div>
            <div className="t-name">Marc D.</div>
            <div className="t-role">Appartement verhuurder · Antwerpen</div>
          </div>
        </div>
      </div>
      <div className="t-card fade-up" style={{transitionDelay:"0.2s"}}>
        <div className="t-stars">★★★★★</div>
        <div className="t-text">"Eindelijk een website die er even professioneel uitziet als mijn woning zelf. Gasten zijn onder de indruk al voor ze aankomen."</div>
        <div className="t-author">
          <div className="t-av" style={{background:"linear-gradient(135deg,#ea580c,#f59e0b)"}}>L</div>
          <div>
            <div className="t-name">Lien B.</div>
            <div className="t-role">Chalet eigenaar · Ardennen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="pricing-section" id="pricing">
  <div className="section-inner">
    <div className="fade-up">
      <div className="s-eyebrow">Prijzen</div>
      <h2 className="s-title">Eerlijk &amp; transparant</h2>
      <p className="s-sub">Geen verborgen kosten. Geen commissie op boekingen. Gewoon een vaste prijs.</p>
    </div>
    <div className="pricing-grid">
      <div className="p-card fade-up">
        <div className="p-plan">Starter</div>
        <div className="p-price">&euro; 499 <span className="p-price-unit">eenmalig</span></div>
        <div className="p-desc">Perfect voor één woning die snel online moet.</div>
        <div className="p-divider"></div>
        <ul className="p-features">
          <li className="p-feature"><span className="p-check">✓</span> Maatwerk design (5 pagina's)</li>
          <li className="p-feature"><span className="p-check">✓</span> Mobieloptimalisatie</li>
          <li className="p-feature"><span className="p-check">✓</span> Contactformulier</li>
          <li className="p-feature"><span className="p-check">✓</span> Google Analytics</li>
          <li className="p-feature"><span className="p-check">✓</span> 1 jaar hosting</li>
          <li className="p-feature"><span className="p-cross">✗</span> Online boekingssysteem</li>
          <li className="p-feature"><span className="p-cross">✗</span> Stripe betalingen</li>
        </ul>
        <a className="p-btn p-btn-dark" href="https://buy.stripe.com/test_dRmaEW9ed4mC2RagCkbQY00" target="_blank" rel="noopener">Starten →</a>
      </div>
      <div className="p-card featured fade-up" style={{transitionDelay:"0.1s"}}>
        <div className="p-badge">Meest populair</div>
        <div className="p-plan">Pro</div>
        <div className="p-price">&euro; 899 <span className="p-price-unit">eenmalig</span></div>
        <div className="p-desc">Het complete pakket voor serieuze verhuurders.</div>
        <div className="p-divider"></div>
        <ul className="p-features">
          <li className="p-feature"><span className="p-check">✓</span> Maatwerk design (10 pagina's)</li>
          <li className="p-feature"><span className="p-check">✓</span> Mobieloptimalisatie</li>
          <li className="p-feature"><span className="p-check">✓</span> Online boekingssysteem</li>
          <li className="p-feature"><span className="p-check">✓</span> Stripe betalingen</li>
          <li className="p-feature"><span className="p-check">✓</span> SEO-optimalisatie</li>
          <li className="p-feature"><span className="p-check">✓</span> Analytics dashboard</li>
          <li className="p-feature"><span className="p-check">✓</span> 2 jaar hosting</li>
        </ul>
        <a className="p-btn p-btn-white" href="https://buy.stripe.com/test_dRm7sKcqp1aq2Rabi0bQY01" target="_blank" rel="noopener">Starten →</a>
      </div>
      <div className="p-card fade-up" style={{transitionDelay:"0.2s"}}>
        <div className="p-plan">Multi</div>
        <div className="p-price">Op maat</div>
        <div className="p-desc">Voor verhuurders met meerdere woningen of specifieke wensen.</div>
        <div className="p-divider"></div>
        <ul className="p-features">
          <li className="p-feature"><span className="p-check">✓</span> Meerdere woningen</li>
          <li className="p-feature"><span className="p-check">✓</span> Eigen CMS-beheer</li>
          <li className="p-feature"><span className="p-check">✓</span> Channel manager integratie</li>
          <li className="p-feature"><span className="p-check">✓</span> Prioriteitssupport</li>
          <li className="p-feature"><span className="p-check">✓</span> Alle Pro-features</li>
          <li className="p-feature"><span className="p-check">✓</span> Dedicated accountmanager</li>
          <li className="p-feature"><span className="p-check">✓</span> Maandelijkse rapportage</li>
        </ul>
        <a href="mailto:info@boostmyrealestate.com" className="p-btn p-btn-outline">Contact →</a>
      </div>
    </div>
  </div>
</section>


<section className="cta-section">
  <div className="cta-photo"></div>
  <div className="cta-overlay"></div>
  <div className="cta-content fade-up">
    <h2 className="cta-title">Klaar om directe boekingen te ontvangen?</h2>
    <p className="cta-sub">Sluit je aan bij 140+ verhuurders die al minder commissie betalen en meer verdienen met hun eigen website.</p>
    <div className="cta-actions">
      <a href="#pricing" className="btn-white">Start jouw website →</a>
      <a href="mailto:info@boostmyrealestate.com" className="btn-glass-light">📧 Stel een vraag</a>
    </div>
  </div>
</section>


<footer>
  <div className="footer-inner">
    <div className="footer-top">
      <div>
        <a href="#" className="footer-logo">
          <div className="footer-logo-mark">🏠</div>
          BoostMyRealEstate
        </a>
        <p className="footer-tagline">Professionele websites voor Airbnb-verhuurders. Meer directe boekingen, minder commissie aan platforms.</p>
      </div>
      <div className="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="#examples">Voorbeelden</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Prijzen</a></li>
          <li><a href="#how">Hoe het werkt</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Bedrijf</h4>
        <ul>
          <li><a href="#">Over ons</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@boostmyrealestate.com">info@boostmyrealestate.com</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-copy">© 2025 BoostMyRealEstate. Alle rechten voorbehouden.</div>
      <div className="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Algemene voorwaarden</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
      </div>
    </>
  )
}
