import { methods as getConnection } from "../db/database.js";

const getRazon = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM razon;");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export const methods = {
    getRazon
}
