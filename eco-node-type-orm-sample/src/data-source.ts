import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'ep-namels-tree-91732974.us-east-2.aws.neon.tech', // Your host
    port: 5432, // Default PostgreSQL port
    username: 'fl0user', // Usuario || process.env.PORT
    password: 'fn2vdPq8VzWi', // Contraseña
    database: 'ECO-DB', // Nombre
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task],
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
