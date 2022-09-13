import React, { useContext } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import { Context } from '../../store/appContext';
import LayoutAdmin from '../../layouts/LayoutAdmin';
import { useHistory } from "react-router-dom";

function CreatePage() {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        const infoladingpage = {
            image_1: evento.target[0].value,
            image_2: evento.target[1].value,
            image_3: evento.target[2].value,
            info_1: evento.target[3].value,
            info_2: evento.target[4].value,
            info_3: evento.target[5].value,
            titulo: evento.target[6].value,
            Subtitulo: evento.target[7].value,
            video: evento.target[8].value,
            tips_1: evento.target[9].value,
            tips_2: evento.target[10].value,
            tips_3: evento.target[11].value,
            tips_4: evento.target[12].value,
            tips_5: evento.target[13].value,
            tips_6: evento.target[14].value
        }
        actions.createInfoLadingPage(infoladingpage, history);
    };
    
    return (
        <>
            <LayoutAdmin />
            <Container className="d-flex justify-content-center">
                <Card className="mt-3" style={{ width: '24rem' }}>
                    <Card.Header as="h5" className="text-center">Ingrese nueva page</Card.Header>
                    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <Form.Label className="form-label">Imagen 1:</Form.Label>
                            <Form.Control type="text" name="image_1" />
                            <Form.Label className="form-label">Imagen 2:</Form.Label>
                            <Form.Control type="text" name="image_2" />
                            <Form.Label className="form-label">Imagen 3:</Form.Label>
                            <Form.Control type="text" name="image_3" />
                            <Form.Label className="form-label">Info 1:</Form.Label>
                            <Form.Control type="text" name="info_1" />
                            <Form.Label className="form-label">Info 2:</Form.Label>
                            <Form.Control type="text" name="info_2" />
                            <Form.Label className="form-label">Info 3:</Form.Label>
                            <Form.Control type="text" name="info_3" />
                            <Form.Label className="form-label">Titulo:</Form.Label>
                            <Form.Control type="text" name="titulo"/>
                            <Form.Label className="form-label">Subtitulo:</Form.Label>
                            <Form.Control type="text" name="Subtitulo"/>
                            <Form.Label className="form-label">Video:</Form.Label>
                            <Form.Control type="text" name="video"/>
                            <Form.Label className="form-label">Tips 1:</Form.Label>
                            <Form.Control type="text" name="tips_1"/>
                            <Form.Label className="form-label">Tips 2:</Form.Label>
                            <Form.Control type="text" name="tips_2"/>
                            <Form.Label className="form-label">Tips 3:</Form.Label>
                            <Form.Control type="text" name="tips_3"/>
                            <Form.Label className="form-label">Tips 4:</Form.Label>
                            <Form.Control type="text" name="tips_4"/>
                            <Form.Label className="form-label">Tips 5:</Form.Label>
                            <Form.Control type="text" name="tips_5"/>
                            <Form.Label className="form-label">Tips 6:</Form.Label>
                            <Form.Control type="text" name="tips_6"/>
                            <button className="mt-2 button button-primary button-wide-mobile button-sm">Guardar</button>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CreatePage;