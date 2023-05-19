import Link from "next/link";

export const Nav = () => {
  return (
    <div className="header">
      <a className="header-logo" href="#">StoryBook</a>
      <div className="menu-main">
        <ul>
          <li>
            <Link href="/" className="px-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="px-4">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="px-4">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="px-4">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div id="toggle-menu-main-mobile" className="hamburger-trigger">
        <button className="hamburger">Menu</button>
      </div>
    </div>
  );
};
