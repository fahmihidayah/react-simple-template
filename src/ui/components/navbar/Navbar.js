import Nav from "react-bootstrap/Nav";
import { Link, useRouteLoaderData, Form } from "react-router-dom";

const Navbar = () => {
  const token = useRouteLoaderData("root");
  console.log(token)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            The News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex">
              {token && (
                <>
                <Form action="/logout" method="post">
                  <button className="btn btn-primary me-1">Logout</button>
                </Form>
                <Link className="btn btn-success" to={"/profile"}>Profile</Link>
                </>
              )}
              {!token && (
                <>
                  <Link className="btn btn-primary me-1" to={"/login"}>
                    Login
                  </Link>
                  <Link className="btn btn-success" to={"/register"}>
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
