import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ul>
          <li>
            <Link to="/UseStateHook">useState</Link>
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
      </main>
    </>
  );
};

export default Home;
