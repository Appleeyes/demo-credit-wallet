import { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "democredit",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
