import React, { useContext, useState, useEffect } from "react";
import { Container, Card, Form } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";
import LayoutAdmin from '../../layouts/LayoutAdmin';
import { Context } from '../../store/appContext';

const UpdatePage = () => {
    const { store, actions } = useContext(Context);
    const [edit, setEdit] = useState({
        image_1: "",
        image_2: "",
        image_3: "",
        info_1: "",
        info_2: "",
        info_3: "",
        titulo: "",
        Subtitulo: "",
        video: "",
        tips_1: "",
        tips_2: "",
        tips_3: "",
        tips_4: "",
        tips_5: "",
        tips_6: ""
    });
    const history = useHistory();
    const location = useLocation();
    const state = location.state;
    console.log(state);

    useEffect(() => {
        setEdit({
            image_1: "" || state.page?.image_1,
            image_2: "" || state.page?.image_2,
            image_3: "" || state.page?.image_3,
            info_1: "" || state.page?.info_1,
            info_2: "" || state.page?.info_2,
            info_3: "" || state.page?.info_3,
            titulo: "" || state.page?.titulo,
            Subtitulo: "" || state.page?.Subtitulo,
            video: "" || state.page?.video,
            tips_1: "" || state.page?.tips_1,
            tips_2: "" || state.page?.tips_2,
            tips_3: "" || state.page?.tips_3,
            tips_4: "" || state.page?.tips_4,
            tips_5: "" || state.page?.tips_5,
            tips_6: "" || state.page?.tips_6
        });
    }, [state]);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        setEdit({ ...edit, [e.target.name]: e.target.value });
    };

    return (
        <><LayoutAdmin />
            <Container className="d-flex justify-content-center">
                <Card className="mt-3" style={{ width: '24rem' }}>
                    <Card.Header as="h5" className="text-center">Modificar page</Card.Header>
                    <Card.Body>
                        <form>
                            <Form.Label className="form-label">Imagen 1:</Form.Label>
                            <Form.Control type="text" name="image_1" value={edit.image_1} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Imagen 2:</Form.Label>
                            <Form.Control type="text" name="image_2" value={edit.image_2} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Imagen 3:</Form.Label>
                            <Form.Control type="text" name="image_3" value={edit.image_3} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Info 1:</Form.Label>
                            <Form.Control type="text" name="info_1" value={edit.info_1} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Info 2:</Form.Label>
                            <Form.Control type="text" name="info_2" value={edit.info_2} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Info 3:</Form.Label>
                            <Form.Control type="text" name="info_3" value={edit.info_3} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Titulo:</Form.Label>
                            <Form.Control type="text" name="titulo" value={edit.titulo} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Subtitulo:</Form.Label>
                            <Form.Control type="text" name="Subtitulo" value={edit.Subtitulo} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Video:</Form.Label>
                            <Form.Control type="text" name="video" value={edit.video} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 1:</Form.Label>
                            <Form.Control type="text" name="tips_1" value={edit.tips_1} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 2:</Form.Label>
                            <Form.Control type="text" name="tips_2" value={edit.tips_2} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 3:</Form.Label>
                            <Form.Control type="text" name="tips_3" value={edit.tips_3} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 4:</Form.Label>
                            <Form.Control type="text" name="tips_4" value={edit.tips_4} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 5:</Form.Label>
                            <Form.Control type="text" name="tips_5" value={edit.tips_5} onChange={(e) => handleChange(e)} />
                            <Form.Label className="form-label">Tips 6:</Form.Label>
                            <Form.Control type="text" name="tips_6" value={edit.tips_6} onChange={(e) => handleChange(e)} />
                            <button onClick={() => { actions.updateInfoLadingPage(edit, state.page.id, history) }}>Enviar</button>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default UpdatePage;