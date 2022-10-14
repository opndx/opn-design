export const databaseConfig = () => ({
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    name: process.env.DB_NAME,
  },
});

export type DatabaseConfig = ReturnType<typeof databaseConfig>['database'];
