/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip, CardImg,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={require("assets/images/logo.png")}
            style={{width: "60px"}}
        />
        <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
        >
          <span className="navbar-toggler-bar bar1"/>
          <span className="navbar-toggler-bar bar2"/>
          <span className="navbar-toggler-bar bar3"/>
        </button>
        <Collapse
            className={"justify-content-center " + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/images/logo.png")}
                      style={{width: "60px"}}
                  />
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove"/>
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none"/>
                Features
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper"/>
                  Feature 1
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67"/>
                  Feature 2
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02"/>
                  Feature 3
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02"/>
                  Feature 4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                  active
                  href="#"
              >
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  active
                  href="#"
              >
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  active
                  href="#"
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  active
                  href="#"
              >
                Support
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  active
                  href="#"
              >
                Wishlist
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Collapse className={"justify-content-end"} navbar
                  isOpen={collapseOpen}
                  onExiting={onCollapseExiting}
                  onExited={onCollapseExited}>
            <Button className="btn-link" color="success">
              Sign in
            </Button>
            <Button color="success">Sign up</Button>
        </Collapse>
      </Container>
    </Navbar>
  );
}
