import { getConnection } from "./../db/database";
// metodo para consulta
const getRol = async (req, res) => {
try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM rol;");
    res.json(result);
} catch (error) {
    res.status(500).send(error.message);
}
};
// metodo para insertar
const addRol = async (req, res) => {
try {
    const {  tipo_rol } = req.body;
    if ( !tipo_rol) {
    res.status(400).json({ message: "Bad Request. Please fill all fields." });
    return;
    }
    const rol = { tipo_rol };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO rol SET ?", rol);
    res.json({ message: "Rol Added" });
} catch (error) {
    res.status(500).send(error.message);
}
};
//metodo para eliminar
const deleteRol = async (req, res) => {
try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM rol WHERE id_rol = ?;", [id]);
    res.json(result);
} catch (error) {
    res.status(500).send(error.message);
}
};

// metodo para actualizar
const updateRol = async (req, res) => {
    try {
    const { id_rol } = req.params;
    const { tipo_rol } = req.body;
    // if (!id_rol || !tipo_rol ) {
    // return res.status(400).json({ message: "Bad Request. Please fill all fields." });
    // }
    const rol = { tipo_rol };
    const connection = await getConnection();
    const result = await connection.query("UPDATE rol SET ? WHERE id_rol = ?;", [rol, id_rol]);
    res.json("updated successfully");
} catch (error) {
    res.status(500).send(error.message);
}
};

export const methods = {
    getRol,
    addRol,
    deleteRol,
    updateRol
}
