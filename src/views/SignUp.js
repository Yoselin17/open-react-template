import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Container, Form, Card } from 'react-bootstrap';

const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [mensaje, setmensaje] = useState("");
    let history = useHistory();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        const name = evento.target[0].value;
        const email = evento.target[1].value;
        const password = evento.target[2].value;
        const repeatedPassword = evento.target[3].value;
        if (password === repeatedPassword) {
            actions.registrarFunction(name, email, password); 
            history.push("/login", { replace: true });
        } else {
            setmensaje("Las contraseña no coincide.");
        }
    };

    return (
        <Container className="d-flex justify-content-center">
        <Card className="mt-3" style={{ width: '24rem' }}>
            <Card.Header as="h5" className="text-center">Registrarse</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <Form.Control className="mt-2" type="text" placeholder="Ingrese su nombre" />
                    <Form.Control className="mt-2" type="email" placeholder="Ingrese su correo" />
                    <Form.Control className="mt-2" type="password" placeholder="Ingrese su contraseña" />
                    <Form.Control className="mt-2" type="password" placeholder="Repita su contraseña" />
                    <button className="mt-2 button button-primary button-wide-mobile button-sm">Enviar</button>
                    {mensaje}
                </form>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default SignUp;