import conectarBD from "./db/db";
import { UserModel } from './models/user'
import {Enum_Rol} from './models/enums';

const main = async () => {
    await conectarBD();

    await UserModel.create({
        apellido: "Cortes",
        correo: "test3@test.com",
        identificacion: 126,
        nombre: "Tatiana",
        rol: Enum_Rol.Lider
    })

    .then((u) => {
        console.log('usuario creado', u);
    })
    .catch((e) => {
        console.error("Error creando el usuario", e);
    })


};
main();