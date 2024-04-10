import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
      <h1>Homepage</h1>
      <div>
        <button>
          <Link to={`route1`}>Clicker</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={`route2`}>Funny React logo spinning</Link>
        </button>
      </div>
      </>
    );
  }
  