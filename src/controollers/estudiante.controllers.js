import { getConnection } from "./../db/database";
// metodo para obtener
const getEstudiante = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM estudiante;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };
// metodo para insertar
const addEstudiante = async (req, res) => {
    try {
        const {
        nombres,
        apellidos,
        grado
        } = req.body;

        const connection = await getConnection();
          // Calculamos el valor total en la consulta SQL
        const sql = `INSERT INTO estudiante (nombres, apellidos, grado) VALUES (?, ?, ?);`;
        const result = await connection.query(sql, [
            nombres,
            apellidos,
            grado
        ]);
        res.json({ message: "Estudiante Added" });
        } catch (error) {
        console.error("Error al insertar estudiante:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        }
    };

// metodo para eliminar
const deleteEstudiante = async (req, res) => {
        try {
        const { id_estudiante } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM estudiante WHERE id_estudiante = ?;", [id_estudiante]);
        res.json({ message: "Estudiante Deleted" });
        } catch (error) {
        res.status(500).send(error.message);
        }
    };
// metodo para actualizar
const updateEstudiante = async (req, res) => {
        try {
        const { id_estudiante } = req.params;
        const { nombres,apellidos,grado} = req.body;

        if (!id_estudiante || !nombres || !apellidos || !grado) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }
        const connection = await getConnection();
        const sql = `UPDATE estudiante SET nombres = ?, apellidos = ?, grado = ? WHERE id_estudiante = ?;`;
        const result = await connection.query(sql, [
            nombres,
            apellidos,
            grado,
            id_estudiante
        ]);
        res.json({ message: "Estudiante Updated" });
        } catch (error) {
        res.status(500).send(error.message);
        }
    };

export const methods = {
    getEstudiante,
    addEstudiante,
    deleteEstudiante,
    updateEstudiante
};
