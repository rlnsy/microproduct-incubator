import trilemmaLogo from "../../assets/landing/foundation_white.webp";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-brand-black to-brand-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center h-14 sm:h-16">
          <a href="/" className="flex items-center space-x-2 group min-h-touch">
            <img
              src={trilemmaLogo}
              alt="Trilemma Foundation Logo"
              width={120}
              height={32}
              className="h-6 sm:h-8 w-auto group-hover:scale-105 transition-transform"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
