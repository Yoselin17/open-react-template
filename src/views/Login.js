import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { useHistory } from "react-router-dom";
import { Container, Form, Card } from 'react-bootstrap';

const Login = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    const handleSubmit = (evento) => {
        console.log("entroo");
        evento.preventDefault();
        const correo = evento.target[0].value;
        const pass = evento.target[1].value;
        actions.iniciarSesionFuncion(correo, pass, history);
    };
    console.log(store);
    return (
        <Container className="d-flex justify-content-center">
            <Card className="mt-3" style={{ width: '24rem' }}>
                <Card.Header as="h5" className="text-center">Iniciar sesión</Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <Form.Control className="mt-2" type="email" placeholder="Ingrese Correo" />
                        <Form.Control className="mt-2" type="password" placeholder="Ingrese Contraseña" />
                        <h3>{store.mensaje}</h3>
                        <button className="mt-2 button button-primary button-wide-mobile button-sm">Ingresar</button>
                    </form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;