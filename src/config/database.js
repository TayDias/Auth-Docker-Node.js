module.exports = {
  host: '172.17.0.1',
  port: '32768',
  username: 'postgres',
  password: 'postgrespw',
  database: 'postgres',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    uderscored: true
  }
}

// operatorsAliases: false -> remove alerta que parece durante os testes
// logging: false -> remove logs que aparecem ao rodar as migrations
// timestamps: true -> incluir os campos createdAt e updatedAt para cada registro nas tabelas do banco de dados 
// uderscored: true -> nomear as tabelas que tem espaços no nome separando por uderline
// uderscoredAll: true -> nomear os campos das tabelas que tem espaços no nome separando por uderline