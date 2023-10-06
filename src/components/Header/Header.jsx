import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <button>Log in</button>
      <button>Registration</button>
    </div>
  );
};

export default Header;
