import styles from "./Navbar.module.css";
import { ActiveLinks } from "./ActiveLinks";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={styles["menu-container"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLinks key={href} text={text} href={href} />
        ))}
      </nav>
    </>
  );
};
