import conectarBD from "./db/db";
import { UserModel } from './models/user'

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo: "test@test.com",
        identificacion: "123",
        nombre: "Karla",
        apellido: "Diaz"
    })

    .then((u) => {
        console.log('usuario creado', u);
    })
    .catch((e) => {
        console.error("Error creando el usuario", e);
    })


};
main();