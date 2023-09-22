import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <button aria-label="Return back to the home page">Back</button>
    </Link>
  );
}
