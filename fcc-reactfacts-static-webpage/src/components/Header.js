import classes from "./Header.module.css";
import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav className={classes.nav}>
        <h1 className={classes.cen}>
          <img src={logo} alt="logo" className={classes.navlogo} />
          ReactFacts
        </h1>
        <ol className={`${classes.navbar} ${classes.f900B}`}>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </nav>
    </header>
  );
}
