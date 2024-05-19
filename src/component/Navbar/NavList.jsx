import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className="nav__link">
      <div
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
      </Link>
  );
};

export default NavItem;
