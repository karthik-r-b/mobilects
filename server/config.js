const sequelize = new Sequelize('database', username, password, {
  host: 'localhost',
  dialect: 'mysql',
  logging: function () {},
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock',
  },
  define: {
    paranoid: true,
  },
});

const connect = new Sequilize(
  'database',
  credentials.user,
  credentials.password,
  {
    host: 'localhost',
    dialect: credentials.user,
    logging: false,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
export { connect };
