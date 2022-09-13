import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { useHistory } from "react-router-dom";
import Logo from '../components/layout/partials/Logo';

function LayoutAdmin() {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" >
                    <Logo />
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    {store.usuario.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-between align-items-center">
                        <Nav.Link>
                            <button 
                            className="mt-2 button button-primary button-wide-mobile button-sm"
                            onClick={() => {actions.logout(history);}}
                            >
                                Sign Off
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LayoutAdmin;