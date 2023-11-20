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
        const sql = `INSERT INTO usuario (nombre, apellido, correo, cel, password, tipo_rol) VALUES (?, ?, ?, ?, ?, ?);`;
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

    
    // metodo para eliminar
const deleteUsuario = async (req, res) => {
        try {
        const { id_usuario } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE id_usuario = ?;", [id_usuario]);
        res.json(result);
        } catch (error) {
        res.status(500).send(error.message);
        }
    };
    // metodo para actualizar
const updateUsuario = async (req, res) => {
        try {
        const { id_usuario } = req.params;
        const { nombre,apellido,correo,cel,password,tipo_rol} = req.body;

        if (!id_usuario || !nombre || !apellido || !correo || !cel || !password || !tipo_rol ) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
            
        }
        const usuario = { nombre,apellido,correo,cel,password,tipo_rol };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE id_usuario = ?;", [usuario, id_usuario]);
        res.json("updated successfully");
        } catch (error) {
        res.status(500).send(error.message);
        }
    };
export const methods = {
    getUsuario, 
    addUsuario,
    deleteUsuario,
    updateUsuario
    }    