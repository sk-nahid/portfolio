export default function Navbar() {
  const menuItems = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

    return (
      <div className="bg-base-100 shadow-md px-4 md:px-8 sticky top-1 z-50">
    <div className="navbar lg:max-w-7xl mx-auto">
      {/* Left: Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold tracking-wide">S.K. Nahid</a>
      </div>

      {/* Center: Menu (hidden on small screens) */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      {/* Right: Resume Button */}
      <div className="flex-none hidden md:block">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
          <li className="mt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
            </div>
            </div>
  );
}
