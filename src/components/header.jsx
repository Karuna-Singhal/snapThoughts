import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div class="logo">
        <img src="logo.png" alt="Today I Learned Logo" />
        <h1>Blog</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
