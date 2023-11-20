import { getConnection } from "./../db/database";
const getUsuario = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT u.nombre, u.apellido, r.tipo_rol FROM usuario u INNER JOIN rol r ON r.id_rol = u.tipo_rol ;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };
    // metodo para insertar
    const addUsuario = async (req, res) => {
        try {
        const {
        nombre,
        apellido,
        correo,
        cel,
        password,
        tipo_rol
        } = req.body;
        const connection = await getConnection();
          // Calculamos el valor total en la consulta SQL
        const sql = "INSERT INTO usuario (nombre, apellido, correo, cel, password, tipo_rol) VALUES (?, ?, ?, ?, ?, ?);";
        const result = await connection.query(sql, [
            nombre,
            apellido,
            correo,
            cel,
            password,
            tipo_rol
        ]);
        res.json({ message: "Usuario Added" });
        } catch (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        }
    };
    // metodo para actualizar
    
    // metodo para eliminar

    // metodo para actualizar
    
    // metodo para eliminar
    
    export const methods = {
        getUsuario,
        addUsuario
    }
    