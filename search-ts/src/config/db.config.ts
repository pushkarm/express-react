export const config = {
    HOST: "localhost",
    USER: "postgres_user",
    PASSWORD: "postgres_pass",
    DB: "postgres_db",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export const dialect = "postgres";