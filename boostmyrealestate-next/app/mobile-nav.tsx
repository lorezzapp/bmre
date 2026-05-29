'use client';

export function MobileNav() {
  const handleLinkClick = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.nav-hamburger');
    mobileNav?.classList.remove('open');
    hamburger?.classList.remove('open');
  };

  return (
    <div className="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobiel menu">
      <a href="#examples" onClick={handleLinkClick}>Voorbeelden</a>
      <a href="#how" onClick={handleLinkClick}>Hoe het werkt</a>
      <a href="#features" onClick={handleLinkClick}>Features</a>
      <a href="#pricing" onClick={handleLinkClick}>Prijzen</a>
      <a href="#pricing" className="mob-cta" onClick={handleLinkClick}>Gratis starten →</a>
    </div>
  );
}
