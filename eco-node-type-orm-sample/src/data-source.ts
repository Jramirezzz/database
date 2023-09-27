import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: '', // Your host
    port: , // Default PostgreSQL port
    username: '', // Usuario || process.env.PORT
    password: '', // Contraseña
    database: '', // Nombre
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task],
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
