import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">דף הבית</Link>
      </li>
      <li>
        <Link to="/about">אודות</Link>
      </li>
      <li>
        <Link to="/contact">צור קשר</Link>
      </li>
    </ul>
  );
}
