module.exports = (sequelize , DataTypes) => {

    const Tarefa = sequelize.define('Tarefa', {

        descricao: DataTypes.STRING,
        status: DataTypes.STRING,
        
    });
    
    return Tarefa;
}