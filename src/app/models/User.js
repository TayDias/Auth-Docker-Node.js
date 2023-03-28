//Model de usuários

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User
}