import { getConnection } from "../db/database";

const getEstado = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM estado;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methods = {
    getEstado
}
