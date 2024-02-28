import { getConnection } from "../db/database";

const getHistorial = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT h.id_historial, DATE_FORMAT(h.fecha_actualizado, '%y-%m-%d') AS Ultima_Modificacion, DATE_FORMAT(h.fecha, '%y-%m-%d') AS Creado, h.curso, h.cantidad, h.comentario, CONCAT( u.nombre,' ', u.apellido) AS Profesor, r.tipo_razon, es.estado, CONCAT(e.nombres,' ', e.apellidos) AS Estudiante, g.grado FROM historial h "+ 
        "INNER JOIN demerito d ON h.id_demerito = d.id_demerito "+
        "INNER JOIN usuario u ON d.id_usuario = u.id_usuario "+
        "INNER JOIN razon r ON d.id_razon = r.id_razon "+
        "INNER JOIN estado es ON d.id_estado = es.id_estado "+
        "INNER JOIN estudiante e ON d.id_estudiante = e.id_estudiante "+
        "INNER JOIN grado g ON e.id_grado = g.id_grado");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methods = {
    getHistorial
};

