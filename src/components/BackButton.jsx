import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <button aria-label="Return to the home page">Back</button>
    </Link>
  );
}
