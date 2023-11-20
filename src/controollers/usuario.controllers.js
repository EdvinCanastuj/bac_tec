import { getConnection } from "./../db/database";
const getUsuario = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuario;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };
    // metodo para insertar
    
    // metodo para actualizar
    
    // metodo para eliminar
    
    export const methods = {
        getUsuario
    }
    