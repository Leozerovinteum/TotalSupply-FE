
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow">
      <ul className="flex gap-6">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/obras">Obras</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
