import { getConnection } from './../db/database';

const getEstudiante = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM estudiante;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methods = {
    getEstudiante
}
