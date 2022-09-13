const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            usuario: {},
            permiso: false,
            nombre: "",
            listInfoPages: [],
            detallepage: {},
            showLading: {}
        },
        actions: {
            registrarFunction: (name, email, password) => {
                const posData = {
                    name: name,
                    email: email,
                    password: password,
                };
                fetch("http://127.0.0.1:5000/api/register", { //aqui lo uno con el back
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(posData),
                })
                    .then((response) => response.json())
                    .then((data) => data);
            },
            iniciarSesionFuncion: (email, password, history) => { //esto debe ser igual a lo que agregue al postman.
                const postData = {
                    email: email,
                    password: password,
                };
                localStorage.clear();
                fetch("http://127.0.0.1:5000/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify(postData),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.token) {
                            localStorage.setItem("token", data.token);
                            setStore({
                                usuario: data.user,
                            });
                            history.push("/admin");
                        } else {
                            localStorage.clear();
                            setStore({
                                mensaje: data.mensaje,
                            });
                        }
                    });
            },
            privateFuncion: () => {
                fetch("http://127.0.0.1:5000/api/private", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                    redirect: "follow",
                })
                    .then((response) => response.json())
                    .then((result) => {
                        //console.log(result);
                        setStore({
                            permiso: result.permiso,
                        });
                    })
                    .catch((error) => console.log("error", error));
            },
            logout: (history) => {
                //es para cerrar la sesion, donde ingresa mail y contrase;a.
                const store = getStore();
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("nombre");
                store.permiso = false;
                history.push('/');
            },
            createInfoLadingPage: (infoladingpage, history) => {
                console.log(infoladingpage);
                fetch("http://127.0.0.1:5000/api/createPage", {     //aqui uno el front  con el back
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(infoladingpage),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        history.push('/admin');
                    });
            },
            getladingpage: () => {
                const actions = getActions();
                fetch("http://127.0.0.1:5000/api/getladingpage", {     //aqui uno el front  con el back
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })
                    .then(response => response.json())
                    .then(data => actions.getData(data))
            },
            getData: (data) => {
                setStore({ listInfoPages: data })
            },
            getpage: (id) => {
                console.log(id)
                const store = getStore();
                const info = store.listInfoPages.filter(info => info.id === id);
                console.log(info)
                setStore({ detallepage: info[0] });
            },
            updateInfoLadingPage: (infoladingpage, id, history) => {
                console.log(id);
                console.log(infoladingpage);
                console.log("entroooo........");
                fetch("http://127.0.0.1:5000/api/updatePage/" + id, {     //aqui uno el front  con el back
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(infoladingpage),
                })
                    .then((response) => response.json())
                    .then((data) => data);
                history.push('/admin');
            },
            removeInfoLadingPage: (id) => {
                const actions = getActions();
                fetch("http://127.0.0.1:5000/api/deletepage/" + id, {     //aqui uno el front  con el back
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },

                })
                    .then((response) => response.json())
                    .then(data => actions.getData(data))
            },

            oneLadinPage: () => {
                const actions = getActions();
                fetch("http://127.0.0.1:5000/api/showlading", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                })
                .then((response) => response.json())
                .then(data => actions.getShow(data.info))
            },

            getShow: (data) => {
                setStore({ showLading: data })
            },
        },
    };
};

export default getState;