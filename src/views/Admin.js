import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import LayoutAdmin from "../layouts/LayoutAdmin";
import Listpage from "../components/sections/ListPage";

const Admin = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    let token = localStorage.getItem("token")
    useEffect(() => {
        
        if (token) {
           actions.getladingpage();
        } else {
            history.push("/login");
        }
    }, []);

    const createPage = () => {
        history.push('/createPage');
    }

    console.log(store);
    return (
        <>
            <LayoutAdmin />
            <Container fluid>
                <Row>
                    <Col>
                        <button className="mt-3 mb-3 button button-primary button-wide-mobile button-sm" onClick={() => { createPage(); }}>Crear Nueva Page</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Listpage listpage={store.listInfoPages} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;