import headerLogo from "../assets/images/header-logo.svg";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="font-montesserrat leading-normal text-lg text-slate-gray" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div>
            <img src={hamburger} alt="hamburger" width={25} height={25} className="cursor-pointer max-lg:block hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
