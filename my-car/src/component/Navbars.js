import { useAuthContext } from "../hooks/useAuthContext";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { useLogout } from "../hooks/useLogout";
export default function Navbars() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div>
      <Navbar color="primary" expand="md" dark>
        <NavbarBrand href="/">Car Tracker</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {!user && (
              <>
                <NavItem>
                  <NavLink href="/login/">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup/">Sign Up</NavLink>
                </NavItem>
              </>
            )}
            {user && (
              <>
                <NavItem>
                  <NavLink>Hello, {user.displayName}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
