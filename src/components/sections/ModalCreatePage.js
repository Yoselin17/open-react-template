import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalCreatePage(props) {
    const [add, setAdd] = useState({
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
    console.log(props);
    useEffect(() => {
        setAdd({
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
    }, [props]);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        setAdd({ ...add, [e.target.name]: e.target.value });
    };

    return (

        <Modal size="lg" show={props.modal}>
            <Modal.Header>
                <Modal.Title>Ingrese nueva info</Modal.Title>
                <button className="btn btn-outline-danger" onClick={props.change}>
                    x
                </button>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e) => {
                    props.call(add, e);
                    props.change();
                }}>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Imagen 1:</Form.Label>
                        <Form.Control type="text" name="image_1" value={add.image_1} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Imagen 2:</Form.Label>
                        <Form.Control type="text" name="image_2" value={add.image_2} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Imagen 3:</Form.Label>
                        <Form.Control type="text" name="image_3" value={add.image_3} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Info 1:</Form.Label>
                        <Form.Control type="text" name="info_1" value={add.info_1} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Info 2:</Form.Label>
                        <Form.Control type="text" name="info_2" value={add.info_2} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Info 3:</Form.Label>
                        <Form.Control type="text" name="info_3" value={add.info_3} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Titulo:</Form.Label>
                        <Form.Control type="text" name="titulo" value={add.titulo} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Subtitulo:</Form.Label>
                        <Form.Control type="text" name="Subtitulo" value={add.Subtitulo} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Video:</Form.Label>
                        <Form.Control type="text" name="video" value={add.video} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Tips 1:</Form.Label>
                        <Form.Control type="text" name="tips_1" value={add.tips_1} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Tips 2:</Form.Label>
                        <Form.Control type="text" name="tips_2" value={add.tips_2} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Tips 3:</Form.Label>
                        <Form.Control type="text" name="tips_3" value={add.tips_3} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Tips 4:</Form.Label>
                        <Form.Control type="text" name="tips_4" value={add.tips_4} onChange={(e) => handleChange(e)} />
                        <Form.Label className="form-label">Tips 5:</Form.Label>
                        <Form.Control type="text" name="tips_5" value={add.tips_5} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">Tips 6:</Form.Label>
                        <Form.Control type="text" name="tips_6" value={add.tips_6} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button>Enviar</Button>
                    </Form.Group>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalCreatePage;