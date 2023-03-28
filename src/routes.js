const routes = require('express').Router();
const { user } = require('./app/models');

// Criar usuário de teste ao rodar o server pela primeira vez
(async () => {
    try {
        await user.create({ 
            name: 'Teste', 
            email: 'testedev@gmail.com', 
            password_hash: '0123456789101112'
        })
    
    }
    catch (error) {
        console.log("Error: Failed at create user example\n"+error)
    }

})();

module.exports = routes