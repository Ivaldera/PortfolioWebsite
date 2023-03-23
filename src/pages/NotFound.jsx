// This is the NotFound page //
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>

      <div className="content">
        <p>Nothing to see here! Go to the <Link to="/">home page</Link>.</p>
      </div>
    </main>
  );
}