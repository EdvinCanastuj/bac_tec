import { getConnection } from "./../db/database";

const getDemerito = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT d.id_demerito,  u.nombre,  u.apellido, d.fecha, r.tipo_razon, e.nombres, e.apellidos, g.grado, d.curso, d.cantidad " +
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
        const { id_usuario, id_razon, fecha, id_estudiante, curso, cantidad } = req.body;
        if (!id_usuario || !id_razon || !fecha || !id_estudiante || !curso || !cantidad) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }
        const demerito = { id_usuario, id_razon, fecha, id_estudiante, curso, cantidad};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO demerito SET ?", demerito);
        res.json({ message: "Demerito Added" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deleteDemerito = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM demerito WHERE id_demerito = ?;", [id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const updatedemerito = async (req, res) => {
    try {
        const { id_demerito } = req.params;
        const { id_usuario, id_razon, fecha, id_estudiante, curso, cantidad } = req.body;
        if (!id_usuario || !id_razon || !fecha || !id_estudiante || !curso || !cantidad) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }
        const demerito = { id_usuario, id_razon, fecha, id_estudiante, curso, cantidad};
        const connection = await getConnection();
        const result = await connection.query("UPDATE demerito SET ? WHERE id_demerito = ?;", [demerito, id_demerito]);
        res.json("updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export const methods = {
    getDemerito,
    addDemerito,
    deleteDemerito,
    updatedemerito

}