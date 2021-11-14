import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://admin:admin123@gestionproyectosneklo.4rlgm.mongodb.net/gestionProyectos?retryWrites=true&w=majority'
    )
        .then(() => {
            console.log("Conexión exitosa")
        })
        .catch((e) => {
            console.error("Error de conexión", e)
        });


};

export default conectarBD;

