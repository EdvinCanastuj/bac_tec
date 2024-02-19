import { getConnection } from "../db/database";

const getDemerito = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT d.id_demerito,  CONCAT(u.nombre, ' ', u.apellido) AS Profesor, d.fecha, r.tipo_razon, CONCAT(e.nombres, ' ', e.apellidos) AS Estudiante, g.grado, d.curso, d.cantidad " +
        "FROM demerito d " +
        "INNER JOIN usuario u ON d.id_usuario = u.id_usuario " +
        "INNER JOIN razon r ON d.id_razon = r.id_razon " +
        "INNER JOIN estudiante e ON d.id_estudiante = e.id_estudiante " +
        "INNER JOIN grado g ON e.id_estudiante = g.id_grado;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getDemeritos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT d.id_demerito, u.nombre, u.apellido, d.fecha, r.tipo_razon, e.nombres, e.apellidos, g.grado, d.curso, d.cantidad, d.comentario, d.id_razon, d.id_estudiante " +
        "FROM demerito d " +
        "INNER JOIN usuario u ON d.id_usuario = u.id_usuario " +
        "INNER JOIN razon r ON d.id_razon = r.id_razon " +
        "INNER JOIN estudiante e ON d.id_estudiante = e.id_estudiante " +
        "INNER JOIN grado g ON e.id_estudiante = g.id_grado;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const addDemerito = async (req, res) => {
    try {
        const { id_usuario, id_razon, id_estudiante, curso, cantidad, comentario } = req.body;
        if (!id_usuario || !id_razon  || !id_estudiante || !curso || !cantidad || !comentario) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }
        const connection = await getConnection();
        const sql = `INSERT INTO demerito (id_usuario, id_razon, fecha, id_estudiante, curso, cantidad, comentario) VALUES (?, ?, NOW(), ?, ?, ?, ?);`;
        const result = await connection.query(sql, [id_usuario, id_razon, id_estudiante, curso, cantidad, comentario]);

        res.json({ message: "Demerito Added" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deleteDemerito = async (req, res) => {
    try {
        const { id_demerito } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM demerito WHERE id_demerito = ?;", [id_demerito]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const updatedemerito = async (req, res) => {
    try {
        const { id_demerito } = req.params;
        const {  id_razon,  id_estudiante, curso, cantidad, comentario } = req.body;
        if ( !id_razon || !id_estudiante || !curso || !cantidad || !comentario) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }
        const connection = await getConnection();
        const sql = "UPDATE demerito SET  id_razon = ?, fecha = NOW(), id_estudiante = ?, curso = ?, cantidad = ?, comentario = ? WHERE id_demerito = ?;";
        await connection.query(sql, [id_razon,  id_estudiante, curso, cantidad, comentario, id_demerito]);
        res.json("updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export const methods = {
    getDemerito,
    getDemeritos,
    addDemerito,
    deleteDemerito,
    updatedemerito

}