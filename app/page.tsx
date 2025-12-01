export default function Home() {
  return (
    <div>
      <nav className="fixed top-6 left-1/2 flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/30 px-8 py-4 shadow-lg backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-900/30">
        <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
          Hack Line
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6 text-neutral-800 dark:text-neutral-200">
          <a href="/" className="font-medium">
            Home
          </a>
          <a href="https://hcb.hackclub.com/donations/start/hackline">Donate</a>
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button id="menu-btn">
            <img
              src="https://icons.hackclub.com/api/icons/dark/menu"
              alt="Menu"
              className="w-8 h-8 dark:hidden"
            />
            <img
              src="https://icons.hackclub.com/api/icons/snow/menu"
              alt="Menu"
              className="w-8 h-8 hidden dark:flex"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className="sm:hidden absolute top-24 left-1/2 w-[90%] max-w-5xl mt-2 -translate-x-1/2 rounded-2xl border border-white/40 bg-white/70 dark:border-neutral-800/40 dark:bg-neutral-900/70 backdrop-blur-md shadow-lg p-6 flex flex-col gap-4 text-neutral-800 dark:text-neutral-200 opacity-0 pointer-events-none transform -translate-y-4 transition-all duration-300 ease-in-out"
      >
        <a href="/" className="font-medium">
          Home
        </a>
        <a href="https://hcb.hackclub.com/donations/start/hackline">Donate</a>
        <a href="/login">Login</a>
        <a href="/register">Sign Up</a>
      </div>
    </div>
  );
}
