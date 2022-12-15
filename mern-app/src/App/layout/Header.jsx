import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="link">
          Posts
        </Link>
        <Link to="/shops" className="link">
          Shops
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
