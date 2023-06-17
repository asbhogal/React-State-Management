import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/usestatehook">useState</Link>
        </li>
        <li>useReducer</li>
        <li>useMemo & useCallback</li>
        <li>useEffect</li>
        <li>useRef</li>
        <li>Context & Custom Hooks</li>
        <li>React Query & React Location</li>
        <li>Zustand</li>
        <li>Valtio</li>
        <li>Jotai</li>
        <li>Redux</li>
      </ul>
    </nav>
  );
};

export default Home;
