import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { PersonFill } from "react-bootstrap-icons";

function NavBar() {
  // const [showSignOutDropdown, setShowSignOutDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsLoggedIn(true);
      } else {
        setAuthUser(null);
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((error) => console.log("Sign out error:", error));
  };

  return (
    <>
      <Navbar fluid="true" bg="dark" variant="dark" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="navbar-brand mb-0 h1 mx-auto d-flex align-items-center"
            style={{ fontSize: "2rem" }}
          >
            <img
              className="d-inline-block "
              src={process.env.PUBLIC_URL + "/Caplogo2.png"}
              width="100"
              height="100"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto h2">
              <Link to="/about" className="nav-link m-2">
                About
              </Link>
              <Link to="/search" className="nav-link m-2">
                Search
              </Link>
              {isLoggedIn ? (
                <Dropdown className="avatar-dropdown">
                  <Dropdown.Toggle
                    variant="bg-transparent"
                    id="account-dropdown-toggle"
                    // className="lg"
                  >
                    <PersonFill className="avatar-icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => console.log("Profile")}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => console.log("Settings")}>
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleSignOut}>
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login" className="nav-link m-2">
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
