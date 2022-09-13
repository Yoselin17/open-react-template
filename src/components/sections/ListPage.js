import React, { useContext } from "react";
import { Context } from '../../store/appContext';
import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom";

const Listpage = (props) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
   
    const updatePage = (page) => {
        history.push('/updatePage', {page});
    }

    console.log(props);
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.listpage.map((list, index) => {
                    return (
                        <tr>
                            <td>{index = 1}</td>
                            <td>{list.titulo}</td>
                            <td>
                                <button className="button button-primary button-wide-mobile button-sm" onClick={()=> updatePage(list)}>Editar</button>
                                <button className="button button-primary button-wide-mobile button-sm" onClick={() => { actions.removeInfoLadingPage(list.id) }}>Eliminar</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>

    );
};

export default Listpage;